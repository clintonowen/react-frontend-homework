/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';
import ResultsList from './ResultsList';

describe('ResultsList', () => {
  const wrapper = shallow(<ResultsList />);

  it('renders the component', () => {
    expect(wrapper.find('.hotel-list').exists()).toBe(true);
  });
});
