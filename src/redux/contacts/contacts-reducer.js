import types from './contacts-types';

export const contactsReducer = (
  state = localStorage.contacts !== undefined
    ? JSON.parse(localStorage.contacts)
    : [],
  { type, payload }
) => {
  switch (type) {
    case types.ADD:
      const isIncludes = state.find((item) => item.name === payload.name);
      if (isIncludes) {
        alert('already exist');
        return state;
      }
      const newAddState = [...state, payload];
      localStorage.setItem('contacts', JSON.stringify(newAddState));
      return newAddState;
    case types.REMOVE:
      const index = state.indexOf(state.find((item) => item.id === payload));
      const newRemoveState = state;
      newRemoveState.splice(index, 1);

      localStorage.setItem('contacts', JSON.stringify(newRemoveState));
      return [...newRemoveState];
    default:
      return state;
  }
};
