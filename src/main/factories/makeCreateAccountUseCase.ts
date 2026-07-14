import { CreateAccountUseCase } from "../../application/use-cases/account/CreateAccountUseCase"
import { database } from "../../infra/persistence/in-memory/Database"
import { InMemoryAccountRepository } from "../../infra/persistence/in-memory/InMemoryAcoountRepository"

export function makeCreateAccountUseCase() {
  const accountRepository = new InMemoryAccountRepository(database)

  return new CreateAccountUseCase(accountRepository)
}
