
              import { operations, definitions } from "../Schemas";
              import {user_list,user_create,user_read,user_update,user_partial_update,user_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Iuser {
                
                  userData?:User[];
                
                  userListFuncProp?: ( data:operations["user_list"]["parameters"] ) => Promise<void>;
                  
                  userCreateFuncProp?: ( data:definitions["User"][] | definitions["User"][] ) => Promise<void>;
                  
                  userReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  userUpdateFuncProp?: ( id:number,data:definitions["User"][] | definitions["User"][] ) => Promise<void>;
                  
                  userPartialFuncProp?: ( id:number,data:definitions["User"][] | definitions["User"][] ) => Promise<void>;
                  
                  userDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const UserContext = React.createContext<Iuser>(defaultState);
                const UserProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [UserDataList, setUserDataList] = React.useState<Array<User>> ([]);
                  const userList = async ( data:operations["user_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await user_list( data, headers);
                      let prevState = UserDataList;
                      
                      let found = false;
                      const newUser = prevState.map((el:any) => {
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
                        let newUser
                        if(!Array.isArray(result.data))
                        newUser = prevState.push(result.data);
                        else
                        newUser = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const userCreate = async ( data:definitions["User"][] | definitions["User"][] ) => {
                    if(data)
                    {
                      const result = await user_create( data, headers);
                      let prevState = UserDataList;
                        
                      //Read or Create
                      let newUser
                      if(!Array.isArray(result.data))
                      newUser = prevState.push(result.data);
                      else
                      newUser = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const userRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await user_read( id, headers);
                      let prevState = UserDataList;
                      
                      let found = false;
                      const newUser = prevState.map((el:any) => {
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
                        let newUser
                        if(!Array.isArray(result.data))
                        newUser = prevState.push(result.data);
                        else
                        newUser = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const userUpdate = async ( id:string,data:definitions["User"][] | definitions["User"][] ) => {
                    if(data)
                    {
                      const result = await user_update( id,data, headers);
                      let prevState = UserDataList;
                        
                      //update
                      let newUser
                      if(!Array.isArray(result.data))
                      newUser = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newUser = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const userPartial = async ( id:string,data:definitions["User"][] | definitions["User"][] ) => {
                    if(data)
                    {
                      const result = await user_partial_update( id,data, headers);
                      let prevState = UserDataList;
                        
                    }
                  }
                  
                  const userDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await user_delete( id, headers);
                      let prevState = UserDataList;
                        
                      //delete
                      const newUser = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <UserContext.Provider
              
              value={{
                userData:UserDataList,
              
                  userListFuncProp: userList,
                  
                  userCreateFuncProp: userCreate,
                  
                  userReadFuncProp: userRead,
                  
                  userUpdateFuncProp: userUpdate,
                  
                  userPartialFuncProp: userPartial,
                  
                  userDeleteFuncProp: userDelete,
                  
                }}
              >
              { children }
              </UserContext.Provider>
            );};
              