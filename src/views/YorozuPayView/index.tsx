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
import getExchangeRate from "../../lib/getExchangeRate";

import {
  Loader,
  SelectAndConnectWalletButton,
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

const endpoint = "https://explorer-api.devnet.solana.com";
const connection = new anchor.web3.Connection(endpoint);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const YorozuPayView: FC = ({}) => {
  const [isAirDropped, setIsAirDropped] = useState(false);
  const wallet = useAnchorWallet();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="container mx-auto max-w-6xl px-0">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Payment Terminal" {...a11yProps(0)} />
            <Tab label="Yorozu Account" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TerminalScreen />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AccountScreen />
        </TabPanel>
      </Box>
    </div>
  );
};

const TerminalScreen = () => {
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
          bgcolor: "ghostwhite",
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
              className="font-bold text-xl text-red-700 opacity-75"
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
              className="font-bold text-blue-700 text-xl opacity-75"
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
const AccountScreen = () => {
  return (
    <Box
      sx={{
        bgcolor: "aliceblue",
        color: "black",
        border: 0,
        borderRadius: 2,
        px: 2,
        boxShadow: 2,
        width: 420,
        // height: 200,
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        display={"flex"}
        flexDirection={"row"}
        alignContent="center"
      >
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="start"
          alignItems="center"
          alignContent="center"
        >
          <Stack direction="row" spacing={1}>
            <img src="/solana-dark.png" width={32} />
            <div>SOL</div>{" "}
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Stack direction="row" spacing={1}>
            <div>Balance</div>
            <div className="pl-3">0.00001</div>{" "}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>

        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="start"
          alignItems="center"
          alignContent="center"
        >
          <Stack direction="row" spacing={1}>
            <img src="/mSOL.svg" width={32} />
            <div>mSOL</div>{" "}
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Stack direction="row" spacing={1}>
            <div>Balance</div>
            <div className="pl-3">0.00001</div>{" "}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
      </Grid>
    </Box>
  );
};
