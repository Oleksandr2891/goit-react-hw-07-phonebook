import {
  addContactApi,
  deleteContactApi,
  getAllContactsApi,
} from "../../services/Api";
import {
  addAsyncContactError,
  addAsyncContactRequests,
  addAsyncContactSuccess,
  deleteAsyncContactError,
  deleteAsyncContactRequests,
  deleteAsyncContactSuccess,
  getAsyncContactsError,
  getAsyncContactsRequests,
  getAsyncContactsSuccess,
} from "./contacts-actions";

export const getContacts = () => async (dispatch) => {
  dispatch(getAsyncContactsRequests());
  try {
    const contacts = await getAllContactsApi();
    console.log("object", contacts);
    dispatch(getAsyncContactsSuccess(contacts));
  } catch (error) {
    dispatch(getAsyncContactsError(error));
  }
};

export const addContact = (contactData) => async (dispatch) => {
  dispatch(addAsyncContactRequests());
  try {
    const contact = await addContactApi(contactData);
    console.log("operation", contact);
    dispatch(addAsyncContactSuccess(contact));
  } catch (error) {
    dispatch(addAsyncContactError(error));
  }
};

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteAsyncContactRequests());
  try {
    await deleteContactApi(contactId);
    dispatch(deleteAsyncContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteAsyncContactError(error));
  }
};
