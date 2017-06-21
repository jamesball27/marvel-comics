export const arrayAllComics = state => (
  Object.keys(state.comics).map(key => state.comics[key])
);
