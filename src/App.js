import React, { Component } from 'react';

import './App.css';
import Front from './Component/Front';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Front author="Oprah Winfrey" content="If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough."/>
      </div>
    );
  }
}

export default App;
