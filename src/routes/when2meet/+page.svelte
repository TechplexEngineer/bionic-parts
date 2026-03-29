<script lang="ts">
  import { goto } from '$app/navigation';
  import { WEEKDAY_LONG_LABELS, minutesToTimeLabel } from '$lib/when2meet/time';

  let mode: 'specific_dates' | 'days_of_week' = 'specific_dates';
  let title = '';
  let description = '';
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let startTimeMinutes = 9 * 60; // 9 AM
  let endTimeMinutes = 17 * 60; // 5 PM
  let selectedDates: Set<string> = new Set();
  let selectedWeekdays: Set<number> = new Set();
  let submitting = false;
  let error = '';

  // Calendar state
  let calendarYear = new Date().getFullYear();
  let calendarMonth = new Date().getMonth(); // 0-indexed

  // Drag state for date selection
  let dragging = false;
  let dragAdding = true;

  // Generate time options: every 30 minutes from 0 to 24:00
  // 24*60 (midnight end) is displayed as 11:59 PM to avoid showing "12:00 AM" for end-of-day
  const timeOptions: { value: number; label: string }[] = [];
  for (let m = 0; m <= 24 * 60; m += 30) {
    timeOptions.push({ value: m, label: minutesToTimeLabel(m === 24 * 60 ? 23 * 60 + 59 : m) });
  }

  // Timezone search
  let timezoneSearch = '';
  $: filteredTimezones = (() => {
    try {
      const all = Intl.supportedValuesOf('timeZone') as string[];
      if (!timezoneSearch) return all;
      const q = timezoneSearch.toLowerCase();
      return all.filter((tz: string) => tz.toLowerCase().includes(q));
    } catch {
      return [timezone];
    }
  })();

  // Calendar helpers
  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }
  function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
  }
  function toIso(year: number, month: number, day: number) {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }

  $: calendarCells = (() => {
    const days = getDaysInMonth(calendarYear, calendarMonth);
    const firstDay = getFirstDayOfMonth(calendarYear, calendarMonth);
    const cells: (string | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= days; d++) cells.push(toIso(calendarYear, calendarMonth, d));
    return cells;
  })();

  const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function prevMonth() { if (calendarMonth === 0) { calendarMonth = 11; calendarYear--; } else calendarMonth--; }
  function nextMonth() { if (calendarMonth === 11) { calendarMonth = 0; calendarYear++; } else calendarMonth++; }

  function onDateMouseDown(dateIso: string) {
    dragging = true;
    dragAdding = !selectedDates.has(dateIso);
    toggleDate(dateIso);
  }
  function onDateMouseEnter(dateIso: string) {
    if (!dragging) return;
    if (dragAdding) selectedDates.add(dateIso);
    else selectedDates.delete(dateIso);
    selectedDates = selectedDates;
  }
  function onDateMouseUp() { dragging = false; }

  function toggleDate(dateIso: string) {
    if (selectedDates.has(dateIso)) selectedDates.delete(dateIso);
    else selectedDates.add(dateIso);
    selectedDates = selectedDates;
  }
  function toggleWeekday(day: number) {
    if (selectedWeekdays.has(day)) selectedWeekdays.delete(day);
    else selectedWeekdays.add(day);
    selectedWeekdays = selectedWeekdays;
  }

  async function handleSubmit() {
    error = '';
    if (!title.trim()) { error = 'Please enter an event name.'; return; }
    if (mode === 'specific_dates' && selectedDates.size === 0) { error = 'Please choose at least one date.'; return; }
    if (mode === 'days_of_week' && selectedWeekdays.size === 0) { error = 'Please choose at least one day.'; return; }
    if (endTimeMinutes <= startTimeMinutes) { error = 'End time must be after start time.'; return; }
    if (!timezone) { error = 'Timezone required.'; return; }

    submitting = true;
    try {
      const res = await fetch('/api/when2meet/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim() || undefined,
          mode,
          timezone,
          startTimeMinutes,
          endTimeMinutes,
          slotIntervalMinutes: 15,
          selectedDates: mode === 'specific_dates' ? [...selectedDates].sort() : [],
          selectedWeekdays: mode === 'days_of_week' ? [...selectedWeekdays].sort((a, b) => a - b) : [],
        })
      });
      const data = await res.json() as Record<string, string>;
      if (!res.ok) { error = (data.error as string) || 'Failed to create event.'; submitting = false; return; }
      goto(data.publicUrl);
    } catch {
      error = 'Network error. Please try again.';
      submitting = false;
    }
  }
</script>

<svelte:window on:mouseup={onDateMouseUp} />

