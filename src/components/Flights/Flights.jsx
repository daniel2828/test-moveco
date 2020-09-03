import React from 'react';
import Flight from '../Flight';
import BpkCard from 'bpk-component-card';
class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonLoaded: false,
      itineraries: [],
      legs: [],
      error: null,
    };
  }
  componentDidMount() {
    fetch('flights.json')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            jsonLoaded: true,
            itineraries: result.itineraries,
            legs: result.legs,
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }
  getLegs = (item, legs) => {
    let itemsLegs = [];
    legs.map(leg => {
      if (leg.id === item.legs[0] || leg.id === item.legs[1]) {
        itemsLegs.push(leg);
      }
    });
    return itemsLegs;
  };
  render() {
    const { jsonLoaded, itineraries, legs, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!jsonLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="flights-body">
          {itineraries.map(item => (
            <Flight
              key={item.id}
              itinerarie={item}
              legs={this.getLegs(item, legs)}
            />
          ))}
        </div>
      );
    }
  }
}
export default Flights;
