import React from "react";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Lobe Tour</title>
      </Head>
      <MainContent />
      <Footer />
    </>
  );
};

export default Home;
