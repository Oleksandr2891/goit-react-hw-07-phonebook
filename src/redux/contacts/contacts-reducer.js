import { createReducer } from "@reduxjs/toolkit";
import {
  addAsyncContactSuccess,
  getAsyncContactsSuccess,
  deleteAsyncContactSuccess,
} from "./contacts-actions";

// const findName = function (contacts, payload) {
//   const isContact = contacts.some((item) => item.name === payload.name);
//   isContact && alert(`${payload.name} is already in contacts`);
//   return !isContact ? [...contacts, payload] : contacts;
// };

const item = createReducer([], {
  [getAsyncContactsSuccess]: (_, { payload }) => payload,
  [addAsyncContactSuccess]: (state, { payload }) => {
    console.log("4", payload);
    return [...state, payload];
  },
  [deleteAsyncContactSuccess]: (state, { payload }) =>
    // console.log(`object`, payload),
    state.filter(({ id }) => id !== payload),
});

export default item;
