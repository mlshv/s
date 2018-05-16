import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import saga from '../sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const createStoreWithMiddleWare = applyMiddleware(sagaMiddleware)(createStore);
  const store = createStoreWithMiddleWare(reducer);
  sagaMiddleware.run(saga);
  return store;
};
