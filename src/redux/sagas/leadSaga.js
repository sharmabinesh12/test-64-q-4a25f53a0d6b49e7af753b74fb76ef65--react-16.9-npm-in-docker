
import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import * as dataAccess from '../../utils/ajax';
import {
	GET_LEADS_LIST,
	ADD_LEAD,
	DELETE_LEAD,
	UPDATE_LEAD
} from '../actions/actionTypes';
import { 
	getLeadsListSuccess, 
	getLeadsListError, 
	updateLeadSuccess, 
	updateLeadError, 
	deleteLeadSuccess, 
	deleteLeadError 
} from '../actions/leadAction';

const fetchData = async (url) =>
	await dataAccess.get(url);
const putData = async (url, payload) =>
	await dataAccess.put(url, payload);
const postData = async (url, payload) =>
	await dataAccess.post(url, payload);
const deleteData = async (url) =>
	await dataAccess.del(url);


export function* getLeadsList(param) {
	let url = `http://18.209.209.196:4059/api/leads/`
	try {
		const response = yield call(fetchData, url);
		yield put(getLeadsListSuccess(response));
		// if (param.cb)
		// 	param.cb(response);
	} catch (error) {
		yield put(getLeadsListError(error))
	}
}

export function* addLead(param) {
	let url = `http://18.209.209.196:4059/api/leads/`
	try {
		const response = yield call(postData, url, param.payload);
		yield put(updateLeadSuccess(response));
		if (param.cb) {
			param.cb(response );
		}
	} catch (error) {
		yield put(updateLeadError(error));
		alert("Something went wrong");
	}
}

export function* deleteLead(param) {
	let url = `http://18.209.209.196:4059/api/leads/${param.payload.id}`
	try {
		const response = yield call(deleteData, url);
		yield put(deleteLeadSuccess(response));
		if (param.cb) {
			param.cb({ ...response, msg: "Deleted Successfully" }, "success");
		}
	} catch (error) {
		yield put(deleteLeadError(error));
		alert("Something went wrong");
	}
}
export function* updateLead(param) {
	let url = `http://18.209.209.196:4059/api/mark_lead/${param.payload.id}`
	
	let payload = {
    "communication": param.payload.communication
	}
	try {
		const response = yield call(putData, url, payload);
		yield put(updateLeadSuccess(response));
		if (param.cb) {
			param.cb(response);
		}
	} catch (error) {
		yield put(updateLeadError(error));
		alert("Something went wrong");
	}
}

export function* leadWatcher() {
	yield takeEvery(GET_LEADS_LIST, getLeadsList);
	yield takeEvery(ADD_LEAD, addLead);
	yield takeEvery(DELETE_LEAD, deleteLead);
	yield takeEvery(UPDATE_LEAD, updateLead);
}

