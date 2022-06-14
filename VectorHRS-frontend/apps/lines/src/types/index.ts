
export interface ICard{
  children: React.ReactElement<HTMLElement>
  className?: string
  cardId: string
}

export interface ICardStored{
  cardId: string
}

export interface IColumnStored{
  cards: ICardStored[];
  id: number;
}

export interface IColumn{
  id: number
  name:string
  description: string;
  cards: ICard[];
}