import { useState } from "react";
import BooksList from "../components/Books/BooksList";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import booksData from "../db/booksData";

const Home = () => {
  const [books, setBooks] = useState([...booksData]);
  return (
    <>
      <Layout>
        <Hero />
        <BooksList books={books} />
      </Layout>
    </>
  );
};

export default Home;
