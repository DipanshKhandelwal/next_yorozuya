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

async function getData(symbol: string): Promise<number>  {
  const res = await fetch(`${KRAKEN_API_URL}?pair=${symbol.trim()}`);
  const { result } = await res.json();

  if (result) {
    const data = Object.keys(result).reduce(
        (pv, cv) => ({
            ...result[cv]
        }), {a: "Ask", b: "Bid"}
    );
    return (parseFloat(data.a[0]) + parseFloat(data.b[0])) / 2;
  }
  return 0;
}

const useFindTicker = () => {
  const [data, setData] = useState(0);

  return {
    data,
    find: async () => {
      try {
        const rate1 = await getData("SOLUSD");
        const rate2 = await getData("USDJPY");
  
        const rate = rate1 * rate2;
        setData(rate);
      } catch (e) {
        console.error(e);
      }
    }
  };
};

export default function getExchangeRate(symbol: string = "JPY/SOL") : number  {
  if (symbol != "JPY/SOL") {
    return 0;
  }

  const { data, find } = useFindTicker();
  find();
  return Math.round(data);
};
