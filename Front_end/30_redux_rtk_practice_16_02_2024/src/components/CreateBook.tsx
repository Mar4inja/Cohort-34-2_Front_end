import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, deleteBook } from "../redux/library/librarySlice";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // turn off all default options
    // TODO

    dispatch(
      addBook({
        title,
        author,
        year,
      })
    );

    setTitle("");
    setAuthor("");
    setYear("");
  };

  const handleDelete = (index: number) => {
    dispatch(deleteBook(index));
  };
  
  return (
    <div className="text-center">
      <h1>Create Book:</h1>

      <form onSubmit={handleSubmit} className="d-flex flex column w-50">
        <label style={{ color: "red" }} htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control my-3"
        />
        <label style={{ color: "red" }} htmlFor="author">
          Author
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control mb-3"
        />
        <label style={{ color: "red" }} htmlFor="year">
          Year
        </label>
        <input
          id="year"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="form-control mb-3"
        />

        <button className="btn btn-success btn-sm mb-2 mx-1" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};
export default CreateBook;
