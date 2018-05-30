import React, { Component } from 'react';

import { Statistics } from './Statistics.js';

class App extends Component {

  constructor() {
    super()
    this.state = {
      hyvat: 0,
      neutraalit: 0,
      huonot: 0,
      painallukset: 0
    }
  }

  kasvata = (nimi, arvo) => {
    return () => {
      this.setState({ [nimi]: arvo })
      this.setState({ painallukset: this.state.painallukset + 1 })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>anna palautetta</h1>
        <button onClick={this.kasvata('hyvat', this.state.hyvat + 1)}>hyvä</button>
        <button onClick={this.kasvata('neutraalit', this.state.neutraalit + 1)}>neutraali</button>
        <button onClick={this.kasvata('huonot', this.state.huonot + 1)}>huono</button>
        <Statistics tilasto={this.state} />
      </div>
    );
  }
}

export default App;
