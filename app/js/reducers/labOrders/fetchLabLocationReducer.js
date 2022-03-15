import {
  FETCH_LAB_LOCATIONS_SUCCESS,
  FETCH_LAB_LOCATIONS_FAILURE,
  FETCH_LAB_LOCATIONS_LOADING,
} from '../../actions/actionTypes';
import initialState from '../initialState';

const fetchLabLocationReducer = (state = initialState.getLabLocations, action) => {
  switch (action.type) {
    case FETCH_LAB_LOCATIONS_SUCCESS:
      return {
        ...state,
        labLocations: action.data.results,
        status: {
          ...state.status,
          fetched: true,
          loading: false,
        },
      };
    case FETCH_LAB_LOCATIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        status: {
          ...state.status,
          error: true,
          loading: false,
        },
      };
    case FETCH_LAB_LOCATIONS_LOADING: {
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    }
    default:
      return state;
  }
};

export default fetchLabLocationReducer;
