import { AccountNotFoundError } from "../../../domain/account/AccountNotFoundError";
import { IAccountRepository } from "../../../domain/account/AccountRepository";

export class GetAccountByIdUseCase {
  constructor(private readonly accountRepository: IAccountRepository){}

  async execute(id:string){
    const account = await this.accountRepository.findById(id)

    if(!account){
      throw new AccountNotFoundError()
    }

    return {
      accountId: account.id,
      accountName: account.name,
      accountBalance: account.balance,
      accountDirection: account.direction
    }
  }
}