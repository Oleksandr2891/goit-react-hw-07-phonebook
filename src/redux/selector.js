import { createSelector } from "@reduxjs/toolkit";
import { visibleContacts } from "../helpers/function";

export const getContactsList = (state) => state.contacts.item;
export const getContactsFilter = (state) => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContactsList, getContactsFilter],
  (items, filter) => visibleContacts(items, filter)
);
