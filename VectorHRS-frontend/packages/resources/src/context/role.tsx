
              import { operations, definitions } from "../Schemas";
              import {role_list,role_create,role_read,role_update,role_partial_update,role_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Irole {
                
                  roleData?:Role[];
                
                  roleListFuncProp?: ( data:operations["role_list"]["parameters"] ) => Promise<void>;
                  
                  roleCreateFuncProp?: ( data:definitions["Role"][] | definitions["Role"][] ) => Promise<void>;
                  
                  roleReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  roleUpdateFuncProp?: ( id:number,data:definitions["Role"][] | definitions["Role"][] ) => Promise<void>;
                  
                  rolePartialFuncProp?: ( id:number,data:definitions["Role"][] | definitions["Role"][] ) => Promise<void>;
                  
                  roleDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const RoleContext = React.createContext<Irole>(defaultState);
                const RoleProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [RoleDataList, setRoleDataList] = React.useState<Array<Role>> ([]);
                  const roleList = async ( data:operations["role_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await role_list( data, headers);
                      let prevState = RoleDataList;
                      
                      let found = false;
                      const newRole = prevState.map((el:any) => {
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
                        let newRole
                        if(!Array.isArray(result.data))
                        newRole = prevState.push(result.data);
                        else
                        newRole = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const roleCreate = async ( data:definitions["Role"][] | definitions["Role"][] ) => {
                    if(data)
                    {
                      const result = await role_create( data, headers);
                      let prevState = RoleDataList;
                        
                      //Read or Create
                      let newRole
                      if(!Array.isArray(result.data))
                      newRole = prevState.push(result.data);
                      else
                      newRole = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const roleRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await role_read( id, headers);
                      let prevState = RoleDataList;
                      
                      let found = false;
                      const newRole = prevState.map((el:any) => {
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
                        let newRole
                        if(!Array.isArray(result.data))
                        newRole = prevState.push(result.data);
                        else
                        newRole = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const roleUpdate = async ( id:string,data:definitions["Role"][] | definitions["Role"][] ) => {
                    if(data)
                    {
                      const result = await role_update( id,data, headers);
                      let prevState = RoleDataList;
                        
                      //update
                      let newRole
                      if(!Array.isArray(result.data))
                      newRole = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newRole = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const rolePartial = async ( id:string,data:definitions["Role"][] | definitions["Role"][] ) => {
                    if(data)
                    {
                      const result = await role_partial_update( id,data, headers);
                      let prevState = RoleDataList;
                        
                    }
                  }
                  
                  const roleDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await role_delete( id, headers);
                      let prevState = RoleDataList;
                        
                      //delete
                      const newRole = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <RoleContext.Provider
              
              value={{
                roleData:RoleDataList,
              
                  roleListFuncProp: roleList,
                  
                  roleCreateFuncProp: roleCreate,
                  
                  roleReadFuncProp: roleRead,
                  
                  roleUpdateFuncProp: roleUpdate,
                  
                  rolePartialFuncProp: rolePartial,
                  
                  roleDeleteFuncProp: roleDelete,
                  
                }}
              >
              { children }
              </RoleContext.Provider>
            );};
              