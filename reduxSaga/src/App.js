import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class App extends Component {    
    render() {
        return (
            <Fragment>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>decrement</button>
                <h3>{this.props.text}</h3>
                <h3>{this.props.title}</h3>
                <button onClick={this.props.textChange}>add !</button> {/* 1 */}
                <button onClick={this.props.titleChange}>times</button>{/* 2 */}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { title} = state;
  return {
    counter: state.counter,
    text: state.text,
    title
  };
};
//2
const textChange = () => {
    return {
        type: "TEXT"
    }
}
//3
const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
        dispatch({ type: "INCREMENT", value: 2 })
    },
    decrement: () => dispatch({ type: "DECREMENT", value: 2 })
  };
};
//1
// const mapDispatchToProps = dispatch => bindActionCreators({
//     textChange
// }, dispatch);
//2
// export default connect( mapStateToProps, {titleChange:() =>{
//     return { type: "TITLE"}
// } })(App);
//3
export default connect( mapStateToProps, mapDispatchToProps)(App);


