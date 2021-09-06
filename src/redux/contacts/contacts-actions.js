import types from './contacts-types';

export const add = (value) => ({
  type: types.ADD,
  payload: value,
});

export const remove = (value) => ({
  type: types.REMOVE,
  payload: value,
});
