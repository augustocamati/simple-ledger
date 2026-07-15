import { Direction } from "../../../domain/shared/Direction"


export interface CreateTransactionEntryInput {
  accountId: string
  direction: Direction
  amount: number
}
export interface CreateTransactionInput {
  id?: string
  name?: string
  entries: CreateTransactionEntryInput[]
}