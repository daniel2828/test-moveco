import React from 'react';
import TestRenderer from 'react-test-renderer';

import Leg from './Leg';

describe('Leg', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Leg />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
