import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import item from "./contacts/contacts-reducer";
import filter from "./contacts/filter-reducer";
import error from "./contacts/contacts-errors";

const contacts = combineReducers({
  item,
  filter,
  error,
});

export const store = configureStore({
  reducer: { contacts },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
  devTools: process.env.NODE_ENV === "development",
});
