import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { getExchangeRate } from "../../lib/kraken";

import {
  Loader,
  SelectAndConnectWalletButton ,
  NumericTextField,
  SelectTextField,
  NumericInput,
} from "components";

import { SolanaLogo } from "components";
import styles from "./index.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { bgcolor } from "@mui/system";
import { blueGrey } from "@mui/material/colors";
import { WithdrawDialog } from "./WithdrawDialog";

export const AccountTab = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Stack padding={2} spacing={2} direction="row">
      <WithdrawDialog/>

  </Stack>
    // <Box
    //   sx={{
    //     bgcolor: "aliceblue",
    //     color: "black",
    //     border: 0,
    //     borderRadius: 2,
    //     px: 2,
    //     boxShadow: 2,
    //     width: 420,
    //     // height: 200,
    //   }}
    // >
    //   <Grid
    //     container
    //     spacing={3}
    //     justifyContent="center"
    //     alignItems="center"
    //     display={"flex"}
    //     flexDirection={"row"}
    //     alignContent="center"
    //   >
    //     <Grid
    //       item
    //       xs={4}
    //       display="flex"
    //       justifyContent="start"
    //       alignItems="center"
    //       alignContent="center"
    //     >
    //       <Stack direction="row" spacing={1}>
    //         <img src="/solana-dark.png" width={32} />
    //         <div>SOL</div>{" "}
    //       </Stack>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <Stack direction="row" spacing={1}>
    //         <div>Balance</div>
    //         <div className="pl-3">0.00001</div>{" "}
    //       </Stack>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <hr />
    //     </Grid>

    //     <Grid
    //       item
    //       xs={4}
    //       display="flex"
    //       justifyContent="start"
    //       alignItems="center"
    //       alignContent="center"
    //     >
    //       <Stack direction="row" spacing={1}>
    //         <img src="/mSOL.svg" width={32} />
    //         <div>mSOL</div>{" "}
    //       </Stack>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <Stack direction="row" spacing={1}>
    //         <div>Balance</div>
    //         <div className="pl-3">0.00001</div>{" "}
    //       </Stack>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <hr />
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};
