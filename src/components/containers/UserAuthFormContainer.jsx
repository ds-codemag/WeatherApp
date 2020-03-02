import React from 'react';
import UserAuthForm from '../UserAuthForm';

const UserAuthFormContainer = ({ onUserAuth }) => {

  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUserAuth(password);
  }

  const handleInputChange = event => {
    setPassword(event.target.value)
  };

  const handlePasswordVisibilityClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <UserAuthForm
      password={password}
      passwordVisibility={passwordVisible}
      onFormSubmit={handleFormSubmit}
      omInputChange={handleInputChange}
      onPasswordVisibilityClick={handlePasswordVisibilityClick}
    />
  )
};

export default UserAuthFormContainer;
