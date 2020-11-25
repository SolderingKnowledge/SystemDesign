import React, { Component } from 'react'
import ReactDOM from "react-dom";

export default class Portal extends Component {
    render() {
        // takes 2 parameters: 1jsx to return, 2domNode element to mount
        return ReactDOM.createPortal(// instead of just a return
            <div>
                React Portal!
            </div>,
            document.getElementById("root2")
        )

        // return (
        //     <div>
        //         React Portal
        //     </div>
        // )
    }
}
