import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Avatar, Button, styled, Toolbar, AppBar, Container } from '@mui/material';

const menuPages = ['home', 'about', 'contact'];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Avatar component={Link} to="/" alt="Logo" src="/vite.svg" />
          <StyledDiv>
            {menuPages.map((page) => {
              const link = '/' + page;
              return (
                <Button
                  component={Link}
                  to={link}
                  key={page}
                  disableElevation={true}
                  sx={{ color: 'white', maxWidth: '40px' }}
                >
                  {page}
                </Button>
              );
            })}
          </StyledDiv>

          <Outlet />
        </Toolbar>
      </Container>
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
