import React from 'react';
import BpkCard from 'bpk-component-card';
import BpkButton from 'bpk-component-button';

import STYLES from './Flight.scss';
import BpkText from 'bpk-component-text';
import Leg from '../Leg';

const getClassName = className => STYLES[className] || 'UNKNOWN';
const getId = id => STYLES[id] || 'UNKNOWN';
class Flight extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
    this.arrayLegs = [];
    try {
      this.itinerarie = this.props.itinerarie;
      this.props.legs.map(item =>
        this.arrayLegs.push(<Leg key={item.id} leg={item} />),
      );
    } catch (error) {
      this.setState = { error: true };
    }
  }
  render() {
    if (this.state.error) {
      return <h1>Error</h1>;
    }
    return (
      <BpkCard className={getClassName('card')}>
        {this.arrayLegs}

        <div className={getClassName('block')}>
          <div>
            <BpkText tagName="p" id={getId('price')}>
              {this.itinerarie && this.itinerarie.price}
            </BpkText>
            <BpkText tagName="p" id={getId('agent')}>
              {this.itinerarie && this.itinerarie.agent}
            </BpkText>
          </div>
          <BpkButton className={getClassName('block__element-block-right')}>
            <BpkText
              className={getClassName('block__element-block-right__text')}
              tagName="p"
              bold
            >
              Select
            </BpkText>
          </BpkButton>
        </div>
      </BpkCard>
    );
  }
}
export default Flight;
