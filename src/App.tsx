import React from 'react';
import { AppBar, Button, Typography, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';

const HeaderLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EtherWallet+
          </Typography>
          <Button color='inherit' href='/signin'>Login</Button>
          <Button color='inherit' href='/signup'>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


const App = () => {
  return (
    <Router>
      <HeaderLayout />
      <Box sx={{ mt: 8, ml: 'auto', mr: 'auto' }}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
        </Routes >
      </Box>
    </Router>
  );
}

export default App;
