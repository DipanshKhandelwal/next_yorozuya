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
    find: async (): Promise<number> => {
      try {

        // Fetch ticker data from Kraken API
        const res = await fetch(`${KRAKEN_API_URL}?pair=${symbol.trim()}`);
        const { result } = await res.json();


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
        return 0;
      } catch (e) {
        console.error(e);
      }
      return 0;
    }
  };
};

export default function getExchangeRate() : number  {
  const { data, error, find } = useFindTicker();

  const ret = find();
  
  console.log("getExchangeRate");

  return 0;
};
