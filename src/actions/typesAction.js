import * as actionTypes from './actionTypes';

export const createTypes = (types) => {
    return {
      type: actionTypes.CREATE_NEW_TYPES,
      types: types
    }
  };