import { createReducer } from "@reduxjs/toolkit";
import {
  addAsyncContactSuccess,
  getAsyncContactsSuccess,
  deleteAsyncContactSuccess,
  addAsyncContactRequests,
} from "./contacts-actions";

const item = createReducer([], {
  [getAsyncContactsSuccess]: (_, { payload }) => payload,
  [addAsyncContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteAsyncContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const isExsist = createReducer(false, {
  [addAsyncContactRequests]: (_, { payload }) => payload,
});

export default item;
