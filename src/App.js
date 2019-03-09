import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { getAll, update } from './services/BooksAPI'
import './styles/App.css'

import BooksList from './components/BooksList'
import Search from './components/Search'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount () {
    const books = JSON.parse(localStorage.getItem('books'))
    if (books !== null && books.length > 0) this.setState({ books })

    if (!localStorage.getItem('books')) {
      getAll().then(books => {
        this.setState({ books })
        localStorage.setItem('books', JSON.stringify(books))
      })
    }
  }

  changeShelf = (book, shelf) => {
    book.shelf = shelf
    const newBooks = this.state.books
    let found = false
    newBooks.map(item => {
      if (item.id === book.id) {
        newBooks.shelf = shelf
        found = true
      }
      return newBooks
    })

    if (!found) newBooks.push(book)
    update(book, shelf)
    this.setState({ books: newBooks })
    localStorage.setItem('books', JSON.stringify(newBooks))
  }

  render () {
    const { books } = this.state

    return (
      <div className='app'>
        <Route
          exact
          path='/'
          component={() => (
            <BooksList books={books} onChangeShelf={this.changeShelf} />
          )}
        />
        <Route
          path='/search'
          component={() => (
            <Search books={books} onChangeShelf={this.changeShelf} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
