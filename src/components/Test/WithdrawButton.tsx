import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, TextField } from '@mui/material';
import Image from 'next/image';
import { getBalance, withdraw } from 'lib/yorozu';
import { allow6DecimalPlaces, isNumeric } from 'lib/numeric';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 2,
};

const SOL_LOGO = '/../public/solana-dark.png'

export default function WithdrawButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = useState(0)

  const onWithdrawClick = () => {
    withdraw(inputValue)
    handleClose()
  }

  const onChangeInput = (e: any) => {
    if (e.target.value && isNumeric(e.target.value)) {
      setInputValue(Number(e.target.value))
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">WITHDRAW SOL</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Withdraw SOL
          </Typography>
          <Divider />
          <Typography id="modal-modal-description" >
            {`Please enter amount in SOL to withdraw.\n It will be sent to your wallet connected`}
          </Typography>
          <Box style={{ border: '1px solid grey', margin: '10px 10px 40px 10px', padding: 10 }} >
            <Box flexDirection='row' display='flex' alignItems='center' justifyContent='space-between' >
              <Box flexDirection='row' display='flex' alignItems='center' >
                <Image height="30px" width="30px" src={SOL_LOGO} />
                <Typography marginLeft={1} >SOL</Typography>
              </Box>
              <TextField
                size='small'
                placeholder="0.00"
                variant="outlined"
                id="outlined-basic"
                value={inputValue}
                onChange={onChangeInput}
              />
            </Box>
            <Typography flex={1} flexDirection='row' >
              {`Balance: ${getBalance()} SOL`}
              {' ( '}
              <span style={{ color: 'blue' }} onClick={() => setInputValue(getBalance())} >
                max
              </span>
              {' ) '}
            </Typography>
          </Box>
          <Divider />
          <Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10 }} >
            <Button onClick={onWithdrawClick} variant="outlined">WITHDRAW</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}