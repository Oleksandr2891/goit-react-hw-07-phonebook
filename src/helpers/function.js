import { notifyInfo } from "../services/toastify";

let isNotFoundName = false;

export const visibleContacts = (item, filter) => {
  const normalizedFilter = filter?.toLowerCase();
  const contacts = item?.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(isNotFoundName);
  if (filter && !contacts.length && !isNotFoundName) {
    notifyInfo("Noting found for your request");
    isNotFoundName = true;
  }
  if (contacts.length) isNotFoundName = false;
  if (filter) {
    return contacts;
  } else {
    return item;
  }
};
