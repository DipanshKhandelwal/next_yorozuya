import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Yorozuya Home</title>
        <meta
          name="description"
          content="Yorozuya Home"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
