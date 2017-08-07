import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from '../components/chart'
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weatherData => weatherData.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weatherData => weatherData.main.pressure);
    const humidities = cityData.list.map(weatherData => weatherData.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color="orange" units="°C" /></td>
        <td><Chart data={pressures} color="blue" units="hPa" /></td>
        <td><Chart data={humidities} color="grey" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
