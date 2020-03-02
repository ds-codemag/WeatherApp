import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Grid, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, CircularProgress } from '@material-ui/core';
import { Visibility, VisibilityOff, Refresh } from '@material-ui/icons';
import { StyledAlert, StyledSubmit } from './UserForm.styled';

const UserForm = ({
  values,
  passwordVisibility,
  onPasswordVisibilityClick,
  onInputChange,
  onFormSubmit,
  onGeneratePswButtonClick
}) => {

  const state = useSelector(state => ({
    loading: state.user.loading,
    error: state.user.error
  }));

  return (
    <form onSubmit={onFormSubmit}>
      {state.error && <StyledAlert severity="error">{state.error.message}</StyledAlert>}
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <TextField type="text" label="First Name" variant="outlined" margin="none" name="firstName" value={values.firstName} onChange={onInputChange} fullWidth required />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField type="text" label="Last Name" variant="outlined" margin="none" name="lastName" value={values.lastName} onChange={onInputChange} fullWidth required />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField type="text" label="City" variant="outlined" margin="none" name="city" value={values.city} onChange={onInputChange} fullWidth required />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField type="text" label="Country" variant="outlined" margin="none" name="country" value={values.country} onChange={onInputChange} fullWidth required />
        </Grid>

        <Grid item xs={12}>
          <TextField type="email" label="Email" variant="outlined" margin="none" name="email" value={values.email} onChange={onInputChange} fullWidth required />
        </Grid>

        <Grid item xs={12}>
          <FormControl variant="outlined" margin="none" fullWidth required>
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
                  <IconButton onClick={onGeneratePswButtonClick}>
                    <Refresh />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={85}
            />
          </FormControl>
        </Grid>
      </Grid>

      <StyledSubmit type="submit" variant="contained" color="primary" margin="normal" disabled={state.loading}>
        {state.loading ? <CircularProgress size={24} /> : 'Submit'}
      </StyledSubmit>
    </form>
  );
};

UserForm.propTypes = {
  values: PropTypes.object.isRequired,
  passwordVisibility: PropTypes.bool.isRequired,
  onPasswordVisibilityClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onGeneratePswButtonClick: PropTypes.func.isRequired
};

export default UserForm;
