import { filterBySearch } from "../../utils/filterBySearch";
import BookNotFound from "../UI/BookNotFound";
import BookItem from "./BookItem";

const BooksList = ({ searchQuery, books }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Book Item */}
      {books.filter((book) => filterBySearch(book, searchQuery)).length > 0 ? (
        books
          .filter((book) => filterBySearch(book, searchQuery))
          .map((book) => <BookItem key={book.id} book={book} />)
      ) : (
        <BookNotFound />
      )}
    </div>
  );
};

export default BooksList;
