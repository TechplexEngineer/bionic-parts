<script lang="ts">
  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  import { minutesToTimeLabel } from '$lib/when2meet/time';
  import type { GridColumn, AggregateMap, TopSlot } from '$lib/when2meet/grid';

  export let data: PageData;

  $: event = data.event;
  $: columns = data.event.columns as GridColumn[];
  $: participants = data.participants;
  $: aggregates = data.aggregates as AggregateMap;
  $: topSlots = data.topSlots as TopSlot[];

  // Participant session
  let participantId = '';
  let editToken = '';
  let displayName = '';
  let nameInput = '';
  let joinError = '';
  let joining = false;

  // My availability: Set of "columnKey:slotIndex"
  let myAvailability: Set<string> = new Set();

  onMount(() => {
    const stored = localStorage.getItem(`w2m_${event.slug}`);
    if (stored) {
      try {
        const s = JSON.parse(stored);
        participantId = s.participantId || '';
        editToken = s.editToken || '';
        displayName = s.displayName || '';
        myAvailability = new Set(s.availability || []);
      } catch {
        // ignore malformed storage
      }
    }
  });

  function saveSession() {
    localStorage.setItem(`w2m_${event.slug}`, JSON.stringify({
      participantId, editToken, displayName,
      availability: [...myAvailability]
    }));
  }

  async function handleJoin() {
    joinError = '';
    const name = nameInput.trim().replace(/\s+/g, ' ').slice(0, 40);
    if (!name) { joinError = 'Please enter your name.'; return; }
    joining = true;
    try {
      const res = await fetch(`/api/when2meet/events/${event.slug}/participants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName: name })
      });
      const d = await res.json() as { error?: string; participantId: string; editToken: string; displayName: string };
      if (!res.ok) { joinError = d.error || 'Failed to join.'; joining = false; return; }
      participantId = d.participantId;
      editToken = d.editToken;
      displayName = d.displayName;
      nameInput = '';
      saveSession();
      const evRes = await fetch(`/api/when2meet/events/${event.slug}`);
      if (evRes.ok) {
        const evData = await evRes.json() as { participants: typeof participants; aggregates: AggregateMap; topSlots: TopSlot[] };
        data = { ...data, participants: evData.participants, aggregates: evData.aggregates, topSlots: evData.topSlots };
      }
    } catch {
      joinError = 'Network error. Please try again.';
    }
    joining = false;
  }

  function handleLeave() {
    participantId = '';
    editToken = '';
    displayName = '';
    myAvailability = new Set();
    localStorage.removeItem(`w2m_${event.slug}`);
  }

  // Grid slots
  $: slots = (() => {
    const s: number[] = [];
    for (let m = event.startTimeMinutes; m < event.endTimeMinutes; m += event.slotIntervalMinutes) {
      s.push(m);
    }
    return s;
  })();

  // Drag painting
  let dragActive = false;
  let dragMode: 'add' | 'remove' = 'add';
  let pendingChanges: { columnKey: string; slotIndex: number }[] = [];

  function cellKey(columnKey: string, slotIndex: number) {
    return `${columnKey}:${slotIndex}`;
  }

  function onCellMouseDown(columnKey: string, slotIndex: number) {
    if (!participantId) return;
    if (event.status !== 'active') return;
    const key = cellKey(columnKey, slotIndex);
    dragActive = true;
    dragMode = myAvailability.has(key) ? 'remove' : 'add';
    pendingChanges = [];
    toggleCell(columnKey, slotIndex);
  }

  function onCellMouseEnter(columnKey: string, slotIndex: number) {
    if (!dragActive) return;
    toggleCell(columnKey, slotIndex);
  }

  function toggleCell(columnKey: string, slotIndex: number) {
    const key = cellKey(columnKey, slotIndex);
    if (dragMode === 'add') {
      if (!myAvailability.has(key)) {
        myAvailability.add(key);
        pendingChanges.push({ columnKey, slotIndex });
      }
    } else {
      if (myAvailability.has(key)) {
        myAvailability.delete(key);
        pendingChanges.push({ columnKey, slotIndex });
      }
    }
    myAvailability = myAvailability;
  }

  async function onMouseUp() {
    if (!dragActive) return;
    dragActive = false;
    if (pendingChanges.length === 0) return;
    const changes = pendingChanges.splice(0);
    saveSession();
    try {
      const res = await fetch(`/api/when2meet/events/${event.slug}/availability/batch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ participantId, editToken, operation: dragMode, changes })
      });
      if (res.ok) {
        const d = await res.json() as { updatedAggregateDeltas: { columnKey: string; slotIndex: number; count: number }[] };
        for (const delta of d.updatedAggregateDeltas) {
          if (!aggregates[delta.columnKey]) aggregates[delta.columnKey] = {};
          aggregates[delta.columnKey][delta.slotIndex] = delta.count;
        }
        aggregates = aggregates;
        const evRes = await fetch(`/api/when2meet/events/${event.slug}`);
        if (evRes.ok) {
          const evData = await evRes.json() as { aggregates: AggregateMap; topSlots: TopSlot[] };
          data = { ...data, aggregates: evData.aggregates, topSlots: evData.topSlots };
        }
      }
    } catch {
      // ignore fetch errors silently — UI state is already updated optimistically
    }
  }

  // Tooltip state
  let tooltipVisible = false;
  let tooltipX = 0;
  let tooltipY = 0;
  let tooltipColumnKey = '';
  let tooltipSlotIndex = -1;
  let tooltipNames: string[] = [];
  let tooltipCount = 0;

  async function showTooltip(e: MouseEvent, columnKey: string, slotIndex: number) {
    tooltipColumnKey = columnKey;
    tooltipSlotIndex = slotIndex;
    tooltipCount = aggregates[columnKey]?.[slotIndex] ?? 0;
    tooltipX = e.clientX + 12;
    tooltipY = e.clientY + 12;
    tooltipVisible = true;
    try {
      const res = await fetch(`/api/when2meet/events/${event.slug}/slots/names?columnKey=${encodeURIComponent(columnKey)}&slotIndex=${slotIndex}`);
      if (res.ok) {
        const d = await res.json() as { names: string[] };
        tooltipNames = d.names;
      }
    } catch {
      // tooltip names are non-critical
    }
  }

  function hideTooltip() {
    tooltipVisible = false;
  }

  $: participantCount = participants.length;

  function getCellStyle(columnKey: string, slotIndex: number): string {
    const count = aggregates[columnKey]?.[slotIndex] ?? 0;
    const key = cellKey(columnKey, slotIndex);
    const isMine = myAvailability.has(key);
    const ratio = count / Math.max(1, participantCount);

    if (isMine && count > 0) {
      const alpha = 0.3 + ratio * 0.7;
      return `background: rgba(25, 135, 84, ${alpha}); outline: 2px solid #146c43;`;
    } else if (isMine) {
      return 'background: rgba(25, 135, 84, 0.5); outline: 2px solid #146c43;';
    } else if (count > 0) {
      const alpha = 0.15 + ratio * 0.75;
      return `background: rgba(13, 110, 253, ${alpha});`;
    }
    return '';
  }
