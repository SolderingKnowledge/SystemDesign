import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";
import {v1 as uuid} from "uuid"; 

class App extends Component {
    state = {
        list: [],
        id: uuid(),
        // id: 0,
        item: "",
        editItem: false
    }
    onChange = e => {
        this.setState({
            // item is only one here
            item: e.target.value
        })
    }
    // adding item onSubmit
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item,
        }
        const updatedItems = [...this.state.list, newItem];
        this.setState({
            list: updatedItems,
            items: "",
            id:uuid(),
            // id: this.state.id+1,
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
        // const filteredList = this.state.list.splice(id, 1);
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