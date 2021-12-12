
              import { operations, definitions } from "../Schemas";
              import {expertise_list,expertise_create,expertise_read,expertise_update,expertise_partial_update,expertise_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Iexpertise {
                
                  expertiseData?:Expertise[];
                
                  expertiseListFuncProp?: ( data:operations["expertise_list"]["parameters"] ) => Promise<void>;
                  
                  expertiseCreateFuncProp?: ( data:definitions["Expertise"][] | definitions["Expertise"][] ) => Promise<void>;
                  
                  expertiseReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  expertiseUpdateFuncProp?: ( id:number,data:definitions["Expertise"][] | definitions["Expertise"][] ) => Promise<void>;
                  
                  expertisePartialFuncProp?: ( id:number,data:definitions["Expertise"][] | definitions["Expertise"][] ) => Promise<void>;
                  
                  expertiseDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const ExpertiseContext = React.createContext<Iexpertise>(defaultState);
                const ExpertiseProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [ExpertiseDataList, setExpertiseDataList] = React.useState<Array<Expertise>> ([]);
                  const expertiseList = async ( data:operations["expertise_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await expertise_list( data, headers);
                      let prevState = ExpertiseDataList;
                      
                      let found = false;
                      const newExpertise = prevState.map((el:any) => {
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
                        let newExpertise
                        if(!Array.isArray(result.data))
                        newExpertise = prevState.push(result.data);
                        else
                        newExpertise = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const expertiseCreate = async ( data:definitions["Expertise"][] | definitions["Expertise"][] ) => {
                    if(data)
                    {
                      const result = await expertise_create( data, headers);
                      let prevState = ExpertiseDataList;
                        
                      //Read or Create
                      let newExpertise
                      if(!Array.isArray(result.data))
                      newExpertise = prevState.push(result.data);
                      else
                      newExpertise = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const expertiseRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await expertise_read( id, headers);
                      let prevState = ExpertiseDataList;
                      
                      let found = false;
                      const newExpertise = prevState.map((el:any) => {
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
                        let newExpertise
                        if(!Array.isArray(result.data))
                        newExpertise = prevState.push(result.data);
                        else
                        newExpertise = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const expertiseUpdate = async ( id:string,data:definitions["Expertise"][] | definitions["Expertise"][] ) => {
                    if(data)
                    {
                      const result = await expertise_update( id,data, headers);
                      let prevState = ExpertiseDataList;
                        
                      //update
                      let newExpertise
                      if(!Array.isArray(result.data))
                      newExpertise = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newExpertise = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const expertisePartial = async ( id:string,data:definitions["Expertise"][] | definitions["Expertise"][] ) => {
                    if(data)
                    {
                      const result = await expertise_partial_update( id,data, headers);
                      let prevState = ExpertiseDataList;
                        
                    }
                  }
                  
                  const expertiseDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await expertise_delete( id, headers);
                      let prevState = ExpertiseDataList;
                        
                      //delete
                      const newExpertise = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <ExpertiseContext.Provider
              
              value={{
                expertiseData:ExpertiseDataList,
              
                  expertiseListFuncProp: expertiseList,
                  
                  expertiseCreateFuncProp: expertiseCreate,
                  
                  expertiseReadFuncProp: expertiseRead,
                  
                  expertiseUpdateFuncProp: expertiseUpdate,
                  
                  expertisePartialFuncProp: expertisePartial,
                  
                  expertiseDeleteFuncProp: expertiseDelete,
                  
                }}
              >
              { children }
              </ExpertiseContext.Provider>
            );};
              