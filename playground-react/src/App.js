import React, { Component, Fragment, useState } from "react";
import './App.css';
import Portal from "./components/Portal";

// export default function App () {
//         const [ myState, setmyState ] = useState({
//             list: ["ok", "nok", "sok"],
//         })

//         // function reversify(){
//         //     const copyState = [...myState.list];
//         //     const reversed = copyState.reverse();
//         //     setmyState({list: reversed});
//         // }

//         return (
//             <div>
//                 {
//                     myState.list.map((item, idx)=> {
//                         return (
//                             <div key={idx}>
//                                 <div>{item}</div>
//                             </div>
//                         )
//                     })
//                 }
//                 {/* <button onClick={reversify}> */}
//                 <button onClick={()=>{
//                     const copyState = [...myState.list];
//                     const reversed = copyState.reverse();
//                     setmyState({list: reversed});
//                 }}>
//                 click to reverse</button>
//             </div>)
// };


export default class App extends Component {
    state = {
        list: ["ok", "no", "yes"]
    }

    reversify = () => {
        const copyState = [...this.state.list];
        const reversed = copyState.reverse();
        this.setState({list: reversed});
    }

    render(){
        const list = this.state.list.map((item, idx)=> {
            return(
                <div key={idx}>{item}</div>
            )
        })
        return(
            <div>
                {list}
                {/* <button onClick={this.setState({list: ["omg"]})}>reverse</button> */}
                <button onClick={this.reversify}>reverse</button>
            </div>
        )
    }
}



