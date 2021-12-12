
              import { operations, definitions } from "../Schemas";
              import {expertiseprofile_list,expertiseprofile_create,expertiseprofile_read,expertiseprofile_update,expertiseprofile_partial_update,expertiseprofile_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Iexpertiseprofile {
                
                  expertiseprofileData?:ExpertiseProfile[];
                
                  expertiseprofileListFuncProp?: ( data:operations["expertiseprofile_list"]["parameters"] ) => Promise<void>;
                  
                  expertiseprofileCreateFuncProp?: ( data:definitions["ExpertiseProfile"][] | definitions["ExpertiseProfile"][] ) => Promise<void>;
                  
                  expertiseprofileReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  expertiseprofileUpdateFuncProp?: ( id:number,data:definitions["ExpertiseProfile"][] | definitions["ExpertiseProfile"][] ) => Promise<void>;
                  
                  expertiseprofilePartialFuncProp?: ( id:number,data:definitions["ExpertiseProfile"][] | definitions["ExpertiseProfile"][] ) => Promise<void>;
                  
                  expertiseprofileDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const ExpertiseprofileContext = React.createContext<Iexpertiseprofile>(defaultState);
                const ExpertiseprofileProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [ExpertiseProfileDataList, setExpertiseProfileDataList] = React.useState<Array<ExpertiseProfile>> ([]);
                  const expertiseprofileList = async ( data:operations["expertiseprofile_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await expertiseprofile_list( data, headers);
                      let prevState = ExpertiseProfileDataList;
                      
                      let found = false;
                      const newExpertiseProfile = prevState.map((el:any) => {
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
                        let newExpertiseProfile
                        if(!Array.isArray(result.data))
                        newExpertiseProfile = prevState.push(result.data);
                        else
                        newExpertiseProfile = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const expertiseprofileCreate = async ( data:definitions["ExpertiseProfile"][] | definitions["ExpertiseProfile"][] ) => {
                    if(data)
                    {
                      const result = await expertiseprofile_create( data, headers);
                      let prevState = ExpertiseProfileDataList;
                        
                      //Read or Create
                      let newExpertiseProfile
                      if(!Array.isArray(result.data))
                      newExpertiseProfile = prevState.push(result.data);
                      else
                      newExpertiseProfile = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const expertiseprofileRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await expertiseprofile_read( id, headers);
                      let prevState = ExpertiseProfileDataList;
                      
                      let found = false;
                      const newExpertiseProfile = prevState.map((el:any) => {
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
                        let newExpertiseProfile
                        if(!Array.isArray(result.data))
                        newExpertiseProfile = prevState.push(result.data);
                        else
                        newExpertiseProfile = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const expertiseprofileUpdate = async ( id:string,data:definitions["ExpertiseProfile"][] | definitions["ExpertiseProfile"][] ) => {
                    if(data)
                    {
                      const result = await expertiseprofile_update( id,data, headers);
                      let prevState = ExpertiseProfileDataList;
                        
                      //update
                      let newExpertiseProfile
                      if(!Array.isArray(result.data))
                      newExpertiseProfile = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newExpertiseProfile = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const expertiseprofilePartial = async ( id:string,data:definitions["ExpertiseProfile"][] | definitions["ExpertiseProfile"][] ) => {
                    if(data)
                    {
                      const result = await expertiseprofile_partial_update( id,data, headers);
                      let prevState = ExpertiseProfileDataList;
                        
                    }
                  }
                  
                  const expertiseprofileDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await expertiseprofile_delete( id, headers);
                      let prevState = ExpertiseProfileDataList;
                        
                      //delete
                      const newExpertiseProfile = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <ExpertiseprofileContext.Provider
              
              value={{
                expertiseprofileData:ExpertiseProfileDataList,
              
                  expertiseprofileListFuncProp: expertiseprofileList,
                  
                  expertiseprofileCreateFuncProp: expertiseprofileCreate,
                  
                  expertiseprofileReadFuncProp: expertiseprofileRead,
                  
                  expertiseprofileUpdateFuncProp: expertiseprofileUpdate,
                  
                  expertiseprofilePartialFuncProp: expertiseprofilePartial,
                  
                  expertiseprofileDeleteFuncProp: expertiseprofileDelete,
                  
                }}
              >
              { children }
              </ExpertiseprofileContext.Provider>
            );};
              