import React from 'react';
import { Provider } from 'react-redux';
import ComicsIndex from './comics_index';

class App extends React.Component {

  render() {
    return(
      <Provider store={ this.props.store } >
        <ComicsIndex />
      </Provider>
    );
  }
}

export default App;
