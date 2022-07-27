import { ADD_BOOK, REMOVE_BOOK, BookAction, BooksState } from './booksTypes' ;
import { Book } from '../interfaces/Book.interface';
// action creators
export const addBook = (payload: Book): BookAction => ({ payload, type: ADD_BOOK })
export const removeBook = (payload: string): BookAction => ({ payload, type: REMOVE_BOOK });

// reducer
const reducer = (statePart: BooksState = [], action: BookAction): BooksState => {
  switch (action.type) {
    case ADD_BOOK:
      return [ ...statePart, action.payload ];
    case REMOVE_BOOK:
      return statePart.filter((book: Book) => book.id !== action.payload);
    default:
      return statePart;
  }
}

export default reducer;