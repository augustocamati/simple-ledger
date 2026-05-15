import { Entry } from "../entry/EntryEntity";

import { Direction } from "../shared/Direction";

  interface IAccountProps {
    id: string
    name: string
    balance: number
    direction: Direction
  }

 
export class Account{
   private readonly props: IAccountProps;

  constructor(props: IAccountProps){
    this.props = props
  }

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get balance(): number {
    return this.props.balance;
  }

  get direction(): Direction {
    return this.props.direction;
  }
  

  applyEntry(entry: Entry){
    if(entry.direction == this.props.direction){
      this.props.balance += entry.amount

    }else{
      this.props.balance -= entry.amount
    }
  }
}