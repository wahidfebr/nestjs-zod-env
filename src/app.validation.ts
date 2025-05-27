import { z } from 'zod/v4';
import env from './env';

export const UserSchema = z.object({
  name: z.string().trim().min(1),
  secret: z
    .string()
    .trim()
    .min(1)
    .optional()
    .refine((val) => val === env.SECRET),
});
