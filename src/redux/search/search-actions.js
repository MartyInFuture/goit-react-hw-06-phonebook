import types from './search-types';

export const search = (value) => ({
  type: types.SEARCH,
  payload: value,
});
