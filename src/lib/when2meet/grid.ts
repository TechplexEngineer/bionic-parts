// Grid utility types and helpers for when2meet

export interface GridColumn {
  key: string;
  label: string;
}

export interface AggregateMap {
  [columnKey: string]: {
    [slotIndex: number]: number;
  };
}

export interface TopSlot {
  columnKey: string;
  columnLabel: string;
  startSlotIndex: number;
  endSlotIndex: number;
  availableCount: number;
  participantCount: number;
  startMinutes: number;
  endMinutes: number;
}

export function computeTopSlots(
  aggregates: AggregateMap,
  columns: GridColumn[],
  participantCount: number,
  slotCount: number,
  startMinutes: number,
  intervalMinutes: number,
  topN = 5
): TopSlot[] {
  // Collect all (columnKey, slotIndex, count) entries
  const entries: { columnKey: string; slotIndex: number; count: number }[] = [];
  for (const [columnKey, slots] of Object.entries(aggregates)) {
    for (const [slotIndexStr, count] of Object.entries(slots)) {
      entries.push({ columnKey, slotIndex: Number(slotIndexStr), count });
    }
  }

  // Sort by count desc, then by column order, then slot index
  const columnOrder = Object.fromEntries(columns.map((c, i) => [c.key, i]));
  entries.sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    const colDiff = (columnOrder[a.columnKey] ?? 999) - (columnOrder[b.columnKey] ?? 999);
    if (colDiff !== 0) return colDiff;
    return a.slotIndex - b.slotIndex;
  });

  if (entries.length === 0) return [];

  // Group contiguous slots per column
  const result: TopSlot[] = [];
  let i = 0;
  while (result.length < topN && i < entries.length) {
    const { columnKey, slotIndex, count } = entries[i];
    if (count === 0) break;
    const col = columns.find((c) => c.key === columnKey);
    if (!col) { i++; continue; }
    // Find contiguous run in same column with same count
    let end = slotIndex;
    let j = i + 1;
    while (j < entries.length) {
      const next = entries[j];
      if (next.columnKey === columnKey && next.slotIndex === end + 1 && next.count === count) {
        end = next.slotIndex;
        j++;
      } else break;
    }
    result.push({
      columnKey,
      columnLabel: col.label,
      startSlotIndex: slotIndex,
      endSlotIndex: end,
      availableCount: count,
      participantCount,
      startMinutes: startMinutes + slotIndex * intervalMinutes,
      endMinutes: startMinutes + (end + 1) * intervalMinutes,
    });
    i = j;
  }

  return result;
}
