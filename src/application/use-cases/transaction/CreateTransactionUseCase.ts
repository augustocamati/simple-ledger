import { randomUUID } from "crypto";



import { AccountNotFoundError } from "../../../domain/account/AccountNotFoundError";
import { CreateTransactionInput } from "./CreateTransactionInput";
import { CreateTransactionOutput } from "./CreateTransactionOutput";
import { IAccountRepository } from "../../../domain/account/AccountRepository";
import { ITransactionRepository } from "../../../domain/transaction/TransactionRepository";
import { Entry } from "../../../domain/entry/EntryEntity";
import { Transaction } from "../../../domain/transaction/TransactionEntity";

export class CreateTransactionUseCase {
  constructor(
    private readonly accountsRepository: IAccountRepository,
    private readonly transactionsRepository: ITransactionRepository
  ) {}

  async execute(
    input: CreateTransactionInput
  ): Promise<CreateTransactionOutput> {

    const entries = input.entries.map(entry =>
      Entry.create({
        id: randomUUID(),
        accountId: entry.accountId,
        direction: entry.direction,
        amount: entry.amount,
      })
    );

    const transaction = Transaction.create({
      id: input.id ?? randomUUID(),
      name: input.name,
      entries,
    });

    const accountsMap = new Map();

    for (const entry of transaction.entries) {
      const account =
        await this.accountsRepository.findById(
          entry.accountId
        );

      if (!account) {
        throw new AccountNotFoundError();
      }

      accountsMap.set(account.id, account);
    }

    for (const entry of transaction.entries) {
      const account = accountsMap.get(entry.accountId);

      account.applyEntry(entry);
    }

    for (const account of accountsMap.values()) {
      await this.accountsRepository.save(account);
    }

    await this.transactionsRepository.save(transaction);

    return {
      id: transaction.id,
      name: transaction.name,
      entries: transaction.entries.map(entry => ({
        id: entry.id,
        accountId: entry.accountId,
        direction: entry.direction,
        amount: entry.amount,
      })),
    };
  }
}