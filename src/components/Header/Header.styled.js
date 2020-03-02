import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';

export const StyledLogo = styled(Link)({
  color: 'inherit',
  textDecoration: 'none'
});

export const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between'
});
