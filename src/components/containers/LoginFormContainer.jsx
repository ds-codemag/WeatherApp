import React from 'react';
import { connect } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../store/actions/authActions';
import LoginForm from '../LoginForm';

const LoginFormContainer = ({ auth, error, signIn }) => {

  const history = useHistory();
  const [formValues, setFormValues] = React.useState({ email: '', password: '' });
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  React.useEffect(() => {
    isLoaded(auth) && !isEmpty(auth) && history.push("/");
  }, [auth, history]);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    signIn(formValues)
    setFormValues({ email: '', password: '' });
  }

  const handlePasswordVisibilityClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <LoginForm
      values={formValues}
      error={error}
      passwordVisibility={passwordVisible}
      onPasswordVisibilityClick={handlePasswordVisibilityClick}
      onFormSubmit={handleFormSubmit}
      onInputChange={handleInputChange}
    />
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  error: state.auth.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
  signIn: (credentials) => dispatch(signIn(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
