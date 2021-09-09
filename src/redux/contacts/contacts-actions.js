import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("contacts/changeFilter");

export const addAsyncContactRequests = createAction(
  "contacts/addContactRequests"
);
export const addAsyncContactSuccess = createAction(
  "contacts/addContactSuccess"
);
export const addAsyncContactError = createAction("contacts/addContactError");

export const deleteAsyncContactRequests = createAction(
  "contacts/deleteContactRequests"
);
export const deleteAsyncContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteAsyncContactError = createAction(
  "contacts/deleteContactError"
);

export const getAsyncContactsRequests = createAction(
  "contacts/getContactsRequests"
);
export const getAsyncContactsSuccess = createAction(
  "contacts/getContactsSuccess"
);
export const getAsyncContactsError = createAction("contacts/getContactsError");
