
              import { operations, definitions } from "../Schemas";
              import {phone_list,phone_create,phone_read,phone_update,phone_partial_update,phone_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Iphone {
                
                  phoneData?:Phone[];
                
                  phoneListFuncProp?: ( data:operations["phone_list"]["parameters"] ) => Promise<void>;
                  
                  phoneCreateFuncProp?: ( data:definitions["Phone"][] | definitions["Phone"][] ) => Promise<void>;
                  
                  phoneReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  phoneUpdateFuncProp?: ( id:number,data:definitions["Phone"][] | definitions["Phone"][] ) => Promise<void>;
                  
                  phonePartialFuncProp?: ( id:number,data:definitions["Phone"][] | definitions["Phone"][] ) => Promise<void>;
                  
                  phoneDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const PhoneContext = React.createContext<Iphone>(defaultState);
                const PhoneProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [PhoneDataList, setPhoneDataList] = React.useState<Array<Phone>> ([]);
                  const phoneList = async ( data:operations["phone_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await phone_list( data, headers);
                      let prevState = PhoneDataList;
                      
                      let found = false;
                      const newPhone = prevState.map((el:any) => {
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
                        let newPhone
                        if(!Array.isArray(result.data))
                        newPhone = prevState.push(result.data);
                        else
                        newPhone = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const phoneCreate = async ( data:definitions["Phone"][] | definitions["Phone"][] ) => {
                    if(data)
                    {
                      const result = await phone_create( data, headers);
                      let prevState = PhoneDataList;
                        
                      //Read or Create
                      let newPhone
                      if(!Array.isArray(result.data))
                      newPhone = prevState.push(result.data);
                      else
                      newPhone = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const phoneRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await phone_read( id, headers);
                      let prevState = PhoneDataList;
                      
                      let found = false;
                      const newPhone = prevState.map((el:any) => {
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
                        let newPhone
                        if(!Array.isArray(result.data))
                        newPhone = prevState.push(result.data);
                        else
                        newPhone = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const phoneUpdate = async ( id:string,data:definitions["Phone"][] | definitions["Phone"][] ) => {
                    if(data)
                    {
                      const result = await phone_update( id,data, headers);
                      let prevState = PhoneDataList;
                        
                      //update
                      let newPhone
                      if(!Array.isArray(result.data))
                      newPhone = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newPhone = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const phonePartial = async ( id:string,data:definitions["Phone"][] | definitions["Phone"][] ) => {
                    if(data)
                    {
                      const result = await phone_partial_update( id,data, headers);
                      let prevState = PhoneDataList;
                        
                    }
                  }
                  
                  const phoneDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await phone_delete( id, headers);
                      let prevState = PhoneDataList;
                        
                      //delete
                      const newPhone = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <PhoneContext.Provider
              
              value={{
                phoneData:PhoneDataList,
              
                  phoneListFuncProp: phoneList,
                  
                  phoneCreateFuncProp: phoneCreate,
                  
                  phoneReadFuncProp: phoneRead,
                  
                  phoneUpdateFuncProp: phoneUpdate,
                  
                  phonePartialFuncProp: phonePartial,
                  
                  phoneDeleteFuncProp: phoneDelete,
                  
                }}
              >
              { children }
              </PhoneContext.Provider>
            );};
              