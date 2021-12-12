
              import { operations, definitions } from "../Schemas";
              import {staffstage_list,staffstage_create,staffstage_read,staffstage_update,staffstage_partial_update,staffstage_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Istaffstage {
                
                  staffstageData?:StaffStage[];
                
                  staffstageListFuncProp?: ( data:operations["staffstage_list"]["parameters"] ) => Promise<void>;
                  
                  staffstageCreateFuncProp?: ( data:definitions["StaffStage"][] | definitions["StaffStage"][] ) => Promise<void>;
                  
                  staffstageReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  staffstageUpdateFuncProp?: ( id:number,data:definitions["StaffStage"][] | definitions["StaffStage"][] ) => Promise<void>;
                  
                  staffstagePartialFuncProp?: ( id:number,data:definitions["StaffStage"][] | definitions["StaffStage"][] ) => Promise<void>;
                  
                  staffstageDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const StaffstageContext = React.createContext<Istaffstage>(defaultState);
                const StaffstageProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [StaffStageDataList, setStaffStageDataList] = React.useState<Array<StaffStage>> ([]);
                  const staffstageList = async ( data:operations["staffstage_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await staffstage_list( data, headers);
                      let prevState = StaffStageDataList;
                      
                      let found = false;
                      const newStaffStage = prevState.map((el:any) => {
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
                        let newStaffStage
                        if(!Array.isArray(result.data))
                        newStaffStage = prevState.push(result.data);
                        else
                        newStaffStage = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const staffstageCreate = async ( data:definitions["StaffStage"][] | definitions["StaffStage"][] ) => {
                    if(data)
                    {
                      const result = await staffstage_create( data, headers);
                      let prevState = StaffStageDataList;
                        
                      //Read or Create
                      let newStaffStage
                      if(!Array.isArray(result.data))
                      newStaffStage = prevState.push(result.data);
                      else
                      newStaffStage = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const staffstageRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await staffstage_read( id, headers);
                      let prevState = StaffStageDataList;
                      
                      let found = false;
                      const newStaffStage = prevState.map((el:any) => {
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
                        let newStaffStage
                        if(!Array.isArray(result.data))
                        newStaffStage = prevState.push(result.data);
                        else
                        newStaffStage = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const staffstageUpdate = async ( id:string,data:definitions["StaffStage"][] | definitions["StaffStage"][] ) => {
                    if(data)
                    {
                      const result = await staffstage_update( id,data, headers);
                      let prevState = StaffStageDataList;
                        
                      //update
                      let newStaffStage
                      if(!Array.isArray(result.data))
                      newStaffStage = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newStaffStage = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const staffstagePartial = async ( id:string,data:definitions["StaffStage"][] | definitions["StaffStage"][] ) => {
                    if(data)
                    {
                      const result = await staffstage_partial_update( id,data, headers);
                      let prevState = StaffStageDataList;
                        
                    }
                  }
                  
                  const staffstageDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await staffstage_delete( id, headers);
                      let prevState = StaffStageDataList;
                        
                      //delete
                      const newStaffStage = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <StaffstageContext.Provider
              
              value={{
                staffstageData:StaffStageDataList,
              
                  staffstageListFuncProp: staffstageList,
                  
                  staffstageCreateFuncProp: staffstageCreate,
                  
                  staffstageReadFuncProp: staffstageRead,
                  
                  staffstageUpdateFuncProp: staffstageUpdate,
                  
                  staffstagePartialFuncProp: staffstagePartial,
                  
                  staffstageDeleteFuncProp: staffstageDelete,
                  
                }}
              >
              { children }
              </StaffstageContext.Provider>
            );};
              