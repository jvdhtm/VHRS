import Board from "./Board";
import { IColumn, ICard } from "./types";

const App = () => {
  const getItems = (count: number, offset: number): IColumn[] => {

    return [...new Array(count)].map((k,index)=> fake(index,offset));

  };
  const rand = (min: number , max: number ) => {
    if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
  };
  const fake = (k: number, offset: number):IColumn => {
    return {
      id: k,
      name: `item ${k + offset}`,
      description: `item ${k + offset}`,
      cards: [
        {
          children: <div>{`test ${k + offset}`}</div>,
          cardId: `${k}1`,
        },
        {
            children: <div>{`test ${k + offset}`}</div>,
            cardId: `${k}2`,
          },
          {
            children: <div>{`test ${k + offset}`}</div>,
            cardId: `${k}3`,
          },
          {
            children: <div>{`test ${k + offset}`}</div>,
            cardId: `${k}4`,
          },
      ],
    };
  };

  const items = getItems(3,1)

  return (
    <div>
      <Board columns={items} changeColumnCallback={(card,columnId)=>{}}></Board>
    </div>
  );
};

export default App;
