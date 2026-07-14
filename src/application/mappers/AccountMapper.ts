import { Account } from "../../domain/account/AccountEntity"
import { CreateAccountOutput } from "../dto/account/CreateAccountOutput"

export class AccountMapper {
  static toResponse(account: Account): CreateAccountOutput {
    return {
      id: account.id,
      name: account.name,
      balance: account.balance,
      direction: account.direction,
    }
  }
}
