import React from 'react'
import Bookshelf from './../Bookshelf'

const Reading = ({ books, onChangeShelf }) => (
  <Bookshelf title='Reading' books={books} onChangeShelf={onChangeShelf} />
)

export default Reading
