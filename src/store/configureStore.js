import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from '../reducers';
import saga from '../sagas';

const initialState = {
  notes: [],
  editor: {
    title: '',
    text: '',
    noteSaveInProgress: false,
  },
};

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const createStoreWithMiddleWare = applyMiddleware(sagaMiddleware, logger)(createStore);
  const store = createStoreWithMiddleWare(reducer, initialState);
  sagaMiddleware.run(saga);
  return store;
};
