import { Transaction } from "../../domain/transaction/TransactionEntity"
import { CreateTransactionOutput } from "../dto/transaction/CreateTransactionOutput"

export class TransactionMapper {
  static toResponse(transaction: Transaction): CreateTransactionOutput {
    return {
      id: transaction.id,
      name: transaction.name,
      entries: transaction.entries.map((entry) => ({
        id: entry.id,
        accountId: entry.accountId,
        direction: entry.direction,
        amount: entry.amount,
      })),
    }
  }
}
