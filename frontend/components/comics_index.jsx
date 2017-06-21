import React from 'react';
import { connect } from 'react-redux';
import { fetchComics } from '../actions/comic_actions';
import { arrayAllComics } from '../reducers/selectors';

class ComicsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoads: 0 };
  }

  componentWillMount() {
    this.props.fetchComics(this.state.pageLoads);
  }

  render() {
    return(
      <ul>
        {
          this.props.comics.map(comic => <li>{comic.title}</li>)
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  comics: arrayAllComics(state)
});

const mapDispatchToProps = dispatch => ({
  fetchComics: offsetCount => dispatch(fetchComics(offsetCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicsIndex);
