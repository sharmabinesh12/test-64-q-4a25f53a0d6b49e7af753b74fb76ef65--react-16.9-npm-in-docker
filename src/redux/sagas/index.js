import {  all } from 'redux-saga/effects';
import {leadWatcher} from './leadSaga';


export default function* rootSaga() {
  yield all([
    leadWatcher()
  ])
}
