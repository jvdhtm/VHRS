
              import { operations, definitions } from "../Schemas";
              import {function_list,function_create,function_read,function_update,function_partial_update,function_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Ifunction {
                
                  functionData?:Function[];
                
                  functionListFuncProp?: ( data:operations["function_list"]["parameters"] ) => Promise<void>;
                  
                  functionCreateFuncProp?: ( data:definitions["Function"][] | definitions["Function"][] ) => Promise<void>;
                  
                  functionReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  functionUpdateFuncProp?: ( id:number,data:definitions["Function"][] | definitions["Function"][] ) => Promise<void>;
                  
                  functionPartialFuncProp?: ( id:number,data:definitions["Function"][] | definitions["Function"][] ) => Promise<void>;
                  
                  functionDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const FunctionContext = React.createContext<Ifunction>(defaultState);
                const FunctionProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [FunctionDataList, setFunctionDataList] = React.useState<Array<Function>> ([]);
                  const functionList = async ( data:operations["function_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await function_list( data, headers);
                      let prevState = FunctionDataList;
                      
                      let found = false;
                      const newFunction = prevState.map((el:any) => {
                        if(el.id === result.data.id)
                        {

                          found = true;
                          return {...el, result.data };

                        }
                        else
                        {
                          return el;
                        }
                      }
                      ))

                      if(!found)
                      {
                        let newFunction
                        if(!Array.isArray(result.data))
                        newFunction = prevState.push(result.data);
                        else
                        newFunction = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const functionCreate = async ( data:definitions["Function"][] | definitions["Function"][] ) => {
                    if(data)
                    {
                      const result = await function_create( data, headers);
                      let prevState = FunctionDataList;
                        
                      //Read or Create
                      let newFunction
                      if(!Array.isArray(result.data))
                      newFunction = prevState.push(result.data);
                      else
                      newFunction = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const functionRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await function_read( id, headers);
                      let prevState = FunctionDataList;
                      
                      let found = false;
                      const newFunction = prevState.map((el:any) => {
                        if(el.id === result.data.id)
                        {

                          found = true;
                          return {...el, result.data };

                        }
                        else
                        {
                          return el;
                        }
                      }
                      ))

                      if(!found)
                      {
                        let newFunction
                        if(!Array.isArray(result.data))
                        newFunction = prevState.push(result.data);
                        else
                        newFunction = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const functionUpdate = async ( id:string,data:definitions["Function"][] | definitions["Function"][] ) => {
                    if(data)
                    {
                      const result = await function_update( id,data, headers);
                      let prevState = FunctionDataList;
                        
                      //update
                      let newFunction
                      if(!Array.isArray(result.data))
                      newFunction = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newFunction = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const functionPartial = async ( id:string,data:definitions["Function"][] | definitions["Function"][] ) => {
                    if(data)
                    {
                      const result = await function_partial_update( id,data, headers);
                      let prevState = FunctionDataList;
                        
                    }
                  }
                  
                  const functionDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await function_delete( id, headers);
                      let prevState = FunctionDataList;
                        
                      //delete
                      const newFunction = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <FunctionContext.Provider
              
              value={{
                functionData:FunctionDataList,
              
                  functionListFuncProp: functionList,
                  
                  functionCreateFuncProp: functionCreate,
                  
                  functionReadFuncProp: functionRead,
                  
                  functionUpdateFuncProp: functionUpdate,
                  
                  functionPartialFuncProp: functionPartial,
                  
                  functionDeleteFuncProp: functionDelete,
                  
                }}
              >
              { children }
              </FunctionContext.Provider>
            );};
              