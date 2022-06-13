import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "../styles/style.scss";
import Item from "./Item";
import { IColumn, ICard } from "../types";

interface IProps {
  columns: IColumn[];
}

const Columns: React.FC<IProps> = ({ columns }) => {
  return (
    <div className="kanban">
      {columns &&
        columns.map((column, key1) => {
          return (
            <div className="column" key={key1}>
              <h3>{column.name}</h3>

              <Droppable droppableId={`${column.id}`}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {column.cards &&
                      column.cards.map((card: ICard, key2) => {
                        return card.columnId === column.id ? (
                          <Item
                            key={key2}
                            cardId={card.cardId}
                            index={card.index}
                            columnId={card.columnId}
                          >
                            {card.children}
                          </Item>
                        ) : (
                          ""
                        );
                      })}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
    </div>
  );
};

export default Columns;
