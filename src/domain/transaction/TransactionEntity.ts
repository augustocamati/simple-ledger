import { Entry } from "../entry/EntryEntity"
import { EmptyTransactionError } from "./EmptyTransactionError"
import { UnbalancedTransactionError } from "./UnbalancedTransactionError"

interface ITransactionProps {
  id: string
  name?: string
  entries: Entry[]
}

export class Transaction {
  private readonly props: ITransactionProps

  constructor(props: ITransactionProps){
    this.props = props
  }

  static create(props: ITransactionProps){
    if(props.entries.length === 0){
      throw new EmptyTransactionError()
    }

      const transaction = new Transaction(props);

    transaction.validateBalance();

    return transaction;


    
  }

  private validateBalance() {
    const totalDebit = this.props.entries
      .filter(entry => entry.direction === 'debit')
      .reduce((acc, entry) => acc + entry.amount, 0);

    const totalCredit = this.props.entries
      .filter(entry => entry.direction === 'credit')
      .reduce((acc, entry) => acc + entry.amount, 0);

    if (totalDebit !== totalCredit) {
       throw new UnbalancedTransactionError();
    }
  }


  
}