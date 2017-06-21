export const fetchComics = load_count => (
  $.ajax({
    method: 'GET',
    url: '/api/comics',
    data: { load_count }
  })
);
