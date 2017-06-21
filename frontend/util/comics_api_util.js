export const fetchComics = load_count => (
  $.ajax({
    method: 'GET',
    url: '/api/comics',
    data: { comics: { load_count } }
  })
);
