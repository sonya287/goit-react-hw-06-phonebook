import { combineReducers } from 'redux';
import contactsArr from '../../contactsArr';

import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const contacts = createReducer(contactsArr, {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.contact_filter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
