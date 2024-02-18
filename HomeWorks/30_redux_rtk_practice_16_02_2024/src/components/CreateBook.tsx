import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, deleteBook } from "../redux/library/librarySlice";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div>
      <h1 style={{ color: "blue" }}>Create Book:</h1>

      <form onSubmit={handleSubmit}>
        <label style={{ color: "red" }} htmlFor="title">
          Title
        </label>
        <input
          className="rounded-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label style={{ color: "red" }} htmlFor="author">
          Author
        </label>
        <input
          className="rounded-input"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label style={{ color: "red" }} htmlFor="year">
          Year
        </label>
        <input
          className="rounded-input"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button className="btn btn-success btn-sm mb-2 mx-1" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};
export default CreateBook;
