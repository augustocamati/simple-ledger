import { AccountNotFoundError } from "../../../domain/account/AccountNotFoundError"
import { IAccountRepository } from "../../../domain/account/AccountRepository"
import { AccountMapper } from "../../mappers/AccountMapper"

export class GetAccountByIdUseCase {
  constructor(private readonly accountRepository: IAccountRepository) {}

  async execute(id: string) {
    const account = await this.accountRepository.findById(id)

    if (!account) {
      throw new AccountNotFoundError()
    }

    return AccountMapper.toResponse(account)
  }
}
