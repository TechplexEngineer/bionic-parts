import {z} from 'zod';

export const createProjectSchema = z.object({
    name: z.string().min(3),
    documents: z.array(z.string().min(6).optional()),
    trelloBoardAndList: z.object({
        value: z.object({
            board: z.string().min(5),
            list: z.string().min(5),
        }),
        label: z.string(),
    }),
    onshapeTeamsWrite: z.array(z.object({
        value: z.string(),
        label: z.string(),
    })),
});