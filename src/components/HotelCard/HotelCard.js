import React from 'react';
import './HotelCard.style.scss';
const noImage = require('../../assets/no-image.jpg');

const HotelCard = (props) => {
  return (
    <div className='hotel-card'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${props.hotel.hotelStaticContent.mainImage.url}), url(${noImage})`
        }}
      />
      <div className='hotel-details'>
        <div className='hotel-name'>
          {props.hotel.hotelStaticContent.name}
        </div>
        <div className='location'>
          {props.hotel.hotelStaticContent.neighborhoodName}
        </div>
      </div>
      <div className='price-details'>
        <span className='price'>
          <span dangerouslySetInnerHTML={{
            __html: props.hotel.lowestAveragePrice.symbol
          }} />
          {props.hotel.lowestAveragePrice.amount}
        </span>
        <span className='rewards'>
          {props.hotel.rewards.miles} miles
        </span>
        <button className='button'>Select</button>
      </div>
    </div>
  );
};

export default HotelCard;
