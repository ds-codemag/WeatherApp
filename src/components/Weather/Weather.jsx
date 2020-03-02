import React from 'react';
import PropTypes from 'prop-types';
import { Badge, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { StyledDiv, StyledSpinner } from './Weather.styled';

const Weather = ({ weather }) => {
  return (
    <StyledDiv>
      {
        weather ? (
          <List>
            {
              weather.map(
                item => {
                  let date = new Date(item.date)
                  return (
                    <ListItem>
                      <ListItemAvatar>
                        <Badge badgeContent="°C" color="primary">
                          <Avatar>
                            {item.temperature.value}
                          </Avatar>
                        </Badge>
                      </ListItemAvatar>
                      <ListItemText primary={`${date.toLocaleString('en', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}`} secondary={`Humidity: ${item.humidity.value}%`} />
                    </ListItem>
                  )
                }
              )
            }
          </List>
        ) : (
          <StyledSpinner size={40} />
        )
      }
    </StyledDiv>
  )
}

Weather.propTypes = {
  weather: PropTypes.object
}

export default Weather;
