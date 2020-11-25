import React, { Component, Fragment } from "react";
import './App.css';
import Portal from "./components/Portal";
class App extends Component {
    render () {
        return (
            <div>
                Root
                <Portal />
            </div>)
    };
}

export default App;
