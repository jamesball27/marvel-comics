import React from 'react';
import { connect } from 'react-redux';
import { fetchComics } from '../actions/comic_actions';
import { arrayAllComics } from '../reducers/selectors';
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

  loadMoreComics() {
    const pageLoads = this.state.pageLoads + 1;
    this.props.fetchComics(pageLoads)
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
        <button onClick={ this.loadMoreComics } className="load-comics-btn">Load More Comics</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comics: state.comics,
  fetching: state.fetching
});

const mapDispatchToProps = dispatch => ({
  fetchComics: offsetCount => dispatch(fetchComics(offsetCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicsIndex);
