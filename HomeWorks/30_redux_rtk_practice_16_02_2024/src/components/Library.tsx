import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/storeRTK'
import { deleteBook } from '../redux/library/librarySlice';

const Library = () => {
  const books = useSelector((state: RootState) => state.library.books);
  const dispatch = useDispatch();

  const handleDelete = (index: number) => {
    dispatch(deleteBook(index));
  };

  return (
    <div>
      <h1 style={{color: 'blue'}}>Books in our library</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <p style={{color: 'red'}}>{book.ISBN}. "{book.title}" - {book.author}, {book.year}
              <button
                className="btn btn-danger btn-sm mx-1"
                onClick={() => handleDelete(index)}
              >
                x
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Library
