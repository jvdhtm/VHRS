import React from "react";
import { DragDropContext, DraggableLocation, DropResult } from "react-beautiful-dnd";
import "./styles/style.scss";
import { IColumn, IColumnStored, ICardStored } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Columns from "./components/Columns";

interface Iboard {
  columns: IColumn[];
  changeColumnCallback: (card: ICardStored, columnId: number) => void;
}

const Board: React.FC<Iboard> = ({ columns, changeColumnCallback }) => {


  const storedColumns:IColumnStored[] = [];
  for( let x in columns){
    const cards  = columns[x].cards;
    storedColumns[x] = {id: columns[x].id, cards:[]};
    for( let y in cards){
      const card = cards[y];
      storedColumns[x].cards[y] = { cardId: card.cardId}
    }
  }

  const [columnsState, setColumnsState] = useLocalStorage<IColumnStored[]>(
    "columns",
    storedColumns
  );

  const columnsSerialized:IColumn[] = []

  const findInitialColumn = ( columnId:number )=>{
    for( let z in columns){
      if(columns[z].id === columnId)
      return columns[z];
    }
  }
  const findInitialCards = (cardId:string )=>{
    for( let z in columns){
        for( let x in columns[z].cards){
            if( columns[z].cards[x].cardId === cardId)
              return columns[z].cards[x]
        }
    }
  }

  for( let z in columnsState){
    const cards  = columnsState[z].cards;
    const oldColumn = findInitialColumn(columnsState[z].id);
    if(oldColumn){
      columnsSerialized[z] = { ...oldColumn, cards:[]}
      for( let u in cards){
        const card = cards[u]
        const oldCard =  findInitialCards(card.cardId)
        if(oldCard)
          columnsSerialized[z].cards[u] = {...oldCard}
      }
    }

  }

const move = (source:IColumnStored, destination:IColumnStored, droppableSource:DraggableLocation, droppableDestination:DraggableLocation) => {
  const sourceClone = Array.from(source.cards);
  const destClone = Array.from(destination.cards);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  const result:any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};


  const reorder = (list: IColumnStored, startIndex: number, endIndex: number) => {
    const result = Array.from(list.cards);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;
    const newState = [...columnsState];
    if (sInd === dInd) {
      const newCards = reorder(columnsState[sInd], source.index, destination.index);
      newState[sInd].cards = newCards;
      setColumnsState(newState);
    }
    else{
      const result = move(columnsState[sInd], columnsState[dInd], source, destination);
      newState[sInd].cards = result[sInd];
      newState[dInd].cards = result[dInd];
      setColumnsState(newState);
    }
    changeColumnCallback(newState[sInd].cards[destination.index],dInd)
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <div className="u-container -m0">
          <Columns columns={columnsSerialized}  />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Board;
