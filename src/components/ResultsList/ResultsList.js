import React from 'react';
import './ResultsList.style.scss';

import HotelCard from '../HotelCard';

const ResultsList = (props) => {
  return (
    <div className='hotel-list'>
      {props.hotels
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
        .map(hotel => {
          if (props.filter.length <= 0 ||
            hotel.hotelStaticContent.name
              .toLowerCase()
              .includes(props.filter.toLowerCase())) {
            return (
              <HotelCard key={hotel.id} hotel={hotel} />
            );
          }
        })}
    </div>
  );
};

export default ResultsList;
