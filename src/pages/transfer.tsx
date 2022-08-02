import type { NextPage } from "next";
import Head from "next/head";
import { TransferView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Transfer coins</title>
        <meta name="description" content="Transfer coins" />
      </Head>
      <TransferView />
    </div>
  );
};

export default Home;
