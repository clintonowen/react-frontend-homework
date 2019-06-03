import React, { useState, useEffect } from 'react';
import './App.style.scss';

import ResultsFilter from '../ResultsFilter';
import ResultsList from '../ResultsList';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('rec');

  useEffect(() => {
    hotelResultService.get().then(response => {
      setHotels(response.results.hotels);
    });
  }, []);

  return (
    <div className='app-container'>
      <div className='content'>
        <ResultsFilter
          filter={filter}
          onChangeFilter={(val) => setFilter(val)}
          sort={sort}
          onChangeSort={(val) => setSort(val)}
        />
        <ResultsList
          hotels={hotels}
          filter={filter}
          sort={sort}
        />
      </div>
    </div>
  );
};

export default App;
