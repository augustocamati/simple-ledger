import { Direction } from "../shared/Direction";


interface IEntityProps{
  id: string
  direction: Direction
  amount: number
}

export class Entry{
   private readonly props: IEntityProps

  constructor(props: IEntityProps){
    this.props = props
  }

  get id(): string {
    return this.props.id;
  }

  get direction(): Direction {
    return this.props.direction;
  }

  get amount(): number {
    return this.props.amount;
  }
}