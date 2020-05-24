import { GET_LEADS_LIST, GET_LEADS_LIST_SUCCESS, GET_LEADS_LIST_ERROR, UPDATE_LEAD_ERROR, UPDATE_LEAD_SUCCESS, UPDATE_LEAD, DELETE_LEAD_ERROR, DELETE_LEAD_SUCCESS, DELETE_LEAD, ADD_LEAD_ERROR, ADD_LEAD, ADD_LEAD_SUCCESS } from './actionTypes';

export const getLeadsList = () => ({
  type: GET_LEADS_LIST
})

export const getLeadsListSuccess = (data) => ({
  type: GET_LEADS_LIST_SUCCESS,
  data
})

export const getLeadsListError = (error) => ({
  type: GET_LEADS_LIST_ERROR,
  error
})

export const addLead = (payload,cb) => ({
  type: ADD_LEAD,
  payload,
  cb
})

export const addLeadSuccess = (data) => ({
  type: ADD_LEAD_SUCCESS,
  data
})

export const addLeadError = (error) => ({
  type: ADD_LEAD_ERROR,
  error
})

export const deleteLead = (payload, cb) => ({
  type: DELETE_LEAD,
  payload,
  cb
})

export const deleteLeadSuccess = (data) => ({
  type: DELETE_LEAD_SUCCESS,
  data
})

export const deleteLeadError = (error) => ({
  type: DELETE_LEAD_ERROR,
  error
})

export const updateLead = (payload, cb) => ({
  type: UPDATE_LEAD,
  payload,
  cb
})

export const updateLeadSuccess = (data) => ({
  type: UPDATE_LEAD_SUCCESS,
  data
})

export const updateLeadError = (error) => ({
  type: UPDATE_LEAD_ERROR,
  error
})