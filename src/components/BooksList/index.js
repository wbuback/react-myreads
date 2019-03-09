import React from 'react'
import { Link } from 'react-router-dom'

import './../../styles/App.css'

import Reading from './../Reading'
import WantToRead from './../WantToRead'
import Read from './../Read'

const BooksList = ({ onChangeShelf, books }) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <div className='list-books-content'>
      <Reading
        onChangeShelf={onChangeShelf}
        books={books.filter(book => book.shelf === 'currentlyReading')}
      />
      <WantToRead
        onChangeShelf={onChangeShelf}
        books={books.filter(book => book.shelf === 'wantToRead')}
      />
      <Read
        onChangeShelf={onChangeShelf}
        books={books.filter(book => book.shelf === 'read')}
      />
    </div>

    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  </div>
)

export default BooksList
