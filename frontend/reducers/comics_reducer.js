import { RECEIVE_COMICS, CLEAR_COMICS } from '../actions/comic_actions';

const ComicsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COMICS:
      const newState = Object.assign([], state);
      return newState.concat(action.comics);
    case CLEAR_COMICS:
      return [];
    default:
      return state;
  }
};

export default ComicsReducer;
