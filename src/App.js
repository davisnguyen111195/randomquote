import React, { Component } from 'react';

import './App.css';
import Front from './Component/Front';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.cssColor }
        <Front author="Oprah Winfrey" content="If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough."/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    cssColor: state.randomColor
  }
}
export default connect(mapStateToProps)(App);
