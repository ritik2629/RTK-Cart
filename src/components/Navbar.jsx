import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ImCart } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state=useSelector(state=>state.cart.cart)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React-Redux
          </Typography>
          <Link to="/">
            <Button color="inherit" style={{color:"white"}}>Home</Button>
          </Link>
          <Link to='/cart'>
            <Button color="inherit" style={{color:'white'}}>
                cart : {state.length}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar