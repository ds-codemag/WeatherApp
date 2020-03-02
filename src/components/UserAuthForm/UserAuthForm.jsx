import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, FormHelperText, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const UserAuthForm = ({
  password,
  passwordVisibility,
  onFormSubmit,
  omInputChange,
  onPasswordVisibilityClick
 }) => (
  <form onSubmit={onFormSubmit}>
    <FormControl variant="outlined" margin="normal" size="small" required fullWidth>
      <InputLabel htmlFor="user-password">Password</InputLabel>
      <OutlinedInput
        id="user-password"
        type={passwordVisibility ? 'text' : 'password'}
        value={password}
        onChange={omInputChange}
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
        <FormHelperText>Type user password and press ENTER to see the weather</FormHelperText>
    </FormControl>
  </form>
);

UserAuthForm.propTypes = {
  password: PropTypes.string.isRequired,
  passwordVisibility: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  omInputChange: PropTypes.func.isRequired,
  onPasswordVisibilityClick: PropTypes.func.isRequired
}

export default UserAuthForm;
