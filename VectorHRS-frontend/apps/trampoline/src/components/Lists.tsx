import  { useState, useEffect, FC, Component } from "react";
import { List, ListItem } from "@chakra-ui/react";


export interface IProp {
    items: any[]
    curPage: number
    itemLimit: number
    className: string
    ItemCard: React.ElementType
}

const VList:FC<IProp> = ({ items, curPage, itemLimit, ItemCard, className }) => {
  const [curItems, setCurItems] = useState<any[]>([]);
  useEffect(() => {
    const offset = curPage * itemLimit;
    const getList = () => {
      const newitems = items
      setCurItems(newitems);
    };

    getList();
  }, [curPage, itemLimit, items]);
  return (
    <List className={className}>
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