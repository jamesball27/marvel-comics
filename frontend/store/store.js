import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = () => {
  return createStore(
    RootReducer,
    applyMiddleware(thunk, logger));
};

export default configureStore;
