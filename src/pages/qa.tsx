import type { NextPage } from "next";
import Head from "next/head";
import { QaView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Q&A</title>
        <meta name="description" content="Q&A" />
      </Head>
      <QaView />
    </div>
  );
};

export default Home;
