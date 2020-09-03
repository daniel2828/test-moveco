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
  }
  render() {
    const { itinerarie, legs } = this.props;
    return (
      <BpkCard className={getClassName('card')}>
        {legs.map(item => (
          <Leg key={item.id} leg={item} />
        ))}

        <div className={getClassName('block')}>
          <div>
            <BpkText tagName="p" id={getId('price')}>
              {itinerarie.price}
            </BpkText>
            <BpkText tagName="p" id={getId('agent')}>
              {itinerarie.agent}
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
