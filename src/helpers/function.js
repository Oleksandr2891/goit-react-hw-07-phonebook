export const visibleContacts = (item, filter) => {
  const normalizedFilter = filter?.toLowerCase();
  const contacts = item?.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  if (filter) {
    return contacts;
  } else {
    return item;
  }
};
