import types from './search-types';

export const searchReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.SEARCH:
      return payload;
    default:
      return state;
  }
};
