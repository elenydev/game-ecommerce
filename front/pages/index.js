
import Head from "next/head";
import React, { useEffect } from "react";
import Navigation from "../components/Navigation/index.js";
import Hero from "../components/Hero/index.js"; 
import GameTypes from '../components/GameTypes/index.js'
import Devices from "../components/Devices/index.js";
import styles from "../styles/Home.module.css";
import OurTeam from "../components/OurTeam/index.js";
import Footer from "../components/Footer/index.js";
import ContactForm from "../components/ContactForm/index.js";
import ProductsComponent from "../components/ProductsComponent/index.js";
import { useDispatch } from "react-redux";
import { setUser } from "../Reducers/userSlice.js";
import Cookies from "universal-cookie";

const Home = React.memo(({  products  }) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();

  useEffect(() => {
    const userCookie = cookies.get("User");
    if (!userCookie) {
      return;
    }
    dispatch(setUser(userCookie));
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Hero />
      <GameTypes />
      <Devices />
      <ProductsComponent products={products}/>
      <OurTeam />
      <ContactForm />
      <Footer />
    </>
  );
});

export async function getStaticProps() {
  const query = await fetch("http://localhost:8080/getProducts");
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
