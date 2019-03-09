import React from 'react'
import Book from './../Book'

const Bookshelf = ({ title, books, onChangeShelf }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} onChangeShelf={onChangeShelf} />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default Bookshelf
