import { npm_config_resolution_mode } from '$env/static/private';
import { z } from '$lib/myzod';

export const orderRequestSchema = z.object({
    requester: z.string().min(3).annotate({ label: "Requester (Your Name)" }),
    item: z.string().min(3).annotate({ label: "Item Name" }),
    partNumber: z.string().min(3).optional().annotate({ label: "Part Number" }),
    quantity: z.number().int()
        .positive().transform((val) => {
            console.log(val);
            return !Number.isNaN(parseInt(val, 10));
        })
        .annotate({ label: "Quantity", field: { type: "number" } }),
});