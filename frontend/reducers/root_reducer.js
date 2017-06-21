import { combineReducers } from 'redux';
import ComicsReducer from './comics_reducer';

const RootReducer = combineReducers({
  comics: ComicsReducer
});

export default RootReducer;
