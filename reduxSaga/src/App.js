import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

class App extends Component {    
    render() {
        return (
            <Fragment>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>decrement</button>
                <h3>{this.props.text}</h3>
                {/* <button onClick={this.props.textChange}>add !</button> */}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    text: state.text,
  };
};

// const textChange = () => {
//     return {
//         type: "TEXT"
//     }
// }
const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
        dispatch({ type: "INCREMENT", value: 2 })
    },
    decrement: () => dispatch({ type: "DECREMENT", value: 2 })
  };
};

// const mapDispatchToProps = dispatch => bindActionCreators({
//     textChange
// }, dispatch);


export default connect( mapStateToProps, mapDispatchToProps)(App);
