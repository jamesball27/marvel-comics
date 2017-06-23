import { RECEIVE_SEARCH_TERM } from '../actions/character_search_actions';

const CharacterSearchReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
};

export default CharacterSearchReducer;