<div class="container mt-4" style="max-width: 700px;">
  <h1 class="mb-3">Create a Scheduling Poll</h1>
  <p class="text-muted mb-4">When2Meet-style — pick dates and times, share a link, collect availability.</p>

  {#if error}
    <div class="alert alert-danger">{error}</div>
  {/if}

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Event Details</h5>
      <div class="mb-3">
        <label for="event-title" class="form-label">Event Name <span class="text-danger">*</span></label>
        <input id="event-title" type="text" class="form-control" bind:value={title} maxlength="120" placeholder="e.g. Team Meeting" />
      </div>
      <div class="mb-3">
        <label for="event-desc" class="form-label">Description <span class="text-muted">(optional)</span></label>
        <textarea id="event-desc" class="form-control" bind:value={description} rows="2" maxlength="1000" placeholder="Any extra info for participants…"></textarea>
      </div>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Date Selection Mode</h5>
      <div class="btn-group w-100 mb-3" role="group">
        <button type="button" class="btn {mode === 'specific_dates' ? 'btn-primary' : 'btn-outline-primary'}" on:click={() => mode = 'specific_dates'}>
          Specific Dates
        </button>
        <button type="button" class="btn {mode === 'days_of_week' ? 'btn-primary' : 'btn-outline-primary'}" on:click={() => mode = 'days_of_week'}>
          Days of the Week
        </button>
      </div>

      {#if mode === 'specific_dates'}
        <!-- Calendar -->
        <div class="d-flex align-items-center justify-content-between mb-2">
          <button class="btn btn-sm btn-outline-secondary" on:click={prevMonth} aria-label="Previous month">&larr;</button>
          <strong>{MONTH_NAMES[calendarMonth]} {calendarYear}</strong>
          <button class="btn btn-sm btn-outline-secondary" on:click={nextMonth} aria-label="Next month">&rarr;</button>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <div class="calendar-grid" on:mouseleave={onDateMouseUp} role="grid" tabindex="0" aria-label="Date selection calendar">
          {#each ['Su','Mo','Tu','We','Th','Fr','Sa'] as day}
            <div class="cal-header" role="columnheader">{day}</div>
          {/each}
          {#each calendarCells as cell}
            {#if cell === null}
              <div class="cal-empty" role="gridcell"></div>
            {:else}
              {@const dateIso = cell}
              <div
                class="cal-day {selectedDates.has(dateIso) ? 'selected' : ''}"
                role="gridcell"
                tabindex="0"
                aria-selected={selectedDates.has(dateIso)}
                aria-label={dateIso}
                on:mousedown={() => onDateMouseDown(dateIso)}
                on:mouseenter={() => onDateMouseEnter(dateIso)}
                on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleDate(dateIso)}
              >
                {Number(dateIso.split('-')[2])}
              </div>
            {/if}
          {/each}
        </div>
        <div class="mt-2 text-muted small">
          {selectedDates.size} date{selectedDates.size !== 1 ? 's' : ''} selected. Click or drag to toggle.
        </div>
      {:else}
        <!-- Days of week -->
        <div class="d-flex flex-wrap gap-2">
          {#each WEEKDAY_LONG_LABELS as day, i}
            <button
              type="button"
              class="btn {selectedWeekdays.has(i) ? 'btn-primary' : 'btn-outline-secondary'}"
              on:click={() => toggleWeekday(i)}
              aria-pressed={selectedWeekdays.has(i)}
            >{day}</button>
          {/each}
        </div>
      {/if}
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Time Range</h5>
      <div class="row g-3">
        <div class="col-sm-6">
          <label for="start-time" class="form-label">Earliest Time</label>
          <select id="start-time" class="form-select" bind:value={startTimeMinutes}>
            {#each timeOptions.filter(t => t.value < 24 * 60) as opt}
              <option value={opt.value}>{opt.label}</option>
            {/each}
          </select>
        </div>
        <div class="col-sm-6">
          <label for="end-time" class="form-label">Latest Time</label>
          <select id="end-time" class="form-select" bind:value={endTimeMinutes}>
            {#each timeOptions.filter(t => t.value > 0) as opt}
              <option value={opt.value}>{opt.label}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">Timezone</h5>
      <input type="text" class="form-control mb-2" placeholder="Search timezone…" bind:value={timezoneSearch} aria-label="Search timezone" />
      <select class="form-select" bind:value={timezone} id="timezone-select" aria-label="Select timezone" size="4" style="height: auto;">
        {#each filteredTimezones as tz}
          <option value={tz}>{tz}</option>
        {/each}
      </select>
      <div class="mt-1 text-muted small">Selected: {timezone}</div>
    </div>
  </div>

  <button class="btn btn-success btn-lg w-100" on:click={handleSubmit} disabled={submitting} aria-busy={submitting}>
    {submitting ? 'Creating…' : 'Create Event & Get Link'}
  </button>
</div>

<style>
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    user-select: none;
  }
  .cal-header {
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    color: #666;
    padding: 4px 0;
  }
  .cal-day {
    text-align: center;
    padding: 6px 2px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid transparent;
    font-size: 0.9rem;
    transition: background 0.1s;
  }
  .cal-day:hover {
    background: #e9ecef;
  }
  .cal-day.selected {
    background: #0d6efd;
    color: white;
    border-color: #0a58ca;
  }
</style>
