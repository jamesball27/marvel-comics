import { combineReducers } from 'redux';
import ComicsReducer from './comics_reducer';
import FetchingReducer from './fetching_reducer';
import CharacterSearchReducer from './character_search_reducer';
import FavoriteReducer from './favorite_reducer';

const RootReducer = combineReducers({
  comics: ComicsReducer,
  fetching: FetchingReducer,
  characterSearch: CharacterSearchReducer,
  favorites: FavoriteReducer
});

export default RootReducer;
