import React from 'react'
import { Route } from 'react-router-dom'

import { getAll } from './services/BooksAPI'
import './styles/App.css'

import BooksList from './components/BooksList'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
  	books: []
  }

  componentDidMount() {
  	const books = JSON.parse(localStorage.getItem('books'))
  	if (books !== null && books.length > 0) this.setState({ books })

  	// console.log(books);

  	if (!localStorage.getItem('books')) {
  		getAll().then(books => {
  			this.setState({ books })
  			localStorage.setItem('books', JSON.stringify(books))
  		})
  	}
  }

  changeShelf = (book, shelf) => {
  	book.shelf = shelf
  	const newBooks = this.state.books.slice(0)
  	let found = false
  	for (let i = 0; i < newBooks.length; i++) {
  		if (newBooks[i].id === book.id) {
  			newBooks[i].shelf = shelf
  			found = true
  			break
  		}
  	}
  	if (!found) newBooks.push(book)
  	this.setState({ books: newBooks })
  	localStorage.setItem('books', JSON.stringify(newBooks))
  }

  render() {
  	return (
  		<div className="app">
  			<Route
  				exact
  				path="/"
  				component={() => (
  					<BooksList
  						books={this.state.books}
  						onChangeShelf={this.changeShelf}
  					/>
  				)}
  			/>
  			<Route
  				path="/search"
  				component={() => (
  					<Search books={this.state.books} onChangeShelf={this.changeShelf} />
  				)}
  			/>
  		</div>
  	)
  }
}

export default BooksApp
