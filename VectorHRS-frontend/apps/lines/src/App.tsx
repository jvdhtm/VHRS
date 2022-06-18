import Board from "./Board";
import { IColumn, ICard } from "./types";

const App = () => {
  const getItems = (count: number, offset: number): IColumn[] => {

    return [...new Array(count)].map((k,index)=> fake(index,offset));

  };
  const fake = (k: number, offset: number):IColumn => {
    return {
      id: k,
      name: `item ${k + offset}`,
      description: `item ${k + offset}`,
      cards: [
        {
          children: <div className="card">{`test ${k + offset}`}</div>,
          cardId: `${k}1`,
        },
        {
            children: <div className="card" >{`test ${k + offset}`}</div>,
            cardId: `${k}2`,
          },
          {
            children: <div className="card">{`test ${k + offset}`}</div>,
            cardId: `${k}3`,
          },
          {
            children: <div className="card">{`test ${k + offset}`}</div>,
            cardId: `${k}4`,
          },
      ],
    };
  };

  const items = getItems(15,1)

  return (
    <div>
      <Board columns={items} changeColumnCallback={(card,columnId)=>{}} refresh={false}></Board>
    </div>
  );
};

export default App;
