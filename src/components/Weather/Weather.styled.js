import { styled } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

export const StyledDiv = styled('div')({
  position: 'relative',
  height: '224px',
  overflowY: 'auto'
});

export const StyledSpinner = styled(CircularProgress)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: '-20px 0 0 -20px'
});
