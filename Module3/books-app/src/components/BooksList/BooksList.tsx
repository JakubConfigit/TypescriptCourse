import React from "react";
import { Book } from "./../../interfaces/Book.interface";
import BookItem from "../BookItem/BookItem";
import "./BooksList.css";

interface Props {
  books: Book[];
  deleteBook: (id: string) => void;
}

const BooksList: React.FC<Props> = ({ books, deleteBook }) => {
  return (
    <ul className="books-list">
      {books.map((book: Book) => (
        <BookItem key={book.id} book={book} deleteBook={deleteBook} />
      ))}
    </ul>
  );
};

export default BooksList;
