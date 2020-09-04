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
    this.state = { error: null };
    this.leg = this.props.leg;
    try {
      this.arrivalTime = this.leg.arrival_time.substr(
        this.leg.arrival_time.length - 5,
      );

      this.departureTime = this.leg.departure_time.substr(
        this.leg.departure_time.length - 5,
      );
      this.srcFile =
        'https://logos.skyscnr.com/images/airlines/favicon/' +
        this.leg.airline_id +
        '.png';
    } catch (error) {
      this.state = { error };
    }
  }

  render() {
    const AlignedArrow = withAlignment(
      LongArrowRightIcon,
      lineHeightBase,
      iconSizeSm,
    );
    if (this.state.error) {
      return <h1>error page</h1>;
    }
    return (
      <div className={getClassName('block')}>
        <img
          className={getClassName('block__logo-image')}
          alt="Skyscanner"
          src={this.srcFile}
        />

        <div className={getClassName('block__text-block')}>
          <BpkText tagName="p">{this.departureTime}</BpkText>
          <BpkText
            tagName="p"
            className={getClassName('block__text-block__light')}
          >
            {this.leg.departure_airport}
          </BpkText>
        </div>
        <div className={getClassName('block__text-block__arrow')}>
          <BpkText textStyle="base">
            <AlignedArrow fill={colors.colorSkyGrayTint02} />
          </BpkText>
        </div>
        <div className={getClassName('block__text-block')}>
          <BpkText tagName="p">{this.arrivalTime}</BpkText>
          <BpkText
            tagName="p"
            className={getClassName('block__text-block__light')}
          >
            {this.leg.arrival_airport}
          </BpkText>
        </div>
        <div className={getClassName('block__text-block__right')}>
          <BpkText
            tagName="p"
            className={getClassName('block__text-block__light')}
          >
            {parseInt(this.leg.duration_mins / 60)}h{' '}
            {this.leg.duration_mins % 60}
          </BpkText>

          {this.leg.stops > 0 && (
            <BpkText
              tagName="p"
              className={getClassName('block__text-block__right__Stop')}
            >
              <span>{this.leg.stops} </span>
              <span>stops</span>
            </BpkText>
          )}
          {this.leg.stops == 0 && (
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
