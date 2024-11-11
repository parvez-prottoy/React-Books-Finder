import { useState } from "react";
import BooksList from "../components/Books/BooksList";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import booksData from "../db/booksData";

const Home = () => {
  const [books, setBooks] = useState([...booksData]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };
  return (
    <>
      <Layout>
        <Hero onSearch={handleSearch} searchQuery={searchQuery} />
        <BooksList searchQuery={searchQuery} books={books} />
      </Layout>
    </>
  );
};

export default Home;
