import { operations, definitions } from "../Schemas";
import {
  comments_list,
  comments_create,
  comments_read,
  comments_update,
  comments_partial_update,
  comments_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Icomments {
  CommentsData?: definitions["Comments"][];

  commentsListFuncProp?: (
    data: operations["comments_list"]["parameters"]
  ) => Promise<void>;

  commentsCreateFuncProp?: (data: definitions["Comments"][]) => Promise<void>;

  commentsReadFuncProp?: (id: number) => Promise<void>;

  commentsUpdateFuncProp?: (
    id: number,
    data: definitions["Comments"][]
  ) => Promise<void>;

  commentsPartialFuncProp?: (
    id: number,
    data: definitions["Comments"][]
  ) => Promise<void>;

  commentsDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const CommentsContext = React.createContext<Icomments>(defaultState);
const CommentsProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [CommentsDataList, setCommentsDataList] = React.useState<Array<definitions["Comments"]>> ([]);
  const commentsList = async (
    data: operations["comments_list"]["parameters"]
  ) => {
    const result = await comments_list(data, headers);

    if (result) {
    }
  };

  const commentsCreate = async (data: definitions["Comments"][]) => {
    const result = await comments_create(data, headers);

    if (result) {
    }
  };

  const commentsRead = async (id: number) => {
    const result = await comments_read(id, headers);

    if (result) {
    }
  };

  const commentsUpdate = async (
    id: number,
    data: definitions["Comments"][]
  ) => {
    const result = await comments_update(id, data, headers);

    if (result) {
    }
  };

  const commentsPartial = async (
    id: number,
    data: definitions["Comments"][]
  ) => {
    const result = await comments_partial_update(id, data, headers);

    if (result) {
    }
  };

  const commentsDelete = async (id: number) => {
    const result = await comments_delete(id, headers);

    if (result) {
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        CommentsData: CommentsDataList,

        commentsListFuncProp: commentsList,

        commentsCreateFuncProp: commentsCreate,

        commentsReadFuncProp: commentsRead,

        commentsUpdateFuncProp: commentsUpdate,

        commentsPartialFuncProp: commentsPartial,

        commentsDeleteFuncProp: commentsDelete,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
