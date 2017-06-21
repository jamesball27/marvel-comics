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
  }

  componentWillMount() {
    this.props.fetchComics(this.state.pageLoads);
  }

  loadMoreComics() {
    const pageLoads = this.state.pageLoads + 1;
    this.props.fetchComics(pageLoads)
      .then(this.setState({ pageLoads }));
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.props.comics.map((comic, i) => <ComicsIndexItem comic={ comic } key={ i } />)
          }
        </ul>
        <button onClick={ this.loadMoreComics }>Load More Comics</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comics: state.comics
});

const mapDispatchToProps = dispatch => ({
  fetchComics: offsetCount => dispatch(fetchComics(offsetCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicsIndex);