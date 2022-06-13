
export interface ICard{
  children: React.ReactElement<HTMLElement>
  className?: string
  columnId: number
  cardId: number
  index: number
}

export interface IColumn{
  id: number
  name:string
  description: string;
  cards: ICard[];
}