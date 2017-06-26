import React from 'react';
import { connect } from 'react-redux';
import { fetchComics, clearComics } from '../actions/comic_actions';
import ComicsIndexItem from './comics_index_item';
import { receiveSearchTerm } from '../actions/character_search_actions';

class ComicsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoads: 0 };

    this.loadMoreComics = this.loadMoreComics.bind(this);
    this.renderSpinner = this.renderSpinner.bind(this);
    this.renderNowShowingText = this.renderNowShowingText.bind(this);
  }

  componentWillMount() {
    this.props.fetchComics(this.state.pageLoads);
  }

  componentWillReceiveProps(newProps) {
    if ((this.props.characterSearch !== newProps.characterSearch)) {
      this.setState({ pageLoads: 0 });
      this.props.clearComics();
      this.props.fetchComics(this.state.pageLoads, newProps.characterSearch);
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
            this.props.comics.map((comic, i) => <ComicsIndexItem comic={ comic } key={ i } />)
          }
        </ul>
        { this.renderSpinner() }
        <button
          onClick={ this.loadMoreComics }
          className="load-comics-btn"
        >
          Load More { this.props.characterSearch } Comics
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comics: state.comics,
  fetching: state.fetching,
  characterSearch: state.characterSearch
});

const mapDispatchToProps = dispatch => ({
  fetchComics: (offsetCount, searchTerm) => dispatch(fetchComics(offsetCount, searchTerm)),
  clearComics: () => dispatch(clearComics())
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicsIndex);
