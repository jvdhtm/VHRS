
              import { operations, definitions } from "../Schemas";
              import {staff_list,staff_create,staff_read,staff_update,staff_partial_update,staff_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Istaff {
                
                  staffData?:Staff[];
                
                  staffListFuncProp?: ( data:operations["staff_list"]["parameters"] ) => Promise<void>;
                  
                  staffCreateFuncProp?: ( data:definitions["Staff"][] | definitions["Staff"][] ) => Promise<void>;
                  
                  staffReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  staffUpdateFuncProp?: ( id:number,data:definitions["Staff"][] | definitions["Staff"][] ) => Promise<void>;
                  
                  staffPartialFuncProp?: ( id:number,data:definitions["Staff"][] | definitions["Staff"][] ) => Promise<void>;
                  
                  staffDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const StaffContext = React.createContext<Istaff>(defaultState);
                const StaffProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [StaffDataList, setStaffDataList] = React.useState<Array<Staff>> ([]);
                  const staffList = async ( data:operations["staff_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await staff_list( data, headers);
                      let prevState = StaffDataList;
                      
                      let found = false;
                      const newStaff = prevState.map((el:any) => {
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
                        let newStaff
                        if(!Array.isArray(result.data))
                        newStaff = prevState.push(result.data);
                        else
                        newStaff = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const staffCreate = async ( data:definitions["Staff"][] | definitions["Staff"][] ) => {
                    if(data)
                    {
                      const result = await staff_create( data, headers);
                      let prevState = StaffDataList;
                        
                      //Read or Create
                      let newStaff
                      if(!Array.isArray(result.data))
                      newStaff = prevState.push(result.data);
                      else
                      newStaff = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const staffRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await staff_read( id, headers);
                      let prevState = StaffDataList;
                      
                      let found = false;
                      const newStaff = prevState.map((el:any) => {
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
                        let newStaff
                        if(!Array.isArray(result.data))
                        newStaff = prevState.push(result.data);
                        else
                        newStaff = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const staffUpdate = async ( id:string,data:definitions["Staff"][] | definitions["Staff"][] ) => {
                    if(data)
                    {
                      const result = await staff_update( id,data, headers);
                      let prevState = StaffDataList;
                        
                      //update
                      let newStaff
                      if(!Array.isArray(result.data))
                      newStaff = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newStaff = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const staffPartial = async ( id:string,data:definitions["Staff"][] | definitions["Staff"][] ) => {
                    if(data)
                    {
                      const result = await staff_partial_update( id,data, headers);
                      let prevState = StaffDataList;
                        
                    }
                  }
                  
                  const staffDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await staff_delete( id, headers);
                      let prevState = StaffDataList;
                        
                      //delete
                      const newStaff = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <StaffContext.Provider
              
              value={{
                staffData:StaffDataList,
              
                  staffListFuncProp: staffList,
                  
                  staffCreateFuncProp: staffCreate,
                  
                  staffReadFuncProp: staffRead,
                  
                  staffUpdateFuncProp: staffUpdate,
                  
                  staffPartialFuncProp: staffPartial,
                  
                  staffDeleteFuncProp: staffDelete,
                  
                }}
              >
              { children }
              </StaffContext.Provider>
            );};
              