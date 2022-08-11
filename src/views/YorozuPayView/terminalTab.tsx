import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { HomeIcon, UserIcon } from "@heroicons/react/outline";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { getExchangeRate } from "../../lib/kraken";
import { AccountScreen } from "./accountTab";

import {
  Loader,
  SelectAndConnectWalletButton ,
  NumericTextField,
  SelectTextField,
  NumericInput,
} from "components";

import * as anchor from "@project-serum/anchor";

import { SolanaLogo } from "components";
import styles from "./index.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { bgcolor } from "@mui/system";
import { blueGrey } from "@mui/material/colors";

export const TerminalTab = () => {
  return (
    <Grid
      container
      spacing={5}
      padding={3}
      justifyContent="center"
      alignItems="top"
      display={"flex"}
    >
      <Grid
        item
        xs={5}
        display="flex"
        justifyContent="center"
        flexDirection={"row"}
      >
        <QrDisplayScreen />
      </Grid>
      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="center"
        flexDirection={"row"}
      >
        <ExecutPaymentScreen />
      </Grid>
      <Grid
        item
        xs={3}
        display="flex"
        justifyContent="center"
        flexDirection={"row"}
      >
        <RateConversionScreen />
      </Grid>
      <Grid
        item
        xs={5}
        display="flex"
        justifyContent="center"
        flexDirection={"row"}
      >
        <CancelButton />
      </Grid>
      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="center"
        flexDirection={"row"}
      >
        <ExecuteButton />
      </Grid>
      <Grid
        item
        xs={3}
        display="flex"
        justifyContent="center"
        flexDirection={"row"}
      ></Grid>
    </Grid>
  );
};

const QrDisplayScreen = () => {
  return (
    <div className="">
      Please enter the payment amount in Japanese yen and press the execute
      button.
      <br />
      <br />A QR code is displayed here.
    </div>
  );
};

const CancelButton = () => {
  return (
    <div>
      <button
        className="btn btn-primary rounded-half normal-case	px-16"
        onClick={() => {}}
      >
        Cancel
      </button>
    </div>
  );
};

const ExecuteButton = () => {
  return (
    <div>
      <button
        className="btn btn-secondary rounded-half normal-case	px-16"
        onClick={() => {}}
      >
        Execute
      </button>
    </div>
  );
};

const ExecutPaymentScreen = () => {
  return (
    <div className="">
      <NumericInput id="yen-amount" />
    </div>
  );
};

const RateConversionScreen = () => {
  const rate = getExchangeRate();
  console.log(rate);

  return (
    // <div className="p-5 flex">
      <Box
        sx={{
          bgcolor: "aliceblue",
          color: "black",
          border: 0,
          borderRadius: 2,
          px: 2,
          boxShadow: 2,
        }}
      >
        <Stack spacing={2}>
          <div className="font-bold text-gray-600 pt-3">Actual billing</div>
          <Stack
            direction="row"
            justifyContent="left"
            alignItems="center"
            display="flex"
          >
            <div
              id="sol-amount"
              className="font-bold text-xl text-red-700/75"
            >
              0.0123
            </div>
            <div className="pl-2 text-gray-600">SOL</div>
          </Stack>
          <hr />
          <div className="font-bold text-gray-600">Current exchange rate</div>
          <Stack
            direction="row"
            justifyContent="left"
            alignItems="center"
            display="flex"
          >
            <div className="pr-2 text-gray-600">1SOL =</div>
            <div
              id="current-rate"
              className="font-bold text-blue-700/75 text-xl"
            >
              {rate}
            </div>
            <div className="pl-2 text-gray-600">JPY</div>
          </Stack>
        </Stack>
      </Box>
    // </div>
  );
};