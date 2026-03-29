<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  let title = data.event.title;
  let description = data.event.description ?? '';
  let saving = false;
  let saveMsg = '';
  let deleting = false;

  async function save() {
    saving = true;
    saveMsg = '';
    try {
      const res = await fetch(`/api/when2meet/events/${data.event.slug}/manage/${data.token}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), description: description.trim() })
      });
      const d = await res.json() as { error?: string };
      if (!res.ok) { saveMsg = d.error || 'Failed to save.'; } else { saveMsg = 'Saved!'; }
    } catch { saveMsg = 'Network error.'; }
    saving = false;
  }

  async function toggleLock() {
    const newStatus = data.event.status === 'locked' ? 'active' : 'locked';
    try {
      const res = await fetch(`/api/when2meet/events/${data.event.slug}/manage/${data.token}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) data = { ...data, event: { ...data.event, status: newStatus } };
    } catch {
      // ignore
    }
  }

  async function deleteEvent() {
    if (!confirm('Delete this event? This cannot be undone.')) return;
    deleting = true;
    try {
      const res = await fetch(`/api/when2meet/events/${data.event.slug}/manage/${data.token}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'deleted' })
      });
      if (res.ok) window.location.href = '/when2meet';
    } catch {
      // ignore
    }
    deleting = false;
  }
</script>

<div class="container mt-4" style="max-width:600px;">
  <h1>Manage Event</h1>
  <a href="/when2meet/event/{data.event.slug}" class="btn btn-sm btn-outline-secondary mb-3">← View Event</a>

  <div class="card mb-3">
    <div class="card-body">
      <h5>Details</h5>
      {#if saveMsg}
        <div class="alert alert-{saveMsg === 'Saved!' ? 'success' : 'danger'} py-1 small">{saveMsg}</div>
      {/if}
      <div class="mb-3">
        <label class="form-label" for="manage-title">Title</label>
        <input id="manage-title" type="text" class="form-control" bind:value={title} maxlength="120" />
      </div>
      <div class="mb-3">
        <label class="form-label" for="manage-desc">Description</label>
        <textarea id="manage-desc" class="form-control" bind:value={description} rows="3" maxlength="1000"></textarea>
      </div>
      <button class="btn btn-primary" on:click={save} disabled={saving}>{saving ? 'Saving…' : 'Save Changes'}</button>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5>Participants</h5>
      <p class="text-muted">{data.participantCount} participant{data.participantCount !== 1 ? 's' : ''} have joined.</p>
      {#if data.participantCount > 0}
        <div class="alert alert-info small">Structural changes (dates, time range) are disabled after participants join.</div>
      {/if}
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5>Status</h5>
      <p>Current status: <strong>{data.event.status}</strong></p>
      <button class="btn btn-warning me-2" on:click={toggleLock}>
        {data.event.status === 'locked' ? 'Unlock Event' : 'Lock Event'}
      </button>
      <button class="btn btn-danger" on:click={deleteEvent} disabled={deleting}>
        {deleting ? 'Deleting…' : 'Delete Event'}
      </button>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5>Share Links</h5>
      <div class="mb-2">
        <label class="form-label small fw-semibold" for="public-link">Public link (share with participants)</label>
        <div class="input-group">
          <input id="public-link" type="text" class="form-control form-control-sm" value="{typeof window !== 'undefined' ? window.location.origin : ''}/when2meet/event/{data.event.slug}" readonly aria-label="Public link" />
        </div>
      </div>
      <div>
        <label class="form-label small fw-semibold" for="manage-link">Management link (keep private)</label>
        <div class="input-group">
          <input id="manage-link" type="text" class="form-control form-control-sm" value="{typeof window !== 'undefined' ? window.location.origin : ''}/when2meet/event/{data.event.slug}/manage/{data.token}" readonly aria-label="Management link" />
        </div>
      </div>
    </div>
  </div>
</div>
