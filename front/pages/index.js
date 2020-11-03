import Head from "next/head";
import Navigation from "../components/Navigation/index.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Navigation />
      </body>
    </>
  );
}
