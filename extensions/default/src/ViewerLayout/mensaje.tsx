import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

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
        <DialogTitle>{'Aviso!!!'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            La visualizacion de este estudio requiere de una pantalla que debe cumplir requisitos
            medicos, ¿Desea continuar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Salir</Button>
          <Button onClick={handleClose}>Continuar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Mensaje;
