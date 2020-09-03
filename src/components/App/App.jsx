import React from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';

//import JsonData from  process.env.PUBLIC_URL /flights.json";
import Flights from '../Flights';
import STYLES from './App.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';
//const flightsCards = JsonData.map(data => <h1>{data}</h1>);
const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <BpkText tagName="p">Over to you...</BpkText>
      <Flights />
    </main>
  </div>
);

export default App;
