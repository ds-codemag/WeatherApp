import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, Button, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import WeatherContainer from '../containers/WeatherContainer';
import UserAuthFormContainer from '../containers/UserAuthFormContainer';

const UserCard = ({ user, userAuth, onUserAuth, onRemoveButtonClick }) => {

  const auth = useSelector(state => state.firebase.auth);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <Typography variant="h5" component="h2">
              {`${user.firstName} ${user.lastName}`}
            </Typography>
            <Typography variant="subtitle1" component="address" color="textSecondary">
              {`${user.city}, ${user.country}`}
            </Typography>
            <Typography variant="body2" component="p">
              {user.email}
            </Typography>
          </Grid>

          <Grid item sm={6} xs={12}>
            {userAuth.error && <Alert severity="error">{userAuth.error}</Alert> }
            {
              userAuth.auth ?
                <WeatherContainer city={user.city} country={user.country} />
              :
                <UserAuthFormContainer onUserAuth={onUserAuth} />
            }
          </Grid>
        </Grid>
      </CardContent>
      {
        isLoaded(auth) && !isEmpty(auth) && <CardActions>
          <Button component={Link} to={`/edit-user/${user.id}`} size="small">Edit user</Button>
          <Button size="small" onClick={onRemoveButtonClick}>Remove user</Button>
        </CardActions>
      }
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  userAuth: PropTypes.object.isRequired,
  onUserAuth: PropTypes.func.isRequired,
  onRemoveButtonClick: PropTypes.func.isRequired
}

export default UserCard;
