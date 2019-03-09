import React from 'react'
import Bookshelf from './../Bookshelf'

const WantToRead = ({ books, onChangeShelf }) => (
  <Bookshelf title='Want to Read' books={books} onChangeShelf={onChangeShelf} />
)

export default WantToRead
