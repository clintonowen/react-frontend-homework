import React from 'react';
import './ResultsList.style.scss';

import HotelCard from '../HotelCard';

const ResultsList = (props) => {
  let list = props.hotels
    .sort((a, b) => {
      switch (props.sort) {
        case 'low':
          return a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;
        case 'high':
          return b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;
        default:
          return b.hotelStaticContent.rating - a.hotelStaticContent.rating;
      }
    })
    .filter(hotel => {
      if (props.filter.length <= 0 ||
        hotel.hotelStaticContent.name
          .toLowerCase()
          .includes(props.filter.toLowerCase())) {
        return hotel;
      }
    })
    .map(hotel => {
      return (
        <HotelCard key={hotel.id} hotel={hotel} />
      );
    });

  if (list.length < 1) {
    list = (
      <div className='no-results'>
        <p>
          No hotels found. Try some different search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className='hotel-list'>
      {list}
    </div>
  );
};

export default ResultsList;
