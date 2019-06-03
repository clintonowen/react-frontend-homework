import React from 'react';
import './ResultsList.style.scss';

import HotelCard from '../HotelCard';

const ResultsList = (props) => {
  return (
    <div className='hotel-list'>
      {props.hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default ResultsList;
