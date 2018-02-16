import React, { Component } from 'react';
import SearchBar from '../Containers/search_bar';
import WeatherList from '../Containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Weather</div>
        <div><SearchBar/></div>
        <div><WeatherList/></div>
      </div>
    );
  }
}
