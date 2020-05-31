import * as actionTypes from '../actions/actionTypes.js';

export default (state = [], action) => {
    switch (action.type){
      
      case actionTypes.CREATE_NEW_TYPES:
      return [
        ...state,
        Object.assign({}, action.types)
      ];
      default:
            return state;
    }
  };