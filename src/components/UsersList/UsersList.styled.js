import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)({
  display: 'block',
  margin: '-16px',
  padding: '16px',
  color: 'inherit',
  textDecoration: 'none',
  transition: 'opacity .3s',

  '&:hover': {
    opacity: .5
  }
});
