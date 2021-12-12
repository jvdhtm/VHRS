
              import { operations, definitions } from "../Schemas";
              import {stafffunctions_list,stafffunctions_create,stafffunctions_read,stafffunctions_update,stafffunctions_partial_update,stafffunctions_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Istafffunctions {
                
                  stafffunctionsData?:StaffFunctions[];
                
                  stafffunctionsListFuncProp?: ( data:operations["stafffunctions_list"]["parameters"] ) => Promise<void>;
                  
                  stafffunctionsCreateFuncProp?: ( data:definitions["StaffFunctions"][] | definitions["StaffFunctions"][] ) => Promise<void>;
                  
                  stafffunctionsReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  stafffunctionsUpdateFuncProp?: ( id:number,data:definitions["StaffFunctions"][] | definitions["StaffFunctions"][] ) => Promise<void>;
                  
                  stafffunctionsPartialFuncProp?: ( id:number,data:definitions["StaffFunctions"][] | definitions["StaffFunctions"][] ) => Promise<void>;
                  
                  stafffunctionsDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const StafffunctionsContext = React.createContext<Istafffunctions>(defaultState);
                const StafffunctionsProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [StaffFunctionsDataList, setStaffFunctionsDataList] = React.useState<Array<StaffFunctions>> ([]);
                  const stafffunctionsList = async ( data:operations["stafffunctions_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await stafffunctions_list( data, headers);
                      let prevState = StaffFunctionsDataList;
                      
                      let found = false;
                      const newStaffFunctions = prevState.map((el:any) => {
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
                        let newStaffFunctions
                        if(!Array.isArray(result.data))
                        newStaffFunctions = prevState.push(result.data);
                        else
                        newStaffFunctions = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const stafffunctionsCreate = async ( data:definitions["StaffFunctions"][] | definitions["StaffFunctions"][] ) => {
                    if(data)
                    {
                      const result = await stafffunctions_create( data, headers);
                      let prevState = StaffFunctionsDataList;
                        
                      //Read or Create
                      let newStaffFunctions
                      if(!Array.isArray(result.data))
                      newStaffFunctions = prevState.push(result.data);
                      else
                      newStaffFunctions = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const stafffunctionsRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await stafffunctions_read( id, headers);
                      let prevState = StaffFunctionsDataList;
                      
                      let found = false;
                      const newStaffFunctions = prevState.map((el:any) => {
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
                        let newStaffFunctions
                        if(!Array.isArray(result.data))
                        newStaffFunctions = prevState.push(result.data);
                        else
                        newStaffFunctions = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const stafffunctionsUpdate = async ( id:string,data:definitions["StaffFunctions"][] | definitions["StaffFunctions"][] ) => {
                    if(data)
                    {
                      const result = await stafffunctions_update( id,data, headers);
                      let prevState = StaffFunctionsDataList;
                        
                      //update
                      let newStaffFunctions
                      if(!Array.isArray(result.data))
                      newStaffFunctions = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newStaffFunctions = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const stafffunctionsPartial = async ( id:string,data:definitions["StaffFunctions"][] | definitions["StaffFunctions"][] ) => {
                    if(data)
                    {
                      const result = await stafffunctions_partial_update( id,data, headers);
                      let prevState = StaffFunctionsDataList;
                        
                    }
                  }
                  
                  const stafffunctionsDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await stafffunctions_delete( id, headers);
                      let prevState = StaffFunctionsDataList;
                        
                      //delete
                      const newStaffFunctions = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <StafffunctionsContext.Provider
              
              value={{
                stafffunctionsData:StaffFunctionsDataList,
              
                  stafffunctionsListFuncProp: stafffunctionsList,
                  
                  stafffunctionsCreateFuncProp: stafffunctionsCreate,
                  
                  stafffunctionsReadFuncProp: stafffunctionsRead,
                  
                  stafffunctionsUpdateFuncProp: stafffunctionsUpdate,
                  
                  stafffunctionsPartialFuncProp: stafffunctionsPartial,
                  
                  stafffunctionsDeleteFuncProp: stafffunctionsDelete,
                  
                }}
              >
              { children }
              </StafffunctionsContext.Provider>
            );};
              