import * as ComicsApiUtil from '../util/comics_api_util';

export const RECEIVE_COMICS = 'RECEIVE_COMICS';

const receiveComics = comics => ({
  type: RECEIVE_COMICS,
  comics
});

export const fetchComics = offsetCount => dispatch => {
  dispatch({ type: 'FETCHING' });
  return ComicsApiUtil.fetchComics(offsetCount)
    .then(comics => dispatch(receiveComics(comics)));
};
