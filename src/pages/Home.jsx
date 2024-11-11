import BooksList from "../components/Books/BooksList";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <BooksList />
      </Layout>
    </>
  );
};

export default Home;
