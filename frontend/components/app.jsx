import React from 'react';
import { Provider } from 'react-redux';
import ComicsIndex from './comics_index';
import CharacterSearch from './character_search';

class App extends React.Component {

  render() {
    return(
      <Provider store={ this.props.store } >
        <div>
          <header className="header">
            <img src={ window.images.marvel } />
            <CharacterSearch />
          </header>
          <ComicsIndex />
        </div>
      </Provider>
    );
  }
  
}

export default App;
