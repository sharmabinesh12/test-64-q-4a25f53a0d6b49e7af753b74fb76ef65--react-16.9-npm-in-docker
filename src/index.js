import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './redux/sagas'
import rootReducer from './redux/reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import LeadsView from './container/leadsView';
import './index.scss';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <LeadsView />
    </React.StrictMode>
  </Provider>, document.getElementById('root'));