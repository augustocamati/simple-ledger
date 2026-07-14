import { makeCreateTransactionUseCase } from "../../main/factories/makeCreateTransactionUseCase"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export const createTransactionSchema = z.object({
  name: z.string(),

  entries: z.array(
    z.object({
      accountId: z.string(),

      direction: z.enum(["debit", "credit"]),

      amount: z.number(),
    }),
  ),
})


export class TransactionController {
  async create(req: FastifyRequest, res: FastifyReply) {
    const body = createTransactionSchema.parse(req.body)
    const createTransaction = makeCreateTransactionUseCase()

    const transaction = await createTransaction.execute(body)

    return res.status(201).send(transaction)
  }
}
