import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contacts-reducer';
import { searchReducer } from './search/search-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  search: searchReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
