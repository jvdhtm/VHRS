
              import { operations, definitions } from "../Schemas";
              import {person_list,person_create,person_read,person_update,person_partial_update,person_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Iperson {
                
                  personData?:Person[];
                
                  personListFuncProp?: ( data:operations["person_list"]["parameters"] ) => Promise<void>;
                  
                  personCreateFuncProp?: ( data:definitions["Person"][] | definitions["Person"][] ) => Promise<void>;
                  
                  personReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  personUpdateFuncProp?: ( id:number,data:definitions["Person"][] | definitions["Person"][] ) => Promise<void>;
                  
                  personPartialFuncProp?: ( id:number,data:definitions["Person"][] | definitions["Person"][] ) => Promise<void>;
                  
                  personDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const PersonContext = React.createContext<Iperson>(defaultState);
                const PersonProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [PersonDataList, setPersonDataList] = React.useState<Array<Person>> ([]);
                  const personList = async ( data:operations["person_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await person_list( data, headers);
                      let prevState = PersonDataList;
                      
                      let found = false;
                      const newPerson = prevState.map((el:any) => {
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
                        let newPerson
                        if(!Array.isArray(result.data))
                        newPerson = prevState.push(result.data);
                        else
                        newPerson = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const personCreate = async ( data:definitions["Person"][] | definitions["Person"][] ) => {
                    if(data)
                    {
                      const result = await person_create( data, headers);
                      let prevState = PersonDataList;
                        
                      //Read or Create
                      let newPerson
                      if(!Array.isArray(result.data))
                      newPerson = prevState.push(result.data);
                      else
                      newPerson = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const personRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await person_read( id, headers);
                      let prevState = PersonDataList;
                      
                      let found = false;
                      const newPerson = prevState.map((el:any) => {
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
                        let newPerson
                        if(!Array.isArray(result.data))
                        newPerson = prevState.push(result.data);
                        else
                        newPerson = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const personUpdate = async ( id:string,data:definitions["Person"][] | definitions["Person"][] ) => {
                    if(data)
                    {
                      const result = await person_update( id,data, headers);
                      let prevState = PersonDataList;
                        
                      //update
                      let newPerson
                      if(!Array.isArray(result.data))
                      newPerson = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newPerson = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const personPartial = async ( id:string,data:definitions["Person"][] | definitions["Person"][] ) => {
                    if(data)
                    {
                      const result = await person_partial_update( id,data, headers);
                      let prevState = PersonDataList;
                        
                    }
                  }
                  
                  const personDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await person_delete( id, headers);
                      let prevState = PersonDataList;
                        
                      //delete
                      const newPerson = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <PersonContext.Provider
              
              value={{
                personData:PersonDataList,
              
                  personListFuncProp: personList,
                  
                  personCreateFuncProp: personCreate,
                  
                  personReadFuncProp: personRead,
                  
                  personUpdateFuncProp: personUpdate,
                  
                  personPartialFuncProp: personPartial,
                  
                  personDeleteFuncProp: personDelete,
                  
                }}
              >
              { children }
              </PersonContext.Provider>
            );};
              