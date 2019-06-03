import React, { useState, useEffect } from 'react';
import './App.style.scss';

import ResultsFilter from '../ResultsFilter';
import ResultsList from '../ResultsList';
import LoadingIndicator from '../LoadingIndicator';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('rec');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let results;

  useEffect(() => {
    hotelResultService.get().then(response => {
      setTimeout(() => {
        setLoading(false);
        if (response) {
          setHotels(response.results.hotels);
        } else {
          setError(true);
        }
      }, 2500);
    });
  }, []);

  if (loading) {
    results = <LoadingIndicator loadingText='Loading hotels...' />;
  } else if (error) {
    results = (
      <div className='error-msg'>
        <p>
          Something went wrong. Please try again or contact us for help.
        </p>
      </div>
    );
  } else {
    results = (
      <ResultsList
        hotels={hotels}
        filter={filter}
        sort={sort}
      />
    );
  }

  return (
    <div className='app-container'>
      <div className='content'>
        <ResultsFilter
          filter={filter}
          onChangeFilter={(val) => setFilter(val)}
          sort={sort}
          onChangeSort={(val) => setSort(val)}
        />
        {results}
      </div>
    </div>
  );
};

export default App;
