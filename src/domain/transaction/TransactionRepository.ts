import { Entry } from "../entry/EntryEntity"
import { Transaction } from "./TransactionEntity"


export interface ITransactionRepository {
  save(transaction: Transaction): Promise<void>
  getEntriesForAccount(accountId: string): Promise<Entry[]>
  findById(id: string): Promise<Transaction | null>
}