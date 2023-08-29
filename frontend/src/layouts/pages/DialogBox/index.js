// import React from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Modal, Typography } from '@mui/material';
import './style.css';

const index = ({open}) => {
    const navigate = useNavigate();

       const handleClose = () => {
        navigate("/informed-consent")
      }

    return (
        <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle className='titleNote' id="alert-dialog-title">{"Note"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className='titleNote'>
              Your Inform Consent is under Review. Please Kindly Contact Administration.
            </DialogContentText>
          </DialogContent>
          <DialogActions className='noteButtonParent'>
            <Button
            onClick={handleClose}
            className='noteButtonChild'
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      );
}

index.propTypes = {
    open: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  };

export default index