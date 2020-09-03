import React from 'react';

import STYLES from './Leg.scss';
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { withAlignment } from 'bpk-component-icon';
import { lineHeightBase, iconSizeSm, colors } from 'bpk-tokens/tokens/base.es6';

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
    const arrivalTime = leg.arrival_time.substr(leg.arrival_time.length - 5);

    const departureTime = leg.departure_time.substr(
      leg.departure_time.length - 5,
    );
    const AlignedArrow = withAlignment(
      LongArrowRightIcon,
      lineHeightBase,
      iconSizeSm,
    );
    return (
      <div className={getClassName('block')}>
        <img
          className={getClassName('block__logo-image')}
          alt="Skyscanner"
          src={
            'https://logos.skyscnr.com/images/airlines/favicon/' +
            leg.airline_id +
            '.png'
          }
        />

        <div className={getClassName('block__text-block')}>
          <BpkText tagName="p">{departureTime}</BpkText>
          <BpkText
            tagName="p"
            className={getClassName('block__text-block__light')}
          >
            {leg.departure_airport}
          </BpkText>
        </div>
        <div className={getClassName('block__text-block__arrow')}>
          <BpkText textStyle="base">
            <AlignedArrow fill={colors.colorSkyGrayTint02} />
          </BpkText>
        </div>
        <div className={getClassName('block__text-block')}>
          <BpkText tagName="p">{arrivalTime}</BpkText>
          <BpkText
            tagName="p"
            className={getClassName('block__text-block__light')}
          >
            {leg.arrival_airport}
          </BpkText>
        </div>
        <div className={getClassName('block__text-block__right')}>
          <BpkText
            tagName="p"
            className={getClassName('block__text-block__light')}
          >
            {parseInt(leg.duration_mins / 60)}h {leg.duration_mins % 60}
          </BpkText>

          {leg.stops > 0 && (
            <BpkText
              tagName="p"
              className={getClassName('block__text-block__right__Stop')}
            >
              <span>{leg.stops} </span>
              <span>stops</span>
            </BpkText>
          )}
          {leg.stops == 0 && (
            <BpkText
              tagName="p"
              bold
              className={getClassName('block__text-block__right__Direct')}
            >
              <span>Direct</span>
            </BpkText>
          )}
        </div>
      </div>
    );
  }
}

export default Leg;
