import React from "react";
import One from "./One"
import Second from "./Second"
export const myContext = React.createContext();

function App() {
    const person = {
        name: "John",
        age: 30,
        address: "Hollywood, CA"
    }
    return (
        <div className="App">
            <myContext.Provider value={person}>
                <One />
                <Second />
            </myContext.Provider>
            {/* <Second /> context is not available */}
        </div>
    );
}

export default App;
