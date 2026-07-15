import { z } from "zod"

export const createTransactionSchema = z.object({
  id: z.string().optional(),

  name: z.string().optional(),

  entries: z
    .array(
      z.object({
        accountId: z.string(),

        direction: z.enum(["debit", "credit"]),

        amount: z.number().positive(),
      }),
    )
    .min(2),
})

export type CreateTransactionRequest = z.infer<typeof createTransactionSchema>
