import { DomainError } from "../shared/DomainErrors";

export class EmptyTransactionError extends DomainError {
  constructor() {
    super("Transaction must have at least one entry");
  }
}