import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { StyledLogo, StyledToolbar } from './Header.styled';
import UserMenuContainer from '../containers/UserMenuContainer';

const Header = () => (
  <AppBar>
    <StyledToolbar>
      <StyledLogo to="/">
        <Typography variant="h6" component="h1">Weather App</Typography>
      </StyledLogo>
      <UserMenuContainer />
    </StyledToolbar>
  </AppBar>
);

export default Header;
