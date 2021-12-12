
              import { operations, definitions } from "../Schemas";
              import {app_list,app_create,app_read,app_update,app_partial_update,app_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Iapp {
                
                  appData?:App[];
                
                  appListFuncProp?: ( data:operations["app_list"]["parameters"] ) => Promise<void>;
                  
                  appCreateFuncProp?: ( data:definitions["App"][] | definitions["App"][] ) => Promise<void>;
                  
                  appReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  appUpdateFuncProp?: ( id:number,data:definitions["App"][] | definitions["App"][] ) => Promise<void>;
                  
                  appPartialFuncProp?: ( id:number,data:definitions["App"][] | definitions["App"][] ) => Promise<void>;
                  
                  appDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const AppContext = React.createContext<Iapp>(defaultState);
                const AppProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [AppDataList, setAppDataList] = React.useState<Array<App>> ([]);
                  const appList = async ( data:operations["app_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await app_list( data, headers);
                      let prevState = AppDataList;
                      
                      let found = false;
                      const newApp = prevState.map((el:any) => {
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
                        let newApp
                        if(!Array.isArray(result.data))
                        newApp = prevState.push(result.data);
                        else
                        newApp = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const appCreate = async ( data:definitions["App"][] | definitions["App"][] ) => {
                    if(data)
                    {
                      const result = await app_create( data, headers);
                      let prevState = AppDataList;
                        
                      //Read or Create
                      let newApp
                      if(!Array.isArray(result.data))
                      newApp = prevState.push(result.data);
                      else
                      newApp = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const appRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await app_read( id, headers);
                      let prevState = AppDataList;
                      
                      let found = false;
                      const newApp = prevState.map((el:any) => {
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
                        let newApp
                        if(!Array.isArray(result.data))
                        newApp = prevState.push(result.data);
                        else
                        newApp = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const appUpdate = async ( id:string,data:definitions["App"][] | definitions["App"][] ) => {
                    if(data)
                    {
                      const result = await app_update( id,data, headers);
                      let prevState = AppDataList;
                        
                      //update
                      let newApp
                      if(!Array.isArray(result.data))
                      newApp = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newApp = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const appPartial = async ( id:string,data:definitions["App"][] | definitions["App"][] ) => {
                    if(data)
                    {
                      const result = await app_partial_update( id,data, headers);
                      let prevState = AppDataList;
                        
                    }
                  }
                  
                  const appDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await app_delete( id, headers);
                      let prevState = AppDataList;
                        
                      //delete
                      const newApp = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <AppContext.Provider
              
              value={{
                appData:AppDataList,
              
                  appListFuncProp: appList,
                  
                  appCreateFuncProp: appCreate,
                  
                  appReadFuncProp: appRead,
                  
                  appUpdateFuncProp: appUpdate,
                  
                  appPartialFuncProp: appPartial,
                  
                  appDeleteFuncProp: appDelete,
                  
                }}
              >
              { children }
              </AppContext.Provider>
            );};
              