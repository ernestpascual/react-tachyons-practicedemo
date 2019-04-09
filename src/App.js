import React, { Component } from 'react';
import './App.css';
import styled from 'tachyons-components'
import StatComp from './components/stats'
import Quote from './components/quote'

const Background = styled('div')`
ph7 pv6`

const Dashy = styled('div')`

`
class App extends Component {

  state = {
    header1 : "Nadine",
    header2 : "Kathryn",
    numba1 : "12231",
    numba2 : "9234"
  }
  render() {
    return (
      <Background>
        <Quote />
        <StatComp a={this.state.header1} b={this.state.numba1} />
        <StatComp a={this.state.header2} b={this.state.numba2} />
      </ Background>
    );
  }
}

export default App;