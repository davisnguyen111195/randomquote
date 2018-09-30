import React, { Component } from 'react';


import Front from './Component/Front';
import { connect } from 'react-redux';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Front/>
      </div>
    );
  }
}



export default App;
