import { operations, definitions } from "../Schemas";
import {} from "../api";

import React, { createContext, useState, FC } from "react";

interface Iundefined {}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const UndefinedContext = React.createContext<Iundefined>(defaultState);
const UndefinedProvider: React.FC<Icontext> = ({ children, headers }) => {
  return (
    <UndefinedContext.Provider value={{}}>{children}</UndefinedContext.Provider>
  );
};
