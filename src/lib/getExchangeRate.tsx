import { useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-fetch";

const KRAKEN_API_URL = "https://api.kraken.com/0/public/Ticker";

const KRAKEN_DATA_LABELS = Object.freeze({
  a: "Ask",
  b: "Bid",
  c: "Last Trade Closed",
  v: "Volume",
  l: "Low",
  h: "High",
  o: "Today Opening Price"
});

const useFindTicker = () => {
  // Holds value for search form
  const [symbol, setSymbol] = useState("USDJPY");

  // Holds data value of cryptocurrency market data
  const [data, setData] = useState({a: "Ask", b: "Bid"});

  // Holds error messages from KRAKEN API
  const [error, setError] = useState(null);

  return {
    data,
    error,
    find: async () => {
      try {
        // No need to make a request if symbol value is empty.
        if (symbol.trim().length < 1) {
          console.log("Symbol is empty");
          return;
        }

        // Fetch ticker data from Kraken API
        const res = await fetch(`${KRAKEN_API_URL}?pair=${symbol.trim()}`);
        const { error, result } = await res.json();

        // IF any errors, set error to state
        if (error.length > 0) {
          setError(error);
          return;
        }

        console.log("result = ", result);

        if (result) {
            const x = Object.keys(result).reduce(
                (pv, cv) => ({
                    ...result[cv]
                }), {a: "Ask", b: "Bid"}
            );
            setData(x);
            console.log(data.a[0]);
            console.log(data.b[0]);
            const rate = (parseFloat(data.a[0]) + parseFloat(data.b[0])) / 2;
            console.log(rate);

        }

        // // Set ticker data to state
        // setData(
        //   Object.keys(result).reduce(
        //     (pv, cv) => ({
        //       ...result[cv]
        //     }),
        //     {}
        //   )
        // );
        // if (data) {
        //   console.log(data);
        //   console.log(data.b[0]);
        //   const rate = (parseFloat(data.a[0]) + parseFloat(data.b[0])) / 2;
        //   console.log(rate);
        // }
        return;
      } catch (e) {
        console.error(e);
      }
    }
  };
};

export default function getExchangeRate() : number  {
  const { data, error, find } = useFindTicker();

  find();
  
  console.log("getExchangeRate");

  return 0;
};