</script>

<svelte:window on:mouseup={onMouseUp} />

<div class="container-fluid mt-3 px-3" style="max-width:1200px;">
  <!-- Header -->
  <div class="mb-3">
    <h1 class="mb-1">{event.title}</h1>
    {#if event.description}
      <p class="text-muted mb-1">{event.description}</p>
    {/if}
    <small class="text-muted">Timezone: {event.timezone} &nbsp;·&nbsp; {participantCount} participant{participantCount !== 1 ? 's' : ''}</small>
    {#if event.status === 'locked'}
      <span class="badge bg-warning text-dark ms-2">Locked</span>
    {/if}
  </div>

  <div class="row g-3">
    <!-- Left sidebar -->
    <div class="col-12 col-md-3">
      <!-- Join / identity card -->
      <div class="card mb-3">
        <div class="card-body">
          {#if !participantId}
            <h6 class="card-title">Join &amp; Mark Availability</h6>
            {#if joinError}
              <div class="alert alert-danger py-1 small">{joinError}</div>
            {/if}
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Your name"
              bind:value={nameInput}
              maxlength="40"
              aria-label="Display name"
              on:keydown={(e) => e.key === 'Enter' && handleJoin()}
            />
            <button class="btn btn-primary w-100" on:click={handleJoin} disabled={joining} aria-busy={joining}>
              {joining ? 'Joining…' : 'Join'}
            </button>
          {:else}
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="fw-bold">{displayName}</span>
              <span class="badge bg-success">Active</span>
            </div>
            {#if event.status === 'active'}
              <p class="text-muted small mb-2">Click or drag on the grid to mark your availability.</p>
            {:else}
              <p class="text-warning small mb-2">This event is locked. No more edits allowed.</p>
            {/if}
            <button class="btn btn-sm btn-outline-danger w-100" on:click={handleLeave}>
              Leave / Clear Session
            </button>
          {/if}
        </div>
      </div>

      <!-- Participant list -->
      {#if participants.length > 0}
        <div class="card mb-3">
          <div class="card-body">
            <h6 class="card-title">Participants ({participants.length})</h6>
            <ul class="list-unstyled mb-0">
              {#each participants as p}
                <li class="small py-1 border-bottom {p.id === participantId ? 'fw-bold text-success' : ''}">{p.displayName}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/if}

      <!-- Top times summary -->
      {#if topSlots && topSlots.length > 0}
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Best Times</h6>
            {#each topSlots as slot}
              <div class="mb-2 small">
                <div class="fw-semibold">{slot.columnLabel}</div>
                <div>{minutesToTimeLabel(slot.startMinutes)} – {minutesToTimeLabel(slot.endMinutes)}</div>
                <div class="text-muted">{slot.availableCount}/{slot.participantCount} available</div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>

    <!-- Grid -->
    <div class="col-12 col-md-9">
      <div class="availability-wrapper">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="availability-grid"
          style="grid-template-columns: 70px repeat({columns.length}, minmax(50px, 1fr));"
          on:dragstart|preventDefault={() => {}}
        >
          <!-- Header row -->
          <div class="grid-corner"></div>
          {#each columns as col}
            <div class="grid-col-header">{col.label}</div>
          {/each}

          <!-- Slot rows -->
          {#each slots as slotMinutes, si}
            <div class="grid-time-label">
              {#if si % 4 === 0}
                {minutesToTimeLabel(slotMinutes)}
              {/if}
            </div>
            {#each columns as col}
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="grid-cell"
                style={getCellStyle(col.key, si)}
                on:mousedown={() => onCellMouseDown(col.key, si)}
                on:mouseenter={(e) => { onCellMouseEnter(col.key, si); showTooltip(e, col.key, si); }}
                on:mouseleave={hideTooltip}
                aria-label="{col.label} {minutesToTimeLabel(slotMinutes)}"
                role="button"
                tabindex="-1"
              ></div>
            {/each}
          {/each}
        </div>
      </div>

      <!-- Legend -->
      <div class="d-flex align-items-center gap-3 mt-2 small text-muted flex-wrap">
        <span>
          <span class="legend-swatch" style="background:rgba(13,110,253,0.15);"></span> 1 person
        </span>
        <span>
          <span class="legend-swatch" style="background:rgba(13,110,253,0.9);"></span> Everyone
        </span>
        {#if participantId}
          <span>
            <span class="legend-swatch" style="background:rgba(25,135,84,0.5); outline:2px solid #146c43;"></span> You
          </span>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Tooltip -->
{#if tooltipVisible}
  <div class="grid-tooltip" style="left:{tooltipX}px; top:{tooltipY}px;">
    <div class="fw-semibold">{columns.find(c => c.key === tooltipColumnKey)?.label}</div>
    <div>{minutesToTimeLabel(event.startTimeMinutes + tooltipSlotIndex * event.slotIntervalMinutes)} – {minutesToTimeLabel(event.startTimeMinutes + (tooltipSlotIndex + 1) * event.slotIntervalMinutes)}</div>
    <div class="mt-1">{tooltipCount} / {participantCount} available</div>
    {#if tooltipNames.length > 0}
      <div class="mt-1 text-muted">{tooltipNames.join(', ')}</div>
    {/if}
  </div>
{/if}

<style>
  .availability-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .availability-grid {
    display: grid;
    gap: 1px;
    background: #dee2e6;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    overflow: hidden;
    user-select: none;
    min-width: 300px;
  }
  .grid-corner {
    background: white;
  }
  .grid-col-header {
    background: #f8f9fa;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .grid-time-label {
    background: white;
    font-size: 0.7rem;
    color: #666;
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    white-space: nowrap;
  }
  .grid-cell {
    background: white;
    height: 14px;
    cursor: pointer;
    transition: background 0.05s;
  }
  .grid-cell:hover {
    filter: brightness(0.85);
  }
  .grid-tooltip {
    position: fixed;
    z-index: 1000;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 0.85rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    pointer-events: none;
    max-width: 200px;
  }
  .legend-swatch {
    display: inline-block;
    width: 16px;
    height: 12px;
    border-radius: 2px;
  }
</style>
