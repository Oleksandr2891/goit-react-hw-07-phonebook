import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import item from "./contacts/contacts-reducer";
import filter from "./contacts/filter-reducer";

const contacts = combineReducers({
  item,
  filter,
});

export const store = configureStore({
  reducer: { contacts },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(logger, thunk),
    getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV === "development",
});
