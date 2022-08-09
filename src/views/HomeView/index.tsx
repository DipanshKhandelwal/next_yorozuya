import Link from "next/link";
import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";
import styles from "./index.module.css";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { stubTrue } from "lodash";

type Props = {
  url?: string;
  title: string;
  description?: string;
};

export const PanelBox: FC<Props> = ({ url, title, description }) => {
  return (
    <Stack>
      <Box
        sx={{
          bgcolor: "aliceblue",
          color: "black",
          border: 0,
          borderRadius: 2,
          px: 2,
          boxShadow: 2,
          width: 160,
          height: 200,
        }}
      >
        <div className="p-0 hero">
          <img src={url} />
        </div>
        <div className="pb-3 text-md font-bold opacity-60">{title}</div>
      </Box>
      <Box
        sx={{
          border: 0,
          width: 180,
        }}
      >
        <div className="p-3 text-sm opacity-80">{description}</div>
      </Box>
    </Stack>
  );
};

export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();
  console.log("publicKey = ", publicKey);

  const onClick = () => {};
  const [buttonText, setButtonText] = useState("Next");

  return (
    <div className="container mx-auto max-w-6xl px-0">
      <div className="hero min-h-16 pb-5">
        <div className="text-center">
          <div className="max-w-2xl text-2xl opacity-80">
          Yorozu Pay is a service that allows you to make payments using cryptocurrencies by scanning a QR code.
            {/* <h1 className="text-3xl font-bold">
              {!publicKey ? <>Welcome to Crypto Yorozuya!</> : null}
            </h1> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
      <div className="font-bold text-2xl opacity-80 pb-8 pt-3 text-center">Features of "Yorozu Pay"</div>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="top"
          display={"flex"}
        >
          <Grid
            item
            md={2}
            sm={6}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <PanelBox
              url="https://www2.cloud-pay.jp/contents/themes/cloudpay-default/assets/images/feature03.png"
              title="Extremely cheap fee"
              description="It consts only 0.5% for each payment."
            />
          </Grid>
          {/* <Grid
            item
            md={2}
            sm={6}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <PanelBox
              url="https://www2.cloud-pay.jp/contents/themes/cloudpay-default/assets/images/feature03.png"
              title="No monthly fee"
              description="No montyly fee is chared."
            />
          </Grid> */}
          <Grid
            item
            md={2}
            sm={6}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <PanelBox
              url="https://www2.cloud-pay.jp/contents/themes/cloudpay-default/assets/images/feature03.png"
              title="Low cost"
              description="It consts only 0.01 SOL to start the service. No monthly fee."
            />
          </Grid>
          <Grid
            item
            md={2}
            sm={6}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <PanelBox
              url="https://www2.cloud-pay.jp/contents/themes/cloudpay-default/assets/images/feature02.png"
              title="No contract or registration"
              description=" Just connect your wallet. That's all you have to start the
              service."
            />
          </Grid>
          <Grid
            item
            md={2}
            sm={6}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <PanelBox
              url="https://cdn1.iconfinder.com/data/icons/cryptocurrency-and-blockchain-banking-2/567/Blockchain_and_Crypto_-15-512.png"
              title="Transaparent transaction"
              description="All transacions are saved on the public blockchain."
            />
          </Grid>
          <Grid
            item
            md={2}
            sm={6}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <PanelBox
              url="https://www.silhouette-illust.com/wp-content/uploads/2016/10/14474-300x300.jpg"
              title="compound interest rate"
              description="Get high interest rates by staking received SOL."
            />
          </Grid>
        </Grid>
        <br />
        <br />
      </div>
    </div>
  );
};
