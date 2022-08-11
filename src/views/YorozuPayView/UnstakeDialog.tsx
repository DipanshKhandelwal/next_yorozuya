import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { BootstrapDialog, BootstrapDialogTitle } from "./BootstrapDialog";
import { stake } from "lib/marinade";
import { isNumeric } from "lib/numeric";

export const UnstakeDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Unstake
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Unstake SOL
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Please use this icon.
            <img src="/mSOL.svg" width={32} />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {}}>
            Unstake
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
