
              import { operations, definitions } from "../Schemas";
              import {address_list,address_create,address_read,address_update,address_partial_update,address_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Iaddress {
                
                  addressData?:Address[];
                
                  addressListFuncProp?: ( data:operations["address_list"]["parameters"] ) => Promise<void>;
                  
                  addressCreateFuncProp?: ( data:definitions["Address"][] | definitions["Address"][] ) => Promise<void>;
                  
                  addressReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  addressUpdateFuncProp?: ( id:number,data:definitions["Address"][] | definitions["Address"][] ) => Promise<void>;
                  
                  addressPartialFuncProp?: ( id:number,data:definitions["Address"][] | definitions["Address"][] ) => Promise<void>;
                  
                  addressDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const AddressContext = React.createContext<Iaddress>(defaultState);
                const AddressProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [AddressDataList, setAddressDataList] = React.useState<Array<Address>> ([]);
                  const addressList = async ( data:operations["address_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await address_list( data, headers);
                      let prevState = AddressDataList;
                      
                      let found = false;
                      const newAddress = prevState.map((el:any) => {
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
                        let newAddress
                        if(!Array.isArray(result.data))
                        newAddress = prevState.push(result.data);
                        else
                        newAddress = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const addressCreate = async ( data:definitions["Address"][] | definitions["Address"][] ) => {
                    if(data)
                    {
                      const result = await address_create( data, headers);
                      let prevState = AddressDataList;
                        
                      //Read or Create
                      let newAddress
                      if(!Array.isArray(result.data))
                      newAddress = prevState.push(result.data);
                      else
                      newAddress = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const addressRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await address_read( id, headers);
                      let prevState = AddressDataList;
                      
                      let found = false;
                      const newAddress = prevState.map((el:any) => {
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
                        let newAddress
                        if(!Array.isArray(result.data))
                        newAddress = prevState.push(result.data);
                        else
                        newAddress = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const addressUpdate = async ( id:string,data:definitions["Address"][] | definitions["Address"][] ) => {
                    if(data)
                    {
                      const result = await address_update( id,data, headers);
                      let prevState = AddressDataList;
                        
                      //update
                      let newAddress
                      if(!Array.isArray(result.data))
                      newAddress = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newAddress = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const addressPartial = async ( id:string,data:definitions["Address"][] | definitions["Address"][] ) => {
                    if(data)
                    {
                      const result = await address_partial_update( id,data, headers);
                      let prevState = AddressDataList;
                        
                    }
                  }
                  
                  const addressDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await address_delete( id, headers);
                      let prevState = AddressDataList;
                        
                      //delete
                      const newAddress = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <AddressContext.Provider
              
              value={{
                addressData:AddressDataList,
              
                  addressListFuncProp: addressList,
                  
                  addressCreateFuncProp: addressCreate,
                  
                  addressReadFuncProp: addressRead,
                  
                  addressUpdateFuncProp: addressUpdate,
                  
                  addressPartialFuncProp: addressPartial,
                  
                  addressDeleteFuncProp: addressDelete,
                  
                }}
              >
              { children }
              </AddressContext.Provider>
            );};
              