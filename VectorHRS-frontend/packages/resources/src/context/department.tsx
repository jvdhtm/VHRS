
              import { operations, definitions } from "../Schemas";
              import {department_list,department_create,department_read,department_update,department_partial_update,department_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Idepartment {
                
                  departmentData?:Department[];
                
                  departmentListFuncProp?: ( data:operations["department_list"]["parameters"] ) => Promise<void>;
                  
                  departmentCreateFuncProp?: ( data:definitions["Department"][] | definitions["Department"][] ) => Promise<void>;
                  
                  departmentReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  departmentUpdateFuncProp?: ( id:number,data:definitions["Department"][] | definitions["Department"][] ) => Promise<void>;
                  
                  departmentPartialFuncProp?: ( id:number,data:definitions["Department"][] | definitions["Department"][] ) => Promise<void>;
                  
                  departmentDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const DepartmentContext = React.createContext<Idepartment>(defaultState);
                const DepartmentProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [DepartmentDataList, setDepartmentDataList] = React.useState<Array<Department>> ([]);
                  const departmentList = async ( data:operations["department_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await department_list( data, headers);
                      let prevState = DepartmentDataList;
                      
                      let found = false;
                      const newDepartment = prevState.map((el:any) => {
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
                        let newDepartment
                        if(!Array.isArray(result.data))
                        newDepartment = prevState.push(result.data);
                        else
                        newDepartment = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const departmentCreate = async ( data:definitions["Department"][] | definitions["Department"][] ) => {
                    if(data)
                    {
                      const result = await department_create( data, headers);
                      let prevState = DepartmentDataList;
                        
                      //Read or Create
                      let newDepartment
                      if(!Array.isArray(result.data))
                      newDepartment = prevState.push(result.data);
                      else
                      newDepartment = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const departmentRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await department_read( id, headers);
                      let prevState = DepartmentDataList;
                      
                      let found = false;
                      const newDepartment = prevState.map((el:any) => {
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
                        let newDepartment
                        if(!Array.isArray(result.data))
                        newDepartment = prevState.push(result.data);
                        else
                        newDepartment = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const departmentUpdate = async ( id:string,data:definitions["Department"][] | definitions["Department"][] ) => {
                    if(data)
                    {
                      const result = await department_update( id,data, headers);
                      let prevState = DepartmentDataList;
                        
                      //update
                      let newDepartment
                      if(!Array.isArray(result.data))
                      newDepartment = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newDepartment = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const departmentPartial = async ( id:string,data:definitions["Department"][] | definitions["Department"][] ) => {
                    if(data)
                    {
                      const result = await department_partial_update( id,data, headers);
                      let prevState = DepartmentDataList;
                        
                    }
                  }
                  
                  const departmentDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await department_delete( id, headers);
                      let prevState = DepartmentDataList;
                        
                      //delete
                      const newDepartment = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <DepartmentContext.Provider
              
              value={{
                departmentData:DepartmentDataList,
              
                  departmentListFuncProp: departmentList,
                  
                  departmentCreateFuncProp: departmentCreate,
                  
                  departmentReadFuncProp: departmentRead,
                  
                  departmentUpdateFuncProp: departmentUpdate,
                  
                  departmentPartialFuncProp: departmentPartial,
                  
                  departmentDeleteFuncProp: departmentDelete,
                  
                }}
              >
              { children }
              </DepartmentContext.Provider>
            );};
              