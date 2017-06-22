import { RECEIVE_COMICS } from '../actions/comic_actions';

const FETCHING = 'FETCHING';

const FetchingReducer = (state = false, action) => {
  switch(action.type) {
    case FETCHING:
      return true;
    case RECEIVE_COMICS:
      return false;
    default:
      return state;
  }
};

export default FetchingReducer;
