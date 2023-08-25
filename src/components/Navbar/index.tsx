import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Avatar, Button, styled, Toolbar, AppBar } from '@mui/material';

const menuPages = ['home', 'about', 'contact'];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: '#99582a' }}>
        <Avatar component={Link} to="/" alt="Logo" src="/logo.svg" />
        <StyledDiv>
          {menuPages.map((page) => {
            const link = '/' + page;
            return (
              <Button
                component={Link}
                to={link}
                key={page}
                disableElevation={true}
                sx={{ color: 'white', fontWeight: 'bolder' }}
              >
                {page}
              </Button>
            );
          })}
        </StyledDiv>

        <Outlet />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

const StyledDiv = styled('div')({
  marginLeft: 10,
  marginRight: 5,
  display: 'flex',
  alignItems: 'center',
});
