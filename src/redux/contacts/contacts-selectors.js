import { createSelector } from '@reduxjs/toolkit';
import { getSearch } from '../search/search-selectors';
export const getContacts = (state) => state.contacts;

export const getFilteredContacts = createSelector(
  [getContacts, getSearch],
  (contacts, search) => {
    return contacts.filter((contact) => contact.name.includes(search));
  }
);
