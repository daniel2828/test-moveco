import React from 'react';
import TestRenderer from 'react-test-renderer';

import Flight from './Flight';

describe('Flight', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Flight />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
