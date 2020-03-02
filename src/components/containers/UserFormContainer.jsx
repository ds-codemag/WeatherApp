import React from 'react';
import  PropTypes from 'prop-types';
import UserForm from '../UserForm';

const UserFormContainer = ({ initialFormValues, onFormSubmitAction, resetAfterSubmit }) => {

  const initialFormState = {
    firstName: '',
    lastName: '',
    city: '',
    country: '',
    email: '',
    password: ''
  }

  const [formValues, setFormValues] = React.useState(initialFormValues || initialFormState);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleInputChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handlePasswordVisibilityClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmitAction(formValues);
    resetAfterSubmit && setFormValues(initialFormState);
  }

  const handleGeneratePswButtonClick = () => {
    const length = 8;
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let password = '';

    for (let i = 0; i<=length; i++) {
      password += charset.charAt(Math.floor(Math.random() * (charset.length - 1)));
    }

    setFormValues({
      ...formValues,
      password
    })
  }

  return (
    <UserForm
      values={formValues}
      passwordVisibility={passwordVisible}
      onPasswordVisibilityClick={handlePasswordVisibilityClick}
      onInputChange={handleInputChange}
      onFormSubmit={handleFormSubmit}
      onGeneratePswButtonClick={handleGeneratePswButtonClick}
    />
  )
};

UserFormContainer.propTypes = {
  initialFormValues: PropTypes.object,
  onFormSubmitAction: PropTypes.func.isRequired,
  resetAfterSubmit: PropTypes.bool
};

export default UserFormContainer;
