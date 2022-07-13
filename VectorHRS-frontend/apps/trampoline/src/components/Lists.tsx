import  { useState, useEffect, FC, Component } from "react";
import { List, ListItem } from "@chakra-ui/react";


export interface IProp {
    items: any[]
    curPage: number
    itemLimit: number
    ItemCard: React.ElementType
}

const VList:FC<IProp> = ({ items, curPage, itemLimit, ItemCard }) => {
  const [curItems, setCurItems] = useState<any[]>([]);
  useEffect(() => {
    const offset = curPage * itemLimit;
    const getList = () => {
      const newitems = items
      setCurItems(newitems);
    };

    getList();
  }, [curPage, itemLimit, items]);
  console.log(curItems);
  return (
    <List>
      {curItems.map(function (data,index) {
        return (
          <ListItem key={index}>
                <ItemCard  {...data}/>
          </ListItem>
        );
      })}
    </List>
  );
}

export default VList;