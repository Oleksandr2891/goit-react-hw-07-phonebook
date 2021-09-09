import { useDispatch, useSelector } from "react-redux";
import { ContactWrapper } from "./ContactListStyled";
import ContactListItem from "./ContactListItem/ContactListItem";
import { useEffect } from "react";
import {
  getContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operation";
import {
  getContactsFilter,
  getContactsList,
  getVisibleContacts,
} from "../../redux/selector";

const ContactList = () => {
  const dispatch = useDispatch();

  // const contacts = useSelector(getVisibleContacts);

  const item = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);

  const visibleContacts = (item, filter) => {
    console.log(`visible`);
    const normalizedFilter = filter?.toLowerCase();
    if (filter) {
      return item?.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return item;
    }
  };

  const contacts = visibleContacts(item, filter);

  const onDeleteContact = (id) => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ContactWrapper>
      {contacts?.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactWrapper>
  );
};

export default ContactList;
