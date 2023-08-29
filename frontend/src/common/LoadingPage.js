import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const LoadingPage = () => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

  return (
    <div>
        <Backdrop
            sx={{ color: '#fff',display : "flex",alignItems : "center",justifyContent : "center",flexDirection : "column",gap : 2, zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            // onClick={handleClose}
            >
            <CircularProgress color="inherit"  /> 
            <h4>Please wait...</h4>
        </Backdrop>
    </div>
  )
}

export default LoadingPage;