import React from "react";
import { BookAction } from "../../redux/booksTypes";
import { Book } from "./../../interfaces/Book.interface";
import "./BookItem.css";
interface Props {
  book: Book;
  removeBook: (id: string) => BookAction;
}

const BookItem: React.FC<Props> = ({ book, removeBook }) => {
  return (
    <li className="book-item">
      {book.title} by {book.author}, {book.price}{" "}
      <button className="book-item-button" onClick={() => removeBook(book.id)}>
        Delete
      </button>
    </li>
  );
};
export default BookItem;
