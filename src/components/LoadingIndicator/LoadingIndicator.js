import React from 'react';
import './LoadingIndicator.style.scss';

const LoadingIndicator = (props) => {
  return (
    <div className='loading-indicator-container'>
      <div className='loading-backdrop' />
      <div className='loading-indicator'>
        <div className='rm-spinner'>
          <div className='left-animate'>
            <div className='rect3' />
            <div className='rect2' />
            <div className='rect1' />
          </div>
          <div className='letter'>R</div>
          <div className='right-animate'>
            <div className='rect3' />
            <div className='rect2' />
            <div className='rect1' />
          </div>
          <div className='load-text'>{props.loadingText}</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
