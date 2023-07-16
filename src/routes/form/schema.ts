import {z} from 'zod';

export const schema = z.object({
    name: z.string().min(3),//.default('Hello world!'),
    email: z.string().email()
});