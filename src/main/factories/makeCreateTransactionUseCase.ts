import { CreateTransactionUseCase } from "../../application/use-cases/transaction/CreateTransactionUseCase"
import { database } from "../../infra/persistence/in-memory/Database"
import { InMemoryAccountRepository } from "../../infra/persistence/in-memory/InMemoryAcoountRepository"
import { InMemoryTransactionRepository } from "../../infra/persistence/in-memory/InMemoryTransactionRepository"

export function makeCreateTransactionUseCase() {
  const transactionRepository = new InMemoryTransactionRepository(database)
  const accountRepository = new InMemoryAccountRepository(database)

  return new CreateTransactionUseCase(accountRepository,transactionRepository)
}