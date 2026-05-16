import { Direction } from "../../../domain/shared/Direction"

export interface CreateTransactionOutput {
    id: string
    name: string
    entries: {
        accountId: string
        direction: Direction
        amount: number
    }[]
}