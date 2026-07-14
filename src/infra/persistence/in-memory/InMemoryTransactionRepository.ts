import { tr } from "zod/v4/locales";
import { Entry } from "../../../domain/entry/EntryEntity";
import { Transaction } from "../../../domain/transaction/TransactionEntity";
import { ITransactionRepository } from "../../../domain/transaction/TransactionRepository";
import { InMemoryDatabase } from "./InMemoryDatabase";
import { AccountNotFoundError } from "../../../domain/account/AccountNotFoundError";

export class InMemoryTransactionRepository implements ITransactionRepository {
  constructor(private readonly database: InMemoryDatabase
  ){}
  async save(transaction: Transaction): Promise<void> {
   await this.database.transactions.set(transaction.id, transaction);
  }
  async findById(id: string): Promise<Transaction | null> {
   return this.database.transactions.get(id);
  }

  async getEntriesForAccount(accountId: string): Promise<Entry[]>{

    const account = await this.database.accounts.get(accountId)
    
    if(!account){
      return []
    }

    const entries: Entry[] = []

    for(const transaction of this.database.transactions.values()){
      for(const entry of transaction.entries){
        if(entry.accountId === accountId){
          entries.push(entry)
        }
      }

    }
    return entries

    



  }
    
}