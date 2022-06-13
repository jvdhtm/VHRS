import React from "react";
import { DragDropContext, DraggableLocation, DropResult } from "react-beautiful-dnd";
import "./styles/style.scss";
import { IColumn, ICard } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Columns from "./components/Columns";

interface Iboard {
  columns: IColumn[];
  changeColumn: (card: ICard, columnId: number) => void;
}

const Board: React.FC<Iboard> = ({ columns }) => {
  const [columnsState, setColumnsState] = useLocalStorage<IColumn[]>(
    "columns",
    columns
  );

const move = (source:IColumn, destination:IColumn, droppableSource:DraggableLocation, droppableDestination:DraggableLocation) => {
  const sourceClone = Array.from(source.cards);
  const destClone = Array.from(destination.cards);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result:any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};


  const reorder = (list: IColumn, startIndex: number, endIndex: number) => {
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

    if (sInd === dInd) {
      const newCards = reorder(columnsState[sInd], source.index, destination.index);
      const newState = [...columnsState];
      newState[sInd].cards = newCards;
      setColumnsState(newState);
    }
    else{
      const result = move(columnsState[sInd], columnsState[dInd], source, destination);
      const newState = [...columnsState];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      setColumnsState(newState);
    }
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <div className="u-container -m0">
          <Columns columns={columnsState}  />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Board;
