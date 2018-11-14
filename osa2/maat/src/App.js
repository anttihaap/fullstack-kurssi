import React, { Component } from 'react'
import axios from 'axios'

const Filter = ({ onFilterChange, filter }) => (
  <div>
    find countries: <input value={filter} onChange={onFilterChange} />
  </div>
)

const Display = ({ countries, filter, onCountryClick }) => {
  const filteredCountries = countries.filter(country =>
    country.name.toUpperCase().includes(filter.toUpperCase())
  )
  if (filteredCountries.length === 1) {
    return <DisplayCountry country={filteredCountries[0]} />
  } else if (filteredCountries.length > 10) {
    return <p>too many maches, specify another filter</p>
  } else {
    return (
      <ListCountries
        countries={filteredCountries}
        onCountryClick={onCountryClick}
      />
    )
  }
}

const ListCountries = ({ countries, onCountryClick }) => (
  <div>
    {countries.map(country => (
      <div onClick={() => onCountryClick(country.name)} key={country.name}>
        <p>{country.name}</p>
      </div>
    ))}
  </div>
)

const DisplayCountry = ({ country }) => (
  <div>
    <h1>{country.name}</h1>
    <p>capital: {country.capital}</p>
    <p>population: {country.population}</p>
    <img src={country.flag} alt="" width="200" />
  </div>
)

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      this.setState({ countries: res.data })
    })
  }

  onFilterChange = event => {
    this.setState({ filter: event.target.value })
  }

  onCountryClick = countryName => {
    this.setState({ filter: countryName })
  }

  render() {
    return (
      <div>
        <Filter onFilterChange={this.onFilterChange.bind(this)} filter={this.state.filter} />
        <Display
          countries={this.state.countries}
          filter={this.state.filter}
          onCountryClick={this.onCountryClick.bind(this)}
        />
      </div>
    )
  }
}

export default App
