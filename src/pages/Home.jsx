import { useState } from "react";
import BooksList from "../components/Books/BooksList";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import booksData from "../db/booksData";

const Home = () => {
  const [books, setBooks] = useState([...booksData]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  // handlers
  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };
  const handleSortBy = (sortBy) => {
    setSortBy(sortBy);
  };
  return (
    <>
      <Layout>
        <Hero
          onSearch={handleSearch}
          searchQuery={searchQuery}
          onSortBy={handleSortBy}
          sortBy={sortBy}
        />
        <BooksList searchQuery={searchQuery} sortBy={sortBy} books={books} />
      </Layout>
    </>
  );
};

export default Home;
