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
import { AccountTab } from "./accountTab";
import { TerminalTab } from "./terminalTab";

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
          <TerminalTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AccountTab />
        </TabPanel>
      </Box>
    </div>
  );
};