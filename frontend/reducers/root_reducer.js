import { combineReducers } from 'redux';
import ComicsReducer from './comics_reducer';
import FetchingReducer from './fetching_reducer';

const RootReducer = combineReducers({
  comics: ComicsReducer,
  fetching: FetchingReducer
});

export default RootReducer;
