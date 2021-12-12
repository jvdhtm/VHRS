
              import { operations, definitions } from "../Schemas";
              import {stafflog_list,stafflog_create,stafflog_read,stafflog_update,stafflog_partial_update,stafflog_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Istafflog {
                
                  stafflogData?:StaffLog[];
                
                  stafflogListFuncProp?: ( data:operations["stafflog_list"]["parameters"] ) => Promise<void>;
                  
                  stafflogCreateFuncProp?: ( data:definitions["StaffLog"][] | definitions["StaffLog"][] ) => Promise<void>;
                  
                  stafflogReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  stafflogUpdateFuncProp?: ( id:number,data:definitions["StaffLog"][] | definitions["StaffLog"][] ) => Promise<void>;
                  
                  stafflogPartialFuncProp?: ( id:number,data:definitions["StaffLog"][] | definitions["StaffLog"][] ) => Promise<void>;
                  
                  stafflogDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const StafflogContext = React.createContext<Istafflog>(defaultState);
                const StafflogProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [StaffLogDataList, setStaffLogDataList] = React.useState<Array<StaffLog>> ([]);
                  const stafflogList = async ( data:operations["stafflog_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await stafflog_list( data, headers);
                      let prevState = StaffLogDataList;
                      
                      let found = false;
                      const newStaffLog = prevState.map((el:any) => {
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
                        let newStaffLog
                        if(!Array.isArray(result.data))
                        newStaffLog = prevState.push(result.data);
                        else
                        newStaffLog = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const stafflogCreate = async ( data:definitions["StaffLog"][] | definitions["StaffLog"][] ) => {
                    if(data)
                    {
                      const result = await stafflog_create( data, headers);
                      let prevState = StaffLogDataList;
                        
                      //Read or Create
                      let newStaffLog
                      if(!Array.isArray(result.data))
                      newStaffLog = prevState.push(result.data);
                      else
                      newStaffLog = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const stafflogRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await stafflog_read( id, headers);
                      let prevState = StaffLogDataList;
                      
                      let found = false;
                      const newStaffLog = prevState.map((el:any) => {
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
                        let newStaffLog
                        if(!Array.isArray(result.data))
                        newStaffLog = prevState.push(result.data);
                        else
                        newStaffLog = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const stafflogUpdate = async ( id:string,data:definitions["StaffLog"][] | definitions["StaffLog"][] ) => {
                    if(data)
                    {
                      const result = await stafflog_update( id,data, headers);
                      let prevState = StaffLogDataList;
                        
                      //update
                      let newStaffLog
                      if(!Array.isArray(result.data))
                      newStaffLog = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newStaffLog = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const stafflogPartial = async ( id:string,data:definitions["StaffLog"][] | definitions["StaffLog"][] ) => {
                    if(data)
                    {
                      const result = await stafflog_partial_update( id,data, headers);
                      let prevState = StaffLogDataList;
                        
                    }
                  }
                  
                  const stafflogDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await stafflog_delete( id, headers);
                      let prevState = StaffLogDataList;
                        
                      //delete
                      const newStaffLog = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <StafflogContext.Provider
              
              value={{
                stafflogData:StaffLogDataList,
              
                  stafflogListFuncProp: stafflogList,
                  
                  stafflogCreateFuncProp: stafflogCreate,
                  
                  stafflogReadFuncProp: stafflogRead,
                  
                  stafflogUpdateFuncProp: stafflogUpdate,
                  
                  stafflogPartialFuncProp: stafflogPartial,
                  
                  stafflogDeleteFuncProp: stafflogDelete,
                  
                }}
              >
              { children }
              </StafflogContext.Provider>
            );};
              