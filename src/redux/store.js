import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import item, { isExsist } from "./contacts/contacts-reducer";
import filter from "./contacts/filter-reducer";
import error from "./contacts/contacts-errors";
import { setIsExsist } from "./contacts/contacts-actions";

const contacts = combineReducers({
  item,
  filter,
  error,
  isExsist,
});

const alertExsistContact = (state) => (next) => (action) => {
  if (action.type === "contacts/addContactRequests") {
    const isContact = state
      .getState()
      .contacts.item.some((contact) => contact.name === action.payload.name);
    if (isContact) {
      state.dispatch(setIsExsist());
    }
  }
  next(action);
};

export const store = configureStore({
  reducer: { contacts },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // getDefaultMiddleware().concat(logger, thunk),
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(logger, thunk),
    getDefaultMiddleware().concat(thunk, alertExsistContact),
  devTools: process.env.NODE_ENV === "development",
});

// [mW({getS, dsp})()](action)
