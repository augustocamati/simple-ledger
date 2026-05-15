import { DomainError } from "../shared/DomainErrors";


export class InvalidEntryAmountError extends DomainError {
  constructor() {
    super("Entry amount must be greater than zero.");
  }
}