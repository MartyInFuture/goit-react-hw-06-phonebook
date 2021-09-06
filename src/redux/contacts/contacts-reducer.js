import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const INIT_STATE =
  localStorage.contacts !== undefined ? JSON.parse(localStorage.contacts) : [];

const contactsAdd = (state, { payload }) => {
  if (state.find((item) => item.name === payload.name)) {
    alert('already exist');
    return state;
  }
  const newAddState = [...state, payload];
  localStorage.setItem('contacts', JSON.stringify(newAddState));
  return newAddState;
};

const contactsRemove = (state, { payload }) => {
  const newRemoveState = state.filter(({ id }) => id !== payload);

  localStorage.setItem('contacts', JSON.stringify(newRemoveState));
  return newRemoveState;
};

export const contactsReducer = createReducer(INIT_STATE, {
  [actions.add]: contactsAdd,
  [actions.remove]: contactsRemove,
});
