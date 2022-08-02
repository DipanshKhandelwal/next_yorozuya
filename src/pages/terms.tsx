import type { NextPage } from "next";
import Head from "next/head";
import { TermsOfUseView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Terms Of Use</title>
        <meta name="description" content="Terms Of Use" />
      </Head>
      <TermsOfUseView />
    </div>
  );
};

export default Home;
