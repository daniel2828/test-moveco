import React from 'react';
import TestRenderer from 'react-test-renderer';

import Flights from './Flights';

describe('Flights', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Flights />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
