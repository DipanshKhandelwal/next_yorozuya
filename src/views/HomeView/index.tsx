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

export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();
  console.log("publicKey = ", publicKey);

  const onClick = () => {};
  const [buttonText, setButtonText] = useState("Next");

  return (
    <div className="container mx-auto max-w-6xl px-0">
      <div className="hero min-h-16 pb-10 pt-3">
        <div className="text-center">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold">
              {!publicKey ? <>Welcome to Crypto Yorozuya!</> : null}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-5">
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="center"
          display={"flex"}
        >
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <Stack>
              <Box
                sx={{
                  bgcolor: "aliceblue",
                  color: "black",
                  border: 0,
                  borderRadius: 2,
                  px: 2,
                  boxShadow: 2,
                  width: 240,
                  height: 240,
                }}
              >
                <div className="p-0 hero">
                  <img src="https://www2.cloud-pay.jp/contents/themes/cloudpay-default/assets/images/feature03.png" />
                </div>
                <div className="pb-3 text-md font-bold opacity-60">
                  Extremely cheap fee
                </div>
              </Box>
              <Box
                sx={{
                  border: 0,
                  width: 240,
                }}
              >
              <div className="p-3 text-sm opacity-80">
                It consts only 0.5% for each payment.
              </div>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <Stack>
              <Box
                sx={{
                  bgcolor: "aliceblue",
                  color: "black",
                  border: 0,
                  borderRadius: 2,
                  px: 2,
                  boxShadow: 2,
                  width: 240,
                  height: 240,
                }}
              >
                <div className="p-0 hero">
                  <img src="https://www2.cloud-pay.jp/contents/themes/cloudpay-default/assets/images/feature03.png" />
                </div>
                <div className="pb-3 text-md font-bold opacity-60">
                  No monthly fee
                </div>
              </Box>
              <Box
                sx={{
                  border: 0,
                  width: 240,
                }}
              >
              <div className="p-3 text-sm opacity-80">
                No montyly fee is chared.
              </div>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <Stack>
              <Box
                sx={{
                  bgcolor: "aliceblue",
                  color: "black",
                  border: 0,
                  borderRadius: 2,
                  px: 2,
                  boxShadow: 2,
                  width: 240,
                  height: 240,
                }}
              >
                <div className="pt-0 hero">
                  <img src="https://www2.cloud-pay.jp/contents/themes/cloudpay-default/assets/images/feature03.png" />
                </div>
                <div className="pb-3 text-md font-bold opacity-60">
                  The initial cost is only 0.01 SOL
                </div>
              </Box>
              <Box
                sx={{
                  border: 0,
                  width: 240,
                }}
              >
              <div className="p-3 text-sm opacity-80">
                It consts only 0.01 SOL to start the service.
              </div>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <Stack>
              <Box
                sx={{
                  bgcolor: "aliceblue",
                  color: "black",
                  border: 0,
                  borderRadius: 2,
                  px: 2,
                  boxShadow: 2,
                  width: 240,
                  height: 240,
                }}
              >
                <div className="pt-0 hero">
                  <img src="https://www2.cloud-pay.jp/contents/themes/cloudpay-default/assets/images/feature02.png" />
                </div>
                <div className="pb-3 text-md font-bold opacity-60">
                  No contract or registration
                </div>
              </Box>
              <Box
                sx={{
                  border: 0,
                  width: 240,
                }}
              >
              <div className="p-3 text-sm opacity-80">
                Just connect your wallet. That's all you have to start the
                service.
              </div>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
          >
            <Stack>
              <Box
                sx={{
                  bgcolor: "aliceblue",
                  color: "black",
                  border: 0,
                  borderRadius: 2,
                  px: 2,
                  boxShadow: 2,
                  width: 240,
                  height: 240,
                }}
              >
                <div className="pt-0 hero">
                  <img src="https://cdn1.iconfinder.com/data/icons/cryptocurrency-and-blockchain-banking-2/567/Blockchain_and_Crypto_-15-512.png" />
                </div>
                <div className="pb-3 text-md font-bold opacity-60">
                  Transaparent transaction
                </div>
              </Box>
              <Box
                sx={{
                  border: 0,
                  width: 240,
                }}
              >
              <div className="p-3 text-sm opacity-80">
                All transacions are saved on the public blockchain.
              </div>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <br />
        <br />
      </div>
    </div>
  );
};
