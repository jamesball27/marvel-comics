import React from 'react';
import { connect } from 'react-redux';
import { fetchComics, clearComics } from '../actions/comic_actions';
import { receiveSearchTerm } from '../actions/character_search_actions';
import { fetchFavorites, createFavorite, deleteFavorite } from '../actions/favorite_actions';
import ComicsIndexItem from './comics_index_item';

const mapStateToProps = state => ({
  comics: state.comics,
  fetching: state.fetching,
  characterSearch: state.characterSearch,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  fetchComics: (offsetCount, searchTerm) => dispatch(fetchComics(offsetCount, searchTerm)),
  clearComics: () => dispatch(clearComics()),
  fetchFavorites: () => dispatch(fetchFavorites()),
  createFavorite: comicId => dispatch(createFavorite(comicId)),
  deleteFavorite: comicId => dispatch(deleteFavorite(comicId)),
});

class ComicsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoads: 0 };

    this.loadMoreComics = this.loadMoreComics.bind(this);
    this.renderSpinner = this.renderSpinner.bind(this);
    this.renderNowShowingText = this.renderNowShowingText.bind(this);
    this.renderLoadButton = this.renderLoadButton.bind(this);
  }

  componentWillMount() {
    this.props.fetchComics(this.state.pageLoads)
      .then(this.props.fetchFavorites());
  }

  componentWillReceiveProps(newProps) {
    if ((this.props.characterSearch !== newProps.characterSearch)) {
      const pageLoads = 0;
      this.props.clearComics();
      this.props.fetchComics(pageLoads, newProps.characterSearch);
      this.setState({ pageLoads });
    }
  }

  loadMoreComics() {
    const pageLoads = this.state.pageLoads + 1;
    this.props.fetchComics(pageLoads, this.props.characterSearch)
      .then(this.setState({ pageLoads }));
  }

  renderSpinner() {
    if (this.props.fetching) {
      return(
        <div className="spinner"></div>
      );
    }
  }

  renderNowShowingText() {
    if (!this.props.fetching) {
      let nowShowingText = 'all';
      if (this.props.characterSearch) {
        nowShowingText = this.props.characterSearch;
      }

      return(
        <h4>Showing: { nowShowingText } comics</h4>
      );
    }
  }

  renderLoadButton() {
    if (!this.props.fetching) {
      return(
        <button
          onClick={ this.loadMoreComics }
          className="load-comics-btn"
        >
          Load More { this.props.characterSearch } Comics
        </button>
      );
    }
  }

  render() {
    if (this.props.comics.length === 0 && !this.props.fetching) {
      return(
        <div className="comics">
          <h2>No results found. Check the spelling of the character name.</h2>
        </div>
      );
    }

    return(
      <div className="comics">
        { this.renderNowShowingText() }
        <ul className="comics-index">
          {
            this.props.comics.map((comic, i) => (
              <ComicsIndexItem
                key={ i }
                comic={ comic }
                favorited={ this.props.favorites.includes(comic.id) }
                createFavorite={ this.props.createFavorite }
                deleteFavorite={ this.props.deleteFavorite }
              />
            ))
          }
        </ul>
        { this.renderSpinner() }
        { this.renderLoadButton() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicsIndex);
