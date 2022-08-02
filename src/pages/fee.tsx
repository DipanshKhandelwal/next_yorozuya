import type { NextPage } from "next";
import Head from "next/head";
import { FeeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Fee</title>
        <meta name="description" content="Fee" />
      </Head>
      <FeeView />
    </div>
  );
};

export default Home;
