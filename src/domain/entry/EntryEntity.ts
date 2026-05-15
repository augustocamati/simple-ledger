import { Direction } from "../shared/Direction";
import { InvalidEntryAmountError } from "./InvalidEntryAmountError";


interface IEntityProps {
  id: string
  direction: Direction
  amount: number
}

type EntryProps = IEntityProps

export class Entry {
  private readonly props: IEntityProps

  constructor(props: IEntityProps) {
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

  static create(props: EntryProps): Entry {
    if (props.amount <= 0) {
      throw new InvalidEntryAmountError();
    }

    return new Entry(props);
  }
}