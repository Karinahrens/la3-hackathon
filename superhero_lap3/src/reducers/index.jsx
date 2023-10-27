import { combineReducers } from 'redux';
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API_DATA_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_API_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case 'FETCH_API_DATA_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;