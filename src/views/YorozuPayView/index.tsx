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
import Button from '@mui/material/Button';
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
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
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

  const a = getExchangeRate();

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
            <Tab label="Stake Solana" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TerminalScreen />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AccountScreen />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StakeScreen />
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
  return <div className="">Please enter the payment amount in Japanese yen and press the execute button.<br/><br/>A QR code is displayed here.</div>;
};

const CancelButton = () => {
  return (
    <div>
      <button
        className="btn btn-secondary rounded-half normal-case	px-16"
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
  return (
    <div className="p-5 flex">
      <Stack spacing={2}>
      <div className="">Actual billing</div>
      <Stack direction="row" justifyContent="left" alignItems="center" display="flex">
      <div id="sol-amount" className="font-bold text-xl opacity-75">0.0123</div>
      <div className="pl-2">SOL</div>
      </Stack>
      <hr/>
      <div className="">Current exchange rate</div>
      <Stack direction="row" justifyContent="left" alignItems="center" display="flex">
      <div id="current-rate" className="font-bold text-xl opacity-75">40.123</div>
      <div className="pl-2">JPY/SOL</div>
      </Stack>
      </Stack>
    </div>
  );
};
const AccountScreen = () => {
  return <div>Account Screen</div>;
};

const StakeScreen = () => {
  return <div>Stake Screen</div>;
};
