import { notifyInfo } from "../services/toastify";

export const visibleContacts = (item, filter) => {
  const normalizedFilter = filter?.toLowerCase();
  const contacts = item?.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  filter && !contacts.length && notifyInfo("Noting found for your request");
  if (filter) {
    return contacts;
  } else {
    return item;
  }
};
