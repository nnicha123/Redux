import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  addHistory = (e) => {
    e.preventDefault();
    this.props.addHistory({ type: "ADD_HISTORY", name: this.props.state.textName, email: this.props.state.textEmail })
  }
  
  render() {
    return (
      <div className="App">
        {this.props.data}
        <button onClick={() => this.props.plus({ type: "INCREASE" })}>+</button>
        <button onClick={() => this.props.minus({ type: "DECREASE" })}>-</button>
        <button onClick={() => this.props.reset({ type: "RESET" })}>Reset</button>
        <button onClick={() => this.props.addNum({ type: "ADD_NUM", num: this.props.data })}>addNum</button>
        <button onClick={() => this.props.addPerson({ type: "ADD_PERSON" })}>addPerson</button>
        <ul>
          {this.props.state.arr.map((num, idx) => <li key={idx}>{num}</li>)}
          {this.props.state.arrObj.map((obj, idx) => <li key={idx}>Name: {obj.name}, EMail: {obj.email}</li>)}
        </ul>
        <form onSubmit={this.addHistory}>
          <input type="text" placeholder="name" onChange={(e) => this.props.textName({ type:"TEXT_NAME",textName:e.target.value })} value={this.props.state.textName} />
          <input type="email" placeholder="email" onChange={(e) => this.props.textEmail({ type:"TEXT_EMAIL",textEmail:e.target.value })} value={this.props.state.textEmail} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.count,
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plus: (action) => dispatch(action),
    minus: (action) => dispatch(action),
    reset: (action) => dispatch(action),
    addNum: (action) => dispatch(action),
    addPerson: (action) => dispatch(action),
    addHistory: (action) => dispatch(action),
    textName:(action) => dispatch(action),
    textEmail:(action) => dispatch(action)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
