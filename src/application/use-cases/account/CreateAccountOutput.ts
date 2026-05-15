import { Direction } from "../../../domain/shared/Direction"

export interface CreateAccountOutput {
    id: string
    name: string
    balance: number
    direction: Direction
}