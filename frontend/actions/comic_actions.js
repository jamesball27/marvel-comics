import * as ComicsApiUtil from '../util/comics_api_util';

export const RECEIVE_COMICS = 'RECEIVE_COMICS';

const receiveComics = comics => ({
  type: RECEIVE_COMICS,
  comics
});

export const fetchComics = offset => dispatch => {
  dispatch({ type: 'FETCHING' });
  return ComicsApiUtil.fetchComics(offset)
    .then(comics => dispatch(receiveComics(comics)));
};
