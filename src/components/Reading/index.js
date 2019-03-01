import React from 'react'
import Book from './../Book'

class Reading extends React.Component {

  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book
                  book = {book}
                  onChangeShelf = {this.props.onChangeShelf}
                  /></li>))}
          </ol>
        </div>
      </div>
    )
  }
}
export default Reading
