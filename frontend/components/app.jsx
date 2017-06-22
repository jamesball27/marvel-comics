import React from 'react';
import { Provider } from 'react-redux';
import ComicsIndex from './comics_index';

class App extends React.Component {

  render() {
    return(
      <Provider store={ this.props.store } >
        <div>
          <header className="header">
            <img src={ window.images.marvel } />
          </header>
          <ComicsIndex />
        </div>
      </Provider>
    );
  }
}

export default App;
