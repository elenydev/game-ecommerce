
import Head from "next/head";
import Navigation from "../components/Navigation/index.js";
import Hero from "../components/Hero/index.js"; 
import GameTypes from '../components/GameTypes/index.js'
import Devices from "../components/Devices/index.js";
import styles from "../styles/Home.module.css";
import OurTeam from "../components/OurTeam/index.js";
import Footer from "../components/Footer/index.js";
import ContactForm from "../components/ContactForm/index.js";
import ProductsComponent from "../components/ProductsComponent/index.js";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navigation />
      <Hero />
      <GameTypes />
      <Devices />
      <ProductsComponent />
      <OurTeam />
      <ContactForm />
      <Footer />
    </>
  );
}
