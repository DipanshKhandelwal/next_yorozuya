import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, TextField } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 2,
};

export default function UpdateButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">UPDATE</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update the account setting
          </Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Typography id="modal-modal-description" >
            Please update the fields you want you want to change.
          </Typography>
          <Box my={4}  >
            <Typography>Account Name:</Typography>
            <TextField size='small' id="outlined-basic" variant="outlined" />
          </Box>
          <Divider />
          <Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10 }} >
            <Button variant="outlined">UPDATE</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}