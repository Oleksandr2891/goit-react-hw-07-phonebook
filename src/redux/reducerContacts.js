import { createReducer } from '@reduxjs/toolkit';
import initState from '../contacts.json';
import { addContact, deleteContact } from "./actions";



const findName = function (contacts, payload) {
    const isContact = contacts.some(item => item.name === payload.name);
    isContact && alert(`${payload.name} is already in contacts`);
    return !isContact ? [...contacts, payload] : contacts;
}

const item = createReducer(initState.contactsBase, {
    [addContact]: ((state, { payload }) => findName(state, payload)),
    [deleteContact]: ((state, { payload }) => state.filter(({ id }) => id !== payload)),

})

export default item;