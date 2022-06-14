import React from "react";
import "../styles/style.scss";
import { ICard } from "../types";
import { Draggable } from "react-beautiful-dnd";

interface Iprops{
  index: number
  card : ICard
}
const Item: React.FC<Iprops> = ({card,index}): JSX.Element => {
  return (
    <Draggable key={card.cardId} draggableId={card.cardId.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {card.children}
        </div>
      )}
    </Draggable>
  );
};

export default Item;
