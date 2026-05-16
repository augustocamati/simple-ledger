import { Direction } from "../../../domain/shared/Direction"

export interface CreateTransactionInput {
  id?: string
  name: string
  entries: {
    accountId: string
    direction: Direction
    amount: number
  }[]
}