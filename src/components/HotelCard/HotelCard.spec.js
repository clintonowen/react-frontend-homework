/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';
import HotelCard from './HotelCard';

describe('HotelCard', () => {
  const hotel = {
    'id': '907',
    'rewards': {
      'miles': 10000
    },
    'lowestAveragePrice': {
      'currency': 'USD',
      'symbol': '&#36;',
      'amount': 579.0
    },
    'hotelStaticContent': {
      'hotelId': 907,
      'languageCode': 'en',
      'mainImage': {
        'category': 'EXTERIOR',
        'url': 'http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg',
        'source': 'VFML'
      },
      'name': 'Omni Chicago Hotel & Suites Magnificent Mile',
      'neighborhoodName': 'Magnificent Mile',
      'address': {
        'line1': '676 North Michigan Avenue',
        'line2': null,
        'city': 'Chicago',
        'stateName': 'Illinois',
        'stateCode': 'IL',
        'countryName': 'United States',
        'countryCode': 'US',
        'zipCode': '60611',
        'latitude': 41.89475,
        'longitude': -87.62465,
        'timeZoneId': 'America/Chicago'
      },
      'stars': 4,
      'rating': 9,
      'numberOfReviews': 685,
      'brandCode': '1324',
      'brandName': 'Omni Hotels',
      'propertyType': 204,
      'propertyTypeName': 'Hotel'
    }
  };
  const wrapper = shallow(<HotelCard hotel={hotel} />);

  it('renders the component', () => {
    expect(wrapper.find('.hotel-card').exists()).toBe(true);
  });
});
