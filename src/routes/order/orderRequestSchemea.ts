import { z } from '$lib/myzod';

export const orderRequestSchema = z.object({
    requester: z.string().min(3).annotate({ label: "Requester (Your Name)" }),
    item: z.string().min(3).annotate({ label: "Item Name" }),
    partNumber: z.string().min(3).optional().annotate({ label: "Part Number" }),
    vendor: z.string().min(3).optional().annotate({ label: "Vendor" }),
    quantity: z.string().annotate({ label: "Quantity", field: { type: "number" } }),
});