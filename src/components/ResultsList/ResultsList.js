import React from 'react';
import './ResultsList.style.scss';

const ResultsList = (props) => {
  return (
    <div className='hotel-list'>
      {props.hotels.map(hotel => (
        <div className='hotel-card' key={hotel.id}>
          <div
            className='image'
            style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})` }} />
          <div className='hotel-details'>
            <div className='hotel-name'>
              {hotel.hotelStaticContent.name}
            </div>
            <div className='location'>
              {hotel.hotelStaticContent.neighborhoodName}
            </div>
          </div>
          <div className='price-details'>
            <span className='price'>
              <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }} />
              {hotel.lowestAveragePrice.amount}
            </span>
            <span className='rewards'>
              {hotel.rewards.miles} miles
            </span>
            <button className='button'>Select</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
