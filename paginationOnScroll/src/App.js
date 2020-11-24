import React, { Component, Fragment } from "react";
import './App.css';
import ListBooks from "./components/ListBooks"

const baseUrl = "https://goodreads-server-express--dotdash.repl.co/search";
class App extends Component {
    constructor(){
        super();
        this.state = {
            value: "",
            books: [],
            page: 0,
        }
    }

    getSearchData = async (e) => {
        e.preventDefault();
        let apiUrl = `${baseUrl}/${this.state.value}`;
        const res = await fetch(apiUrl, {mode: "cors"});
        const { list } = await res.json();
        console.log(list);
        this.setState({books:list});
    }

    changeInput = (e)=> {
        this.setState({value: e.target.value});
    }

    loadBooks = async () => {
        this.setState( prevState =>{
            return { page: prevState.page+1 }
        })
        const res = await fetch(`${baseUrl}/page=${this.state.page}`);
        const { list } = await res.json();
        console.log("aikolList:", list);
        if(Array.isArray(list)){
            const copyStateAndAdd = [...this.state.books, ...list];
            this.setState({books: copyStateAndAdd});
        }
    }

    handleScroll = ()=> {
        let lastLi = document.querySelector("ul > li:last-child");
        let lastliOffset = lastLi.offsetTop + lastLi.clientHeight;
        let pageOffset = window.pageYOffset + window.innerHeight;
        let bottomOffset = 20;
        if(pageOffset > lastliOffset - bottomOffset) {
            this.loadBooks();
        }
        
    }

    componentDidMount(){
        this.scrollListener = window.addEventListener("scroll", e => {
            this.handleScroll(e);
        })
    }

    render (){
        return (<div>
                <form onSubmit={this.getSearchData}>
                    <input value={this.state.value} onChange={this.changeInput} placeholder="Type to get books.." />
                    <button type="submit">Search</button>
                </form>
                <ListBooks books={this.state.books}/>
            </div>)
    };
}

export default App;
