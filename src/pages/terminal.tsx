import type { NextPage } from "next";
import Head from "next/head";
import { TerminalView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Payment Terminal</title>
        <meta name="description" content="Payment Terminal" />
      </Head>
      <TerminalView />
    </div>
  );
};

export default Home;
