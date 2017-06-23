export const fetchComics = (offset, search_term) => (
  $.ajax({
    method: 'GET',
    url: '/api/comics',
    data: { comics: { offset, search_term } }
  })
);
