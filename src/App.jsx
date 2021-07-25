import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from './App.module.css';
import React from 'react';
import covidImage from './images/image.jpg';

export class App extends React.Component {
  state =  {
    data: {},
    country: '',
  }
  
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

render() {
  const { data, country } = this.state;
  return (
    <main className={styles.container}>
      <img src={covidImage} alt="Covid 19 Stats" className={styles.covidImage} />
      <Cards data={ data } />
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Charts data={ data } country={ country } />
    </main>
    )
  }
}