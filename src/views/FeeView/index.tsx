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

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(operation: string, fee: string, description: string) {
  return { operation, fee, description };
}

const feeRows = [
  createData(
    "Create a Yorozu account",
    "0.01 SOL",
    "Flat fee to create a new yorozu account."
  ),
  createData(
    "Withdraw",
    "0.5%",
    "Paid by the merchant when collecting the sales from the Yorozu account."
  ),
];

const gasRows = [
  createData(
    "Create a Yorozu account",
    "0.000005 SOL",
    "Payed by the merchant"
  ),
  createData(
    "Withdraw",
    "0.000005 SOL",
    "Payed by the merchant"
  ),
  createData(
    "Payment",
    "0.000005 SOL",
    "Payed by the buyer"
  ),
];

export const FeeView: FC = ({}) => {
  return (
    <div className="container mx-auto max-w-6xl px-5">
      <div>
        Certain operations of the Yorozu service have an associated fee as
        described below.
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{  }}>
          <TableHead>
            <TableRow>
              <TableCell>Operation</TableCell>
              <TableCell align="left">Fee Amount</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feeRows.map((row) => (
              <TableRow
                key={row.operation}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.operation}
                </TableCell>
                <TableCell align="left">{row.fee}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <div>
      The following operations have an associated gas fee (on average) on the Solana
        blockchain.
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{  }}>
          <TableHead>
            <TableRow>
              <TableCell>Operation</TableCell>
              <TableCell align="left">Fee Amount</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gasRows.map((row) => (
              <TableRow
                key={row.operation}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.operation}
                </TableCell>
                <TableCell align="left">{row.fee}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
