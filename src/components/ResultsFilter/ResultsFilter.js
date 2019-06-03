import React from 'react';
import './ResultsFilter.style.scss';

const ResultsFilter = () => {
  return (
    <div>
      <div className='filters'>
        Hotel name
        <input type='text' className='input' maxLength={1} />
        Price
        <select name='' className='select'>
          <option value=''>Recommended</option>
          <option value=''>Price low-to-high</option>
          <option value=''>Price high-to-low</option>
        </select>
        <button className='button'>Reset</button>
      </div>
    </div>
  );
};

export default ResultsFilter;