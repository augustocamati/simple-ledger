
import { IAccountRepository } from "../../../domain/account/AccountRepository"
import { Account } from "../../../domain/account/AccountEntity"
import { CreateAccountInput } from "./CreateAccountInput"
import { CreateAccountOutput } from "./CreateAccountOutput"

export class CreateAccountUseCase {

  constructor(private readonly accountRepository: IAccountRepository){}


  async execute(input: CreateAccountInput): Promise<CreateAccountOutput> {
    const account = Account.create({
      id: input.id ?? crypto.randomUUID(),
      name: input.name,
      balance: input.balance,
      direction: input.direction
    })
    await this.accountRepository.save(account)

    return {
      id: account.id,
      name: account.name,
      balance: account.balance,
      direction: account.direction
    }
  }


}