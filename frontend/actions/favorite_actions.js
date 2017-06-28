import * as FavoriteApiUtil from '../util/favorites_api_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const receiveFavorites = favorites => ({
  type: RECEIVE_FAVORITES,
  favorites
});

const receiveFavorite = comicId => ({
  type: RECEIVE_FAVORITE,
  comicId
});

const removeFavorite = comicId => ({
  type: REMOVE_FAVORITE,
  comicId
});

export const fetchFavorites = () => dispatch => {
  return FavoriteApiUtil.fetchFavorites()
    .then(favorites => dispatch(receiveFavorites(favorites)));
};

export const createFavorite = comicId => dispatch => {
  return FavoriteApiUtil.createFavorite(comicId)
    .then(favorite => dispatch(receiveFavorite(favorite)));
};

export const deleteFavorite = comicId => dispatch => {
  return FavoriteApiUtil.deleteFavorite(comicId)
    .then(favorite => dispatch(removeFavorite(favorite)));
};
