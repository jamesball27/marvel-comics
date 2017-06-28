export const fetchFavorites = () => (
  $.ajax({
    method: 'GET',
    url: '/api/favorites'
  })
);

export const createFavorite = comic_id => (
  $.ajax({
    method: 'POST',
    url: '/api/favorite',
    data: { favorite: { comic_id } }
  })
);

export const deleteFavorite = comic_id => (
  $.ajax({
    method: 'DELETE',
    url: '/api/favorite',
    data: { favorite: { comic_id } }
  })
);
