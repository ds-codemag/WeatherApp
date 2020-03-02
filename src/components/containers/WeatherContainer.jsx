import React from 'react';
import geocoder from 'geocoder';
import Weather from '../Weather';

const WeatherContainer = ({ city, country }) => {

  const [weather, setWeather] = React.useState(null)

  React.useEffect(() => {
    geocoder.geocode(`${city}, ${country}`, function (error, data) {
      error && console.error(error);

      const location = data.results[0].geometry.location;

      fetch(`https://api.met.no/weatherapi/locationforecast/1.9/?lat=${location.lat}&lon=${location.lng}`)
        .then((res) => {
          return res.text()
        })
        .then((data) => {
          const parser = new DOMParser()
          const xml = parser.parseFromString(data, 'application/xml')
          const times = [...xml.getElementsByTagName('time')];
          const weatherArr = [];

          times.forEach((time, i) => {
            if (time.getAttribute('from') === time.getAttribute('to')) {
              weatherArr.push({
                date: time.getAttribute('from'),
                temperature: {
                  value: time.querySelector('temperature').getAttribute('value'),
                  unit: time.querySelector('temperature').getAttribute('unit')
                },
                humidity: {
                  value: time.querySelector('humidity').getAttribute('value'),
                  unit: time.querySelector('humidity').getAttribute('unit')
                }
              })
            }
          })

          setWeather(weatherArr);
        })
        .catch(error => {
          error && console.error(error)
        })
    }, {  key: '***' });
  }, [])

  return (
    <Weather weather={weather} />
  )
}

export default WeatherContainer;
