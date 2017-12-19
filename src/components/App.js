import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import BarChart from './BarChart';
import Chart from './Chart';
import Nope from './Nope';

class App extends Component {
  render() {
    return (
      <div className='App'>
      	<Nope></Nope>
      	<div style={{top:'10vh'}}>
      		<Chart></Chart>
      	</div>
      </div>
    );
  }
}

export default App;
