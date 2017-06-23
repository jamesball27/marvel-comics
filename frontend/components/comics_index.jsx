import React from 'react';
import { connect } from 'react-redux';
import { fetchComics, clearComics } from '../actions/comic_actions';
import ComicsIndexItem from './comics_index_item';

class ComicsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoads: 0 };

    this.loadMoreComics = this.loadMoreComics.bind(this);
    this.renderSpinner = this.renderSpinner.bind(this);
  }

  componentWillMount() {
    this.props.fetchComics(this.state.pageLoads);
  }

  componentWillReceiveProps(newProps) {
    if ((this.props.characterSearch === null && newProps.characterSearch) ||
        (this.props.characterSearch && newProps.characterSearch === null)) {
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

  render() {
    return(
      <div className="comics">
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
          Load More { this.props.characterSearch} Comics
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
