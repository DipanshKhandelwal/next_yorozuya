import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { BootstrapDialog, BootstrapDialogTitle } from "./BootstrapDialog";
import { updateAccountName } from "lib/yorozu";
import { isNumeric } from "lib/numeric";

export const UpdateDialog = () => {
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
        Update
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
          Update the account name
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Just an example. Please delete this text.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {}}>
            Update
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
