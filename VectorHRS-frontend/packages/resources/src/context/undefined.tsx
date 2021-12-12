
              import { operations, definitions } from "../Schemas";
              import {
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Iundefined {
                
                  undefinedData?:undefined[];
                
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const UndefinedContext = React.createContext<Iundefined>(defaultState);
                const UndefinedProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [undefinedDataList, setundefinedDataList] = React.useState<Array<undefined>> ([]);
              return (
              <UndefinedContext.Provider
              
              value={{
                undefinedData:undefinedDataList,
              
                }}
              >
              { children }
              </UndefinedContext.Provider>
            );};
              