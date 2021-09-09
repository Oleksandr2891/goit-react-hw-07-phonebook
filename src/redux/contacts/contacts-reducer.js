import { createReducer } from "@reduxjs/toolkit";
import {
  addAsyncContactSuccess,
  getAsyncContactsSuccess,
  deleteAsyncContactSuccess,
} from "./contacts-actions";

const item = createReducer([], {
  [getAsyncContactsSuccess]: (_, { payload }) => payload,
  [addAsyncContactSuccess]: (state, { payload }) => {
    console.log("4", payload);
    return [...state, payload];
  },
  [deleteAsyncContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default item;
