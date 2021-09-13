import {
  addContactApi,
  deleteContactApi,
  getAllContactsApi,
} from "../../services/Api";
import { notifySuccess } from "../../services/toastify";
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
    dispatch(getAsyncContactsSuccess(contacts));
  } catch (error) {
    dispatch(getAsyncContactsError(error));
  }
};

export const addContact = (contactData) => async (dispatch) => {
  dispatch(addAsyncContactRequests());
  try {
    const contact = await addContactApi(contactData);

    dispatch(addAsyncContactSuccess(contact));
    notifySuccess("You have successfully added a new contact!");
  } catch (error) {
    dispatch(addAsyncContactError(error));
  }
};

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteAsyncContactRequests());
  try {
    await deleteContactApi(contactId);
    dispatch(deleteAsyncContactSuccess(contactId));
    notifySuccess("You have successfully deleted a contact!");
  } catch (error) {
    dispatch(deleteAsyncContactError(error));
  }
};
