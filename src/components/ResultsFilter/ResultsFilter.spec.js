/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';
import ResultsFilter from './ResultsFilter';

describe('ResultsFilter', () => {
  const wrapper = shallow(<ResultsFilter />);

  it('renders the component', () => {
    expect(wrapper.find('.filters').exists()).toBe(true);
  });
});
