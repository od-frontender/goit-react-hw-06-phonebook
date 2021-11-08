import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, filter } from './actions';

const contactsListReducer = createReducer([], {
  [addContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const filterReducers = createReducer('', {
  [filter]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: filterReducers,
});
