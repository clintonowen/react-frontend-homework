/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from './LoadingIndicator';

describe('LoadingIndicator', () => {
  const wrapper = shallow(<LoadingIndicator />);

  it('renders the component', () => {
    expect(wrapper.find('.loading-indicator-container').exists()).toBe(true);
  });
});
