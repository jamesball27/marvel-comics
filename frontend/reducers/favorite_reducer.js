import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';

const FavoriteReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign([], state);
  switch(action.type) {
    case RECEIVE_FAVORITES:
      return action.favorites;
    case RECEIVE_FAVORITE:
      return newState.concat(action.comicId);
    case REMOVE_FAVORITE:
      const index = newState.indexOf(action.comicId[0]);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default FavoriteReducer;
