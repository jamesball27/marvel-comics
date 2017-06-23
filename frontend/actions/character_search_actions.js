export const RECEIVE_SEARCH_TERM = 'RECEIVE_SEARCH_TERM';

export const receiveSearchTerm = searchTerm => ({
  type: RECEIVE_SEARCH_TERM,
  searchTerm
});
