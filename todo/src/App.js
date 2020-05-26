import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";
// import {uuid} from "uuid";

class App extends Component {
    state = {
        list: [],
        id: "2",
        item: "",
        editItem: false
    }
    onChange = e => {
        this.setState({
            // item is only one here
            item: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item,
        }
        const updatedItems = [...this.state.items, newItem];
        this.setState({
            list: updatedItems,
            items: "",
            id: "2",
            editItem: false
        });
    }

    clearList = ()=> {
        this.setState({
            list: []
        })
    }

    onDelete = id => {
        const filteredList = this.state.list.filter( i => i.id !== id);
        this.setState({
            list: filteredList
        });
    }

    edit = id => {
        const filteredList = this.state.list.filter(i => i.id!== id );
        const selectedItem = this.state.list.find( i => i.id === id );
        this.setState({
            list: filteredList,
            item: selectedItem.title,
            id: id,
            editItem: true,
        })
    }
    render(){
        return (
            <>
                <Input 
                    item = {this.state.item}
                    onChange = {this.onChange}
                    onSubmit = {this.onSubmit}
                    editItem = {this.state.editItem }
                />
                <List 
                    list = {this.state.list}
                    clearList = {this.clearList}
                    onDelete = {this.onDelete}
                    edit = {this.edit}
                />
            </>
        )
    }
}

export default App;