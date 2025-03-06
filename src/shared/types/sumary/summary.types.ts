import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const SumarySchema = z.object({
  sumary: z.string().min(1, { message: 'Please in sumanry' }),
  prompt: z.string().optional(),
});

export const SumaryResolver = zodResolver(SumarySchema);

export type Sumary = z.infer<typeof SumarySchema>;
