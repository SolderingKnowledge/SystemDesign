import React, { Component } from "react";

export default class Item extends Component {
    render(){
        const {title, onDelete, edit } = this.props;
        return (
            <li>
                <h1>{title}</h1>
                <button onClick={edit}>edit</button>
                <button onClick={onDelete}>delete</button>
            </li>
        )
    }
};