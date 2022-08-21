import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, TextField } from '@mui/material';
import { YorozuAccount } from 'lib/yorozu';

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

  const [inputValue, setInputValue] = React.useState('')
  const [account, setAccount] = React.useState<YorozuAccount | null>(null);

  React.useEffect(() => {
    const account = new YorozuAccount()
    setAccount(account);
    setInputValue(account.get())
  }, [])

  const onUpdateClicked = () => {
    account?.update()
    handleClose()
  }

  const onInputChange = (e) => {
    setInputValue(e.target.value)
    account?.set(e.target.value)
  }

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
            <TextField value={inputValue} onChange={onInputChange} size='small' id="outlined-basic" variant="outlined" />
          </Box>
          <Divider />
          <Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10 }} >
            <Button onClick={onUpdateClicked} variant="outlined">UPDATE</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}