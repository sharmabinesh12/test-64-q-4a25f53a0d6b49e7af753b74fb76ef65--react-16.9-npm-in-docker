import { 
  GET_LEADS_LIST, 
  GET_LEADS_LIST_SUCCESS, 
  GET_LEADS_LIST_ERROR, 
  ADD_LEAD, 
  ADD_LEAD_SUCCESS, 
  ADD_LEAD_ERROR, 
  DELETE_LEAD, 
  DELETE_LEAD_SUCCESS, 
  DELETE_LEAD_ERROR, 
  UPDATE_LEAD, 
  UPDATE_LEAD_SUCCESS, 
  UPDATE_LEAD_ERROR 
} 
  from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: false
}
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS_LIST:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case GET_LEADS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        error: false,
        leads_list: action.data
      }
    case GET_LEADS_LIST_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.error
      }
    case ADD_LEAD:
      return {
        ...state,
        isLoading: true,
        error: false,
        data: null
      }
    case ADD_LEAD_SUCCESS:
      return {
        ...state,
        isLoading: true,
        error: false,
        botSettings: action.data
      }
    case ADD_LEAD_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.error
      }
    case DELETE_LEAD:
      return {
        ...state,
        isLoading: true,
        error: false,
        data: null
      }
    case DELETE_LEAD_SUCCESS:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case DELETE_LEAD_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.error
      }
    case UPDATE_LEAD:
      return {
        ...state,
        isLoading: true,
        error: false,
        data: null
      }
    case UPDATE_LEAD_SUCCESS:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case UPDATE_LEAD_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.error
      }
    default:
      return state;
  }
}