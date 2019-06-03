import React, { useState, useEffect } from 'react';
import './App.style.scss';

import ResultsFilter from '../ResultsFilter';
import ResultsList from '../ResultsList';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    hotelResultService.get().then(response => {
      setHotels(response.results.hotels);
    });
  }, []);

  return (
    <div className='app-container'>
      <div className='content'>
        <ResultsFilter />
        <ResultsList hotels={hotels} />
      </div>
    </div>
  );
};

export default App;
