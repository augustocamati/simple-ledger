import { DomainError } from "../shared/DomainErrors";

export class UnbalancedTransactionError extends DomainError {
  constructor() {
    super("Transaction entries must balance");
  }
}