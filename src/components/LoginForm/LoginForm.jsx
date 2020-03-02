import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, CircularProgress } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Alert from '@material-ui/lab/Alert';

const LoginForm = ({
  values,
  passwordVisibility,
  onPasswordVisibilityClick,
  onFormSubmit,
  onInputChange
}) => {

  const state = useSelector(state => ({
    loading: state.auth.loading,
    error: state.auth.error
  }));

  return (
    <form onSubmit={onFormSubmit}>
      <Typography variant="h5" component="h2" align="center" gutterBottom>Login</Typography>
      {state.error && <Alert severity="error">{state.error.message}</Alert>}
      <TextField type="email" label="Email" variant="outlined" margin="normal" name="email" value={values.email} onChange={onInputChange} fullWidth required />
      <FormControl variant="outlined" margin="normal" required fullWidth>
        <InputLabel htmlFor="user-password">Password</InputLabel>
        <OutlinedInput
          id="user-password"
          type={passwordVisibility ? 'text' : 'password'}
          value={values.password}
          onChange={onInputChange}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={onPasswordVisibilityClick}
              >
                {passwordVisibility ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={85}
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary" margin="normal" disabled={state.loading} fullWidth>
        {state.loading ? <CircularProgress size={24}/> : 'Login'}
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  values: PropTypes.object.isRequired,
  passwordVisibility: PropTypes.bool.isRequired,
  onPasswordVisibilityClick: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

export default LoginForm;
