import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header';
import WeatherList from './components/WeatherList';
import City from './components/City';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <City city={this.state.data.city} />
        <WeatherList weathers={this.state.data.list} />
      </div>
    );
  }

  componentDidMount() {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=Jakarta,ID&mode=json&units=metric&APPID=8b8926b398fdba5ce76701d649c783f8';
    Axios.get(url)
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

}

export default App;
