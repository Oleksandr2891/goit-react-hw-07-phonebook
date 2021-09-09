import { createReducer } from "@reduxjs/toolkit";
import {
  addAsyncContactError,
  addAsyncContactRequests,
  deleteAsyncContactError,
  deleteAsyncContactRequests,
  getAsyncContactsError,
  getAsyncContactsRequests,
} from "./contacts-actions";

const setError = (_, { payload }) => payload.message;
const resetError = () => null;

const error = createReducer(null, {
  [getAsyncContactsRequests]: resetError,
  [getAsyncContactsError]: setError,
  [addAsyncContactRequests]: resetError,
  [addAsyncContactError]: setError,
  [deleteAsyncContactRequests]: resetError,
  [deleteAsyncContactError]: setError,
});

export default error;
