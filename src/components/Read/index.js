import React from 'react'
import Bookshelf from './../Bookshelf'

const Read = ({ books, onChangeShelf }) => (
  <Bookshelf title='Read' books={books} onChangeShelf={onChangeShelf} />
)

export default Read
