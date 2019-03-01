import React from "react";
import { Link } from 'react-router-dom'

import './../../styles/App.css';

import Reading from './../Reading'
import WantToRead from './../WantToRead'
import Read from './../Read'

class BooksList extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <Reading
              onChangeShelf = {this.props.onChangeShelf}
              books = {this.props.books.filter((book) => (
                book.shelf === 'currentlyReading'
              ))
              }/>
            <WantToRead
              onChangeShelf = {this.props.onChangeShelf}
              books = {this.props.books.filter((book) => (
                book.shelf === 'wantToRead'
              ))
              }/>
            <Read
              onChangeShelf = {this.props.onChangeShelf}
              books = {this.props.books.filter((book) => (
                book.shelf === 'read'
              ))
              }/>
        </div>


        <div className="open-search">
          <Link
            to='/search'
            >Add a book</Link>
        </div>
      </div>
    );
  }
}


export default BooksList
