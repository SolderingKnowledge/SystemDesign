import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
        <Fragment>
            <h1>{this.props.counter}</h1>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>
        </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispachToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT", value: 2 }),
    decrement: () => dispatch({ type: "DECREMENT", value: 2 })
  };
};
export default connect( mapStateToProps, mapDispachToProps)(App);
