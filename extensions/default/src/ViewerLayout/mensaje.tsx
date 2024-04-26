import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="down"
      ref={ref}
      {...props}
    />
  );
});

function Mensaje() {
  const [open, setOpen] = useState(false);

  const mql = window.matchMedia('(min-width:1024px)');
  let MobileVewi = mql.matches;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExit = () => {
    window.location.href = 'https://blog.diagnocons.com';
  };

  useEffect(() => {
    console.log(MobileVewi);
    if (!MobileVewi) {
      handleClickOpen();
    }
  }, []);
  return (
    <div>
      <Dialog
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Stack
              sx={{ width: '100%' }}
              spacing={2}
            >
              <Alert severity="warning">
                Recomendamos que las imágenes de este estudio se vean en una computadora para no
                perder su alta calidad.
              </Alert>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleExit}>Salir</Button>
          <Button onClick={handleClose}>Continuar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Mensaje;
