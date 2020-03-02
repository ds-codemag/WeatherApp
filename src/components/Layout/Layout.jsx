import React from 'react';
import Header from '../Header';
import RouterOutlet from '../RouterOutlet';
import { StyledBox } from './Layout.styled';

const Layout = () => (
  <div>
    <Header />

    <StyledBox component="main" >
      <RouterOutlet/>
    </StyledBox>
  </div>
);

export default Layout;
