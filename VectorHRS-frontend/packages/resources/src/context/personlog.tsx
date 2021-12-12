
              import { operations, definitions } from "../Schemas";
              import {personlog_list,personlog_create,personlog_read,personlog_update,personlog_partial_update,personlog_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Ipersonlog {
                
                  personlogData?:PersonLog[];
                
                  personlogListFuncProp?: ( data:operations["personlog_list"]["parameters"] ) => Promise<void>;
                  
                  personlogCreateFuncProp?: ( data:definitions["PersonLog"][] | definitions["PersonLog"][] ) => Promise<void>;
                  
                  personlogReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  personlogUpdateFuncProp?: ( id:number,data:definitions["PersonLog"][] | definitions["PersonLog"][] ) => Promise<void>;
                  
                  personlogPartialFuncProp?: ( id:number,data:definitions["PersonLog"][] | definitions["PersonLog"][] ) => Promise<void>;
                  
                  personlogDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const PersonlogContext = React.createContext<Ipersonlog>(defaultState);
                const PersonlogProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [PersonLogDataList, setPersonLogDataList] = React.useState<Array<PersonLog>> ([]);
                  const personlogList = async ( data:operations["personlog_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await personlog_list( data, headers);
                      let prevState = PersonLogDataList;
                      
                      let found = false;
                      const newPersonLog = prevState.map((el:any) => {
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
                        let newPersonLog
                        if(!Array.isArray(result.data))
                        newPersonLog = prevState.push(result.data);
                        else
                        newPersonLog = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const personlogCreate = async ( data:definitions["PersonLog"][] | definitions["PersonLog"][] ) => {
                    if(data)
                    {
                      const result = await personlog_create( data, headers);
                      let prevState = PersonLogDataList;
                        
                      //Read or Create
                      let newPersonLog
                      if(!Array.isArray(result.data))
                      newPersonLog = prevState.push(result.data);
                      else
                      newPersonLog = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const personlogRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await personlog_read( id, headers);
                      let prevState = PersonLogDataList;
                      
                      let found = false;
                      const newPersonLog = prevState.map((el:any) => {
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
                        let newPersonLog
                        if(!Array.isArray(result.data))
                        newPersonLog = prevState.push(result.data);
                        else
                        newPersonLog = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const personlogUpdate = async ( id:string,data:definitions["PersonLog"][] | definitions["PersonLog"][] ) => {
                    if(data)
                    {
                      const result = await personlog_update( id,data, headers);
                      let prevState = PersonLogDataList;
                        
                      //update
                      let newPersonLog
                      if(!Array.isArray(result.data))
                      newPersonLog = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newPersonLog = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const personlogPartial = async ( id:string,data:definitions["PersonLog"][] | definitions["PersonLog"][] ) => {
                    if(data)
                    {
                      const result = await personlog_partial_update( id,data, headers);
                      let prevState = PersonLogDataList;
                        
                    }
                  }
                  
                  const personlogDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await personlog_delete( id, headers);
                      let prevState = PersonLogDataList;
                        
                      //delete
                      const newPersonLog = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <PersonlogContext.Provider
              
              value={{
                personlogData:PersonLogDataList,
              
                  personlogListFuncProp: personlogList,
                  
                  personlogCreateFuncProp: personlogCreate,
                  
                  personlogReadFuncProp: personlogRead,
                  
                  personlogUpdateFuncProp: personlogUpdate,
                  
                  personlogPartialFuncProp: personlogPartial,
                  
                  personlogDeleteFuncProp: personlogDelete,
                  
                }}
              >
              { children }
              </PersonlogContext.Provider>
            );};
              