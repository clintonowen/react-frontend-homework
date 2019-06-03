import React from 'react';
import './ResultsFilter.style.scss';

const ResultsFilter = (props) => {
  return (
    <div>
      <div className='filters'>
        Hotel name
        <input
          type='text'
          className='input'
          onChange={e => props.onChangeFilter(e.target.value)}
        />
        Sort by
        <select
          name='sort'
          className='select'
          onChange={e => props.onChangeSort(e.target.value)}
        >
          <option value='rec'>Recommended</option>
          <option value='low'>Price low-to-high</option>
          <option value='high'>Price high-to-low</option>
        </select>
        <button className='button'>Reset</button>
      </div>
    </div>
  );
};

export default ResultsFilter;
