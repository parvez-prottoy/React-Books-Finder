import { filterBySearch } from "../../utils/filterBySearch";
import { sortByNameYear } from "../../utils/sortByNameYear";
import BookNotFound from "../UI/BookNotFound";
import BookItem from "./BookItem";

const BooksList = ({ searchQuery, books, sortBy }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Book Item */}
      {books.filter((book) => filterBySearch(book, searchQuery)).length > 0 ? (
        books
          .filter((book) => filterBySearch(book, searchQuery))
          .sort((a, b) => sortByNameYear(a, b, sortBy))
          .map((book) => <BookItem key={book.id} book={book} />)
      ) : (
        <BookNotFound />
      )}
    </div>
  );
};

export default BooksList;
