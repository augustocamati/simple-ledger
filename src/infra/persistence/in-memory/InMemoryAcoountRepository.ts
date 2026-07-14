import { Account } from "../../../domain/account/AccountEntity";
import { IAccountRepository } from "../../../domain/account/AccountRepository";
import { InMemoryDatabase } from "./InMemoryDatabase";

export class InMemoryAccountRepository implements IAccountRepository {
  constructor(private readonly database: InMemoryDatabase
  ){}
  async save(account: Account): Promise<void> {
   this.database.accounts.set(account.id, account);
  }
  async findById(id: string): Promise<Account | null> {
   return this.database.accounts.get(id);
  }
}