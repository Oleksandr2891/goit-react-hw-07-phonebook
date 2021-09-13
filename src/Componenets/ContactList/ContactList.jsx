import { useDispatch, useSelector } from "react-redux";
import { ContactWrapper } from "./ContactListStyled";
import ContactListItem from "./ContactListItem/ContactListItem";
import { useEffect, memo } from "react";
import {
  getContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operation";
import { getVisibleContacts } from "../../redux/selector";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);

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

export default memo(ContactList);
