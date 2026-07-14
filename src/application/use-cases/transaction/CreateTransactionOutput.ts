import { Direction } from "../../../domain/shared/Direction"

export interface CreateTransactionEntryInput {
    id?: string
  accountId: string
  direction: Direction
  amount: number
}
export interface CreateTransactionOutput {
  id: string
  name: string
  entries: CreateTransactionEntryInput[]
}