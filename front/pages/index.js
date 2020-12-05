import Head from "next/head";
import React, { useEffect } from "react"
import useAuth from "../hooks/useAuth.js";

import Navigation from "../components/Navigation/index.js";
import Hero from "../components/Hero/index.js";
import GameTypes from "../components/GameTypes/index.js";
import Devices from "../components/Devices/index.js";
import OurTeam from "../components/OurTeam/index.js";
import Footer from "../components/Footer/index.js";
import ContactForm from "../components/ContactForm/index.js";
import ProductsComponent from "../components/ProductsComponent/index.js";
import { ENDPOINT_URL } from "../constants";

const Home = React.memo(({ products }) => {
  const { setCurrentUser, userCookie } = useAuth()

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (!userCookie) {
        return;
      }
      setCurrentUser(userCookie);
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Online Gaming</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navigation />
      <Hero />
      <GameTypes />
      <Devices />
      <ProductsComponent products={products} />
      <OurTeam />
      <ContactForm />
      <Footer />
    </>
  );
});

export async function getServerSideProps() {
  const query = await fetch(`${ENDPOINT_URL}/products/all`);
  const response = await query.json();
  const products = response.products ? response.products : [];

  return {
    props: {
      products,
    },
  };
}

export default Home;
