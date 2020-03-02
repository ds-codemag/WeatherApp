import React from 'react';
import Container from '@material-ui/core/Container';
import LoginFormContainer from '../components/containers/LoginFormContainer';

const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <LoginFormContainer />
    </Container>
  );
};

export default LoginPage;
