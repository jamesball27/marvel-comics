export const fetchFavorites = () => (
  $.ajax({
    method: 'GET',
    url: '/api/favorites'
  })
);

export const createFavorite = comic_id => (
  $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: { favorites: { comic_id } }
  })
);

export const deleteFavorite = comic_id => (
  $.ajax({
    method: 'DELETE',
    url: '/api/favorites',
    data: { favorites: { comic_id } }
  })
);
