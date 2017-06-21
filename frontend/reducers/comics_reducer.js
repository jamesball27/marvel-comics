import { RECEIVE_COMICS } from '../actions/comic_actions';

const ComicsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COMICS:
      const newState = Object.assign([], state);
      return newState.concat(action.comics);
    default:
      return state;
  }
};

export default ComicsReducer;
