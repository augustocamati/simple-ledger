import { Direction } from "../../../domain/shared/Direction"

export interface CreateAccountInput {
    id?: string
    name: string
    balance: number
    direction: Direction
}