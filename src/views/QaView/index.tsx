import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { HomeIcon, UserIcon } from "@heroicons/react/outline";
import orderBy from "lodash.orderby";

import { Loader, SelectAndConnectWalletButton } from "components";
import * as anchor from "@project-serum/anchor";

import { SolanaLogo } from "components";
import styles from "./index.module.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const endpoint = "https://explorer-api.devnet.solana.com";

const connection = new anchor.web3.Connection(endpoint);

export const QaView: FC = ({}) => {
  return (
    <div className="container mx-auto max-w-6xl px-5">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is the transaction fee so cheap?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Because bra bra...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How can the service distinguish users even without any registration?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Because bra bra...</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
