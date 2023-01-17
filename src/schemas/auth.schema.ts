import { z } from 'zod';

export const loginSchema = z
  .object({
    email: z.string().min(1, 'Email min length is 1 character').email(),
    password: z.string().min(6, 'The password must have at least 6 characters'),
  })
  .strict();
