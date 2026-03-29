// Time utilities for when2meet

export function minutesToTimeLabel(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const ampm = h < 12 ? 'AM' : 'PM';
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  const minStr = m === 0 ? '00' : m.toString().padStart(2, '0');
  return `${hour12}:${minStr} ${ampm}`;
}

export function generateSlots(startMinutes: number, endMinutes: number, intervalMinutes: number): number[] {
  const slots: number[] = [];
  for (let m = startMinutes; m < endMinutes; m += intervalMinutes) {
    slots.push(m);
  }
  return slots;
}

export function slotIndexToMinutes(slotIndex: number, startMinutes: number, intervalMinutes: number): number {
  return startMinutes + slotIndex * intervalMinutes;
}

export function minutesToSlotIndex(minutes: number, startMinutes: number, intervalMinutes: number): number {
  return Math.floor((minutes - startMinutes) / intervalMinutes);
}

export const TIMEZONES = Intl.supportedValuesOf('timeZone');

export function formatDateColumn(dateIso: string): string {
  const [year, month, day] = dateIso.split('-').map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

export const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const WEEKDAY_LONG_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function formatWeekdayColumn(weekday: number): string {
  return WEEKDAY_LONG_LABELS[weekday];
}
