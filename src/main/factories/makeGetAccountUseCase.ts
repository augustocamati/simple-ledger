import { GetAccountByIdUseCase } from "../../application/use-cases/account/GetAccountByIdUseCase"
import { database } from "../../infra/persistence/in-memory/Database"
import { InMemoryAccountRepository } from "../../infra/persistence/in-memory/InMemoryAcoountRepository"

export function makeGetAccountUseCase() {
  const accountRepository = new InMemoryAccountRepository(database)

  return new GetAccountByIdUseCase(accountRepository)
}
