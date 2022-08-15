import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, TextField } from '@mui/material';
import Image from 'next/image';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 2,
  width: 500,
};

const SOL_LOGO = '/../public/solana-dark.png'
const MSOL_LOGO = '/mSOL.svg'

export default function UnstakeButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">UNSTAKE</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Unstake SOL
          </Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Typography id="modal-modal-description" >
            Please enter amount in mSOL to unstake
          </Typography>
          <Box style={{ border: '1px solid grey', margin: '5px 10px 10px 10px', padding: 10 }} >
            <Box flexDirection='row' display='flex' alignItems='center' justifyContent='space-between' >
              <Box flexDirection='row' display='flex' alignItems='center' >
                <Image height="32px" width="32px" src={MSOL_LOGO} />
                <Typography marginLeft={1}>mSOL</Typography>
              </Box>
              <TextField placeholder="0.00" size='small' id="outlined-basic" variant="outlined" />
            </Box>
            Balance: 1.234 SOL ( max )
          </Box>
          <Typography id="modal-modal-description" >
            You will receive
          </Typography>
          <Box style={{ border: '1px solid grey', margin: '10px 10px 10px 10px', padding: 10 }} >
            <Box flexDirection='row' display='flex' alignItems='center' justifyContent='space-between' >
              <Box flexDirection='row' display='flex' alignItems='center' >
                <Image height="30px" width="30px" src={SOL_LOGO} />
                <Typography marginLeft={1}>SOL</Typography>
              </Box>
              <TextField placeholder="0.00" size='small' id="outlined-basic" variant="outlined" />
            </Box>
            Balance: 1.234 SOL
          </Box>
          <Box >
            <Box my={1} display='flex' flexDirection='row' justifyContent='space-between' >
              <Typography>Exchange Rate</Typography>
              <Typography>1 mSOL = 1.05879 SOL</Typography>
            </Box>
            <Box my={1} display='flex' flexDirection='row' justifyContent='space-between' >
              <Typography>Projected APY</Typography>
              <Typography>5.67%</Typography>
            </Box>
          </Box>
          <Divider style={{ padding: '10px 0 20px 0' }} />
          <Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10 }} >
            <Button variant="outlined">UNSTAKE</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}