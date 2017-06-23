import * as ComicsApiUtil from '../util/comics_api_util';

export const RECEIVE_COMICS = 'RECEIVE_COMICS';
export const CLEAR_COMICS = 'CLEAR_COMICS';

const receiveComics = comics => ({
  type: RECEIVE_COMICS,
  comics
});

export const clearComics = () => ({
  type: CLEAR_COMICS
});

export const fetchComics = (offset, searchTerm) => dispatch => {
  dispatch({ type: 'FETCHING' });
  return ComicsApiUtil.fetchComics(offset, searchTerm)
    .then(comics => dispatch(receiveComics(comics)));
};
