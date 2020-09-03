import React from 'react';

import STYLES from './Leg.scss';

import BpkText from 'bpk-component-text';
const getClassName = className => STYLES[className] || 'UNKNOWN';

const getId = id => STYLES[id] || 'UNKNOWN';
class Leg extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.leg);
  }
  render() {
    const { leg } = this.props;
    return (
      <div className={getClassName('block')}>
        <img
          className={getClassName('block__logo-image')}
          alt="Skyscanner"
          src="https://logos.skyscnr.com/images/airlines/favicon/LH.png"
        />

        <div className={getClassName('block__text-block')}>
          <BpkText tagName="p">{leg.departure_time}</BpkText>
          <BpkText tagName="p">{leg.departure_airport}</BpkText>
        </div>
        <div className={getClassName('block__text-block__arrow')}>
          <BpkText tagName="p">flecha</BpkText>
        </div>
        <div className={getClassName('block__text-block')}>
          <BpkText tagName="p">{leg.arrival_time}</BpkText>
          <BpkText tagName="p">{leg.arrival_airport}</BpkText>
        </div>
        <div className={getClassName('block__text-block__right')}>
          <BpkText tagName="p" bold>
            {leg.duration_mins}
          </BpkText>

          {leg.stops > 0 && (
            <BpkText>
              <span>{leg.stops} </span>
              <span>stops</span>
            </BpkText>
          )}
          {leg.stops == 0 && (
            <BpkText>
              <span
                className={getClassName('block__text-block__right__Direct')}
              >
                Direct
              </span>
            </BpkText>
          )}
        </div>
      </div>
    );
  }
}

export default Leg;
