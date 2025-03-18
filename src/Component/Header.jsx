import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import LoginIcon from '@mui/icons-material/Login';
import AddReactionIcon from '@mui/icons-material/AddReaction';

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold'
    ,fontFamily: 'Poppins, sans-serif'
  };
  
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1e1e1e', padding: '10px 0' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              SportsHere<span style={{ color: 'red' }}>.com</span>
            </Typography>
          </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/Contact" style={linkStyle}>Contact Us</Link>
            <Link to="/Find" style={linkStyle}>Find</Link>
            <Link to="/About" style={linkStyle}>About Us</Link>
            <Link to="/Sign-up" style={linkStyle}>Sign Up</Link>
            <Link to="/Login" style={linkStyle}>Login</Link>
          </Box>

          <IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { md: 'none' }, color: 'white' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 2 }}>Menu</Typography>
          <List>
            <ListItem button component={Link} to="/" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><HomeIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button component={Link} to="/Contact" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><ContactPhoneRoundedIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Contact us" />
            </ListItem>

            <ListItem button component={Link} to="/Find" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><SearchOutlinedIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Find" />
            </ListItem>

            <ListItem button component={Link} to="/About" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><Diversity3SharpIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="About-us" />
            </ListItem>

            <ListItem button component={Link} to="/Sign-up" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><AddReactionIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Sign up" />
            </ListItem>

            <ListItem button component={Link} to="/Login" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><LoginIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box>
        <img src="" alt="" />
      </Box>
    </>
  );
}

