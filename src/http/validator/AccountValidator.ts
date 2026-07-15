import { z } from "zod"


export const getAccountSchema = z.object({
  id: z.string(),
})

export const createAccountSchema = z.object({
  id: z.string().optional(),
  name: z.string(),

  balance: z.number().default(0),

  direction: z.enum(["debit", "credit"]),
})

export type CreateAccountRequest = z.infer<typeof createAccountSchema>
export type GetAccountRequest = z.infer<typeof getAccountSchema>
