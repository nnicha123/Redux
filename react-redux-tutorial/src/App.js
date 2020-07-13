import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return(
      <div className="App">
        {this.props.data}
        <button onClick={() => this.props.plus({type:"INCREASE"})}>+</button>
        <button onClick={() => this.props.minus({type:"DECREASE"})}>-</button>
        <button onClick={() => this.props.reset({type:"RESET"})}>Reset</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data:state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plus:(action) => dispatch(action),
    minus:(action) => dispatch(action),
    reset:(action) => dispatch(action)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
