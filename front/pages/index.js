import Head from "next/head";
import React, { useEffect } from "react";
import useCookie from "../hooks/useCookie";
import useAuth from "../hooks/useAuth.js";

import Navigation from "../components/Navigation/index.js";
import Hero from "../components/Hero/index.js";
import GameTypes from "../components/GameTypes/index.js";
import Devices from "../components/Devices/index.js";
const OurTeam = React.lazy(() => import("../components/OurTeam/index.js"));
const Footer = React.lazy(() => import("../components/Footer/index.js"));
const ContactForm = React.lazy(() =>
  import("../components/ContactForm/index.js")
);
const ProductsComponent = React.lazy(() =>
  import("../components/ProductsComponent/index.js")
);

const Home = React.memo(({ products }) => {
  const { setCurrentUser } = useAuth();
  const { userCookie } = useCookie();

  useEffect(() => {
    if (!userCookie) {
      return;
    }
    setCurrentUser(userCookie);
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

export async function getStaticProps() {
  const query = await fetch(
    "https://online-gaming-shop.herokuapp.com/getProducts"
  );

  const response = await query.json();
  const products = response.products ? response.products : [];

  return {
    props: {
      products,
    },
    revalidate: 2,
  };
}

export default Home;
