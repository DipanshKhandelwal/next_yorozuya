import type { NextPage } from "next";
import Head from "next/head";
import { YorozuPayView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Yorozu Pay</title>
        <meta name="description" content="Yorozu Pay" />
      </Head>
      <YorozuPayView />
    </div>
  );
};

export default Home;
