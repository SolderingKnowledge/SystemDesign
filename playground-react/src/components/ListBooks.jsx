import React, { Component } from 'react'

export default class ListBooks extends Component {
    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.length ?
                        books.map((book, idx) => {
                        return(<li key={idx} className="book">
                            <h3 className="title">{book.title}</h3>
                            <h5 className="author">{book.authorName}</h5>
                            <div className="img">
                                <img src={book.imageUrl} alt="img" />
                            </div>
                        </li>)
                        })
                    : <h1>Welcome to books store!<h4> We have all the books you're looking for!</h4></h1>
                }
            </ul>
        )
    }
}
