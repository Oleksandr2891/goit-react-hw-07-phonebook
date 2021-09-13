import { createSelector } from "@reduxjs/toolkit";
import { visibleContacts } from "../helpers/function";

export const getContactsList = (state) => state.contacts.item;
export const getContactsFilter = (state) => state.contacts.filter;

const visibleContacts = (item, filter) => {
  const normalizedFilter = filter?.toLowerCase();
  console.log(`visible_Selector`);
  if (filter) {
    return item?.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    return item;
  }
};

export const getVisibleContacts = createSelector(
  [getContactsList, getContactsFilter],
  (items, filter) => visibleContacts(items, filter)
);
