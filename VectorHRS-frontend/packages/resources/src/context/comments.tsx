
              import { operations, definitions } from "../Schemas";
              import {comments_list,comments_create,comments_read,comments_update,comments_partial_update,comments_delete,
               } from "../api";
              
                import React, { createContext, useState, FC } from "react";
                
                interface Icomments {
                
                  commentsData?:Comments[];
                
                  commentsListFuncProp?: ( data:operations["comments_list"]["parameters"] ) => Promise<void>;
                  
                  commentsCreateFuncProp?: ( data:definitions["Comments"][] | definitions["Comments"][] ) => Promise<void>;
                  
                  commentsReadFuncProp?: ( id:number ) => Promise<void>;
                  
                  commentsUpdateFuncProp?: ( id:number,data:definitions["Comments"][] | definitions["Comments"][] ) => Promise<void>;
                  
                  commentsPartialFuncProp?: ( id:number,data:definitions["Comments"][] | definitions["Comments"][] ) => Promise<void>;
                  
                  commentsDeleteFuncProp?: ( id:number ) => Promise<void>;
                  
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const CommentsContext = React.createContext<Icomments>(defaultState);
                const CommentsProvider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  
                  /* prettier-ignore */
                  const [CommentsDataList, setCommentsDataList] = React.useState<Array<Comments>> ([]);
                  const commentsList = async ( data:operations["comments_list"]["parameters"] ) => {
                    if(data)
                    {
                      const result = await comments_list( data, headers);
                      let prevState = CommentsDataList;
                      
                      let found = false;
                      const newComments = prevState.map((el:any) => {
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
                        let newComments
                        if(!Array.isArray(result.data))
                        newComments = prevState.push(result.data);
                        else
                        newComments = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const commentsCreate = async ( data:definitions["Comments"][] | definitions["Comments"][] ) => {
                    if(data)
                    {
                      const result = await comments_create( data, headers);
                      let prevState = CommentsDataList;
                        
                      //Read or Create
                      let newComments
                      if(!Array.isArray(result.data))
                      newComments = prevState.push(result.data);
                      else
                      newComments = prevState.concat(result.data);
                        
                    }
                  }
                  
                  const commentsRead = async ( id:string ) => {
                    if(data)
                    {
                      const result = await comments_read( id, headers);
                      let prevState = CommentsDataList;
                      
                      let found = false;
                      const newComments = prevState.map((el:any) => {
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
                        let newComments
                        if(!Array.isArray(result.data))
                        newComments = prevState.push(result.data);
                        else
                        newComments = prevState.concat(result.data);
                      }
                        
                    }
                  }
                  
                  const commentsUpdate = async ( id:string,data:definitions["Comments"][] | definitions["Comments"][] ) => {
                    if(data)
                    {
                      const result = await comments_update( id,data, headers);
                      let prevState = CommentsDataList;
                        
                      //update
                      let newComments
                      if(!Array.isArray(result.data))
                      newComments = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      newComments = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                        
                    }
                  }
                  
                  const commentsPartial = async ( id:string,data:definitions["Comments"][] | definitions["Comments"][] ) => {
                    if(data)
                    {
                      const result = await comments_partial_update( id,data, headers);
                      let prevState = CommentsDataList;
                        
                    }
                  }
                  
                  const commentsDelete = async ( id:string ) => {
                    if(data)
                    {
                      const result = await comments_delete( id, headers);
                      let prevState = CommentsDataList;
                        
                      //delete
                      const newComments = prevState.filter( (el:any) => (el.id !== result.data.id )
                        
                    }
                  }
                  
              return (
              <CommentsContext.Provider
              
              value={{
                commentsData:CommentsDataList,
              
                  commentsListFuncProp: commentsList,
                  
                  commentsCreateFuncProp: commentsCreate,
                  
                  commentsReadFuncProp: commentsRead,
                  
                  commentsUpdateFuncProp: commentsUpdate,
                  
                  commentsPartialFuncProp: commentsPartial,
                  
                  commentsDeleteFuncProp: commentsDelete,
                  
                }}
              >
              { children }
              </CommentsContext.Provider>
            );};
              