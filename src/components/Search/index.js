import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../services/BooksAPI'
import _ from 'lodash'

import './../../styles/App.css'
import Book from './../Book'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: this.props.query || '',
      showingBooks: []
    }
    this.updateQuery = _.debounce(this.updateQuery, 500)
  }

  updateQuery = (value) => {
    let showingBooks = []
    console.log(value)
    if (value) {
      BooksAPI.search(value).then(response => {
        console.log(response)
        if (response.length) {
          showingBooks = response.map(b => {
            const index = this.props.books.findIndex(c => c.id === b.id)
            b.shelf = 'none'
            if (index >= 0) {
              return this.props.books[index]
            } else {
              return b
            }
          })
        }
        this.setState({ showingBooks })
      })
    }
  }

  render () {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={value => {
                this.updateQuery(value.target.value)
                this.setState({ query: value.target.value })
              }}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.showingBooks.map(book => (
              <li key={book.id}>
                <Book book={book} onChangeShelf={this.props.onChangeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
