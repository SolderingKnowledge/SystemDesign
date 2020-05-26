import React, { Component } from "react";
import Item from "./Item";
export default class List extends Component {
    render(){
        const { list, clearList, onDelete, edit } = this.props;
        return (
            <ul>
                {list.map((item, idx) => {
                    return (
                        <Item 
                            key = {idx}
                            title = {item.title}
                            onDelete = {onDelete(item.id)}
                            edit = {edit(item.id)}
                        />
                    )
                })}
                <button onClick={clearList}>clear list</button>
            </ul>
        )
    }
};