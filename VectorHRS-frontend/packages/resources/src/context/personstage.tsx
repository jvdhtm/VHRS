
              import { operations, definitions } from "../Schemas";
              import {personstage_list,personstage_create,personstage_read,personstage_update,personstage_partial_update,personstage_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Ipersonstage {
                
                  personstageData?:PersonStage[];
                
                  personstageListFuncProp?: ( data:operations["personstage_list"]["parameters"] ) => Promise<void>;
                  
                  personstageCreateFuncProp?: ( data:definitions["PersonStage"][] | definitions["PersonStage"][] ) => Promise<void>;
                  
                  personstageReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  personstageUpdateFuncProp?: ( id:number,data:definitions["PersonStage"][] | definitions["PersonStage"][] ) => Promise<void>;
                  
                  personstagePartialFuncProp?: ( id:number,data:definitions["PersonStage"][] | definitions["PersonStage"][] ) => Promise<void>;
                  
                  personstageDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const PersonstageContext = React.createContext<Ipersonstage>(defaultState);
                const PersonstageProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [PersonStageDataList, setPersonStageDataList] = React.useState<Array<PersonStage>> ([]);
                  const personstageList = async ( data:operations["personstage_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await personstage_list( data, headers);
                      let prevState = PersonStageDataList;
                      
                      let found = false;
                      const newPersonStage = prevState.map((el:any) => {
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
                        let newPersonStage
                        if(!Array.isArray(result.data))
                        newPersonStage = prevState.push(result.data);
                        else
                        newPersonStage = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const personstageCreate = async ( data:definitions["PersonStage"][] | definitions["PersonStage"][] ) => {
                    if(data)
                    {
                      const result = await personstage_create( data, headers);
                      let prevState = PersonStageDataList;
                        
                      //Read or Create
                      let newPersonStage
                      if(!Array.isArray(result.data))
                      newPersonStage = prevState.push(result.data);
                      else
                      newPersonStage = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const personstageRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await personstage_read( id, headers);
                      let prevState = PersonStageDataList;
                      
                      let found = false;
                      const newPersonStage = prevState.map((el:any) => {
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
                        let newPersonStage
                        if(!Array.isArray(result.data))
                        newPersonStage = prevState.push(result.data);
                        else
                        newPersonStage = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const personstageUpdate = async ( id:string,data:definitions["PersonStage"][] | definitions["PersonStage"][] ) => {
                    if(data)
                    {
                      const result = await personstage_update( id,data, headers);
                      let prevState = PersonStageDataList;
                        
                      //update
                      let newPersonStage
                      if(!Array.isArray(result.data))
                      newPersonStage = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newPersonStage = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const personstagePartial = async ( id:string,data:definitions["PersonStage"][] | definitions["PersonStage"][] ) => {
                    if(data)
                    {
                      const result = await personstage_partial_update( id,data, headers);
                      let prevState = PersonStageDataList;
                        
                    }
                  }
                  
                  const personstageDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await personstage_delete( id, headers);
                      let prevState = PersonStageDataList;
                        
                      //delete
                      const newPersonStage = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <PersonstageContext.Provider
              
              value={{
                personstageData:PersonStageDataList,
              
                  personstageListFuncProp: personstageList,
                  
                  personstageCreateFuncProp: personstageCreate,
                  
                  personstageReadFuncProp: personstageRead,
                  
                  personstageUpdateFuncProp: personstageUpdate,
                  
                  personstagePartialFuncProp: personstagePartial,
                  
                  personstageDeleteFuncProp: personstageDelete,
                  
                }}
              >
              { children }
              </PersonstageContext.Provider>
            );};
              