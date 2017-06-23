import React from 'react';
import { receiveSearchTerm } from '../actions/character_search_actions';
import { connect } from 'react-redux';

class CharacterSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveSearchTerm(this.state.searchTerm);
  }

  clearSearch() {
    this.props.receiveSearchTerm(null);
    this.setState({ searchTerm: '' });
  }

  render() {
    const placeholder = "Search for comics by character";

    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder={ placeholder }
            onChange={ this.handleInput }
            value={ this.state.searchTerm }
            />
        </form>
        <button onClick={ this.clearSearch }>Clear Search</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  receiveSearchTerm: searchTerm => dispatch(receiveSearchTerm(searchTerm))
});

export default connect(null, mapDispatchToProps)(CharacterSearch);