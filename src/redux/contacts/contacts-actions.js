import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// export const addContact = createAction("contacts/add", (name, number) => ({
//   payload: {
//     // id: uuidv4(),
//     name,
//     number,
//   },
// }));

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
