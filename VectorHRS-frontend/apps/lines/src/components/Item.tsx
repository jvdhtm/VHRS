import React from "react";
import "../styles/style.scss";
import { ICard } from "../types";
import { Draggable } from "react-beautiful-dnd";

const Item: React.FC<ICard> = ({ children, cardId, index }): JSX.Element => {
  return (
    <Draggable key={cardId} draggableId={cardId.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default Item;
