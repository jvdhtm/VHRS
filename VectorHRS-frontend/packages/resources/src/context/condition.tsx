
              import { operations, definitions } from "../Schemas";
              import {condition_list,condition_create,condition_read,condition_update,condition_partial_update,condition_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Icondition {
                
                  conditionData?:Condition[];
                
                  conditionListFuncProp?: ( data:operations["condition_list"]["parameters"] ) => Promise<void>;
                  
                  conditionCreateFuncProp?: ( data:definitions["Condition"][] | definitions["Condition"][] ) => Promise<void>;
                  
                  conditionReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  conditionUpdateFuncProp?: ( id:number,data:definitions["Condition"][] | definitions["Condition"][] ) => Promise<void>;
                  
                  conditionPartialFuncProp?: ( id:number,data:definitions["Condition"][] | definitions["Condition"][] ) => Promise<void>;
                  
                  conditionDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const ConditionContext = React.createContext<Icondition>(defaultState);
                const ConditionProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [ConditionDataList, setConditionDataList] = React.useState<Array<Condition>> ([]);
                  const conditionList = async ( data:operations["condition_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await condition_list( data, headers);
                      let prevState = ConditionDataList;
                      
                      let found = false;
                      const newCondition = prevState.map((el:any) => {
                        if(el.id === result.data.id)
                        {

                          found = true;
                          return {...el, result };

                        }
                        else
                        {
                          return el;
                        }
                      }
                      ))

                      if(!found)
                      {
                        let newCondition
                        if(!Array.isArray(result.data))
                        newCondition = prevState.push(result.data);
                        else
                        newCondition = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const conditionCreate = async ( data:definitions["Condition"][] | definitions["Condition"][] ) => {
                    if(data)
                    {
                      const result = await condition_create( data, headers);
                      let prevState = ConditionDataList;
                        
                      //Read or Create
                      let newCondition
                      if(!Array.isArray(result.data))
                      newCondition = prevState.push(result.data);
                      else
                      newCondition = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const conditionRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await condition_read( id, headers);
                      let prevState = ConditionDataList;
                      
                      let found = false;
                      const newCondition = prevState.map((el:any) => {
                        if(el.id === result.data.schema.id)
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
                        let newCondition
                        if(!Array.isArray(result.data))
                        newCondition = prevState.push(result.data);
                        else
                        newCondition = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const conditionUpdate = async ( id:string,data:definitions["Condition"][] | definitions["Condition"][] ) => {
                    if(data)
                    {
                      const result = await condition_update( id,data, headers);
                      let prevState = ConditionDataList;
                        
                      //update
                      let newCondition
                      if(!Array.isArray(result.data))
                      newCondition = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newCondition = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const conditionPartial = async ( id:string,data:definitions["Condition"][] | definitions["Condition"][] ) => {
                    if(data)
                    {
                      const result = await condition_partial_update( id,data, headers);
                      let prevState = ConditionDataList;
                        
                    }
                  }
                  
                  const conditionDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await condition_delete( id, headers);
                      let prevState = ConditionDataList;
                        
                      //delete
                      const newCondition = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <ConditionContext.Provider
              
              value={{
                conditionData:ConditionDataList,
              
                  conditionListFuncProp: conditionList,
                  
                  conditionCreateFuncProp: conditionCreate,
                  
                  conditionReadFuncProp: conditionRead,
                  
                  conditionUpdateFuncProp: conditionUpdate,
                  
                  conditionPartialFuncProp: conditionPartial,
                  
                  conditionDeleteFuncProp: conditionDelete,
                  
                }}
              >
              { children }
              </ConditionContext.Provider>
            );};
              