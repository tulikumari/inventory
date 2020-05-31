import * as actionTypes from './actionTypes';

export const createTypes = (types) => {
    return {
      type: actionTypes.CREATE_NEW_TYPES,
      types: types
    }
  };
export const editTypes = (data) => {
    return {
        type: actionTypes.EDIT_TYPES,
        data: data
    }
}
export const deleteTypes = (id) => {
  return {
      type: actionTypes.DELETE_TYPES,
      id: id
  }
}