import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ContactWrapper } from "./ContactListStyled";
import ContactListItem from "./ContactListItem/ContactListItem";
import { deleteContact } from '../../redux/actions';


const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactWrapper>
            {contacts?.map(({ id, name, number }) => <ContactListItem key={id} name={name} number={number} id={id} onDeleteContact={onDeleteContact} />)}
        </ContactWrapper>
    )
}


const mapStateToProps = (state) => {
    const { filter, item } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = item?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    if (normalizedFilter) {
        return {
            contacts: visibleContacts
        }
    } else {
        return {
            contacts: state.contacts.item
        }
    }
}



const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func,
}