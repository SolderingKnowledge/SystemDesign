import React, { Component } from "react";

export default class Input extends Component {
    render(){
        const {item, onChange, onSubmit, editItem } = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input type="text" value={item} onChange={onChange} 
                    placeholder="add to item"
                />
                <button type="submit" disabled = {item ? false : true}>
                    {editItem? "edit Item": "add item"}
                </button>
            </form>
        )
    }
};