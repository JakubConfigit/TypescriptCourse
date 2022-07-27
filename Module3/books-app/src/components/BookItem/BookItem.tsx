import React from "react";
import { Book } from "./../../interfaces/Book.interface";
import "./BookItem.css";
interface Props {
  book: Book;
  deleteBook: (id: string) => void;
}

const BookItem: React.FC<Props> = ({ book, deleteBook }) => {
  return (
    <li className="book-item">
      {book.title} by {book.author}, {book.price}{" "}
      <button className="book-item-button" onClick={() => deleteBook(book.id)}>
        Delete
      </button>
    </li>
  );
};
export default BookItem;
