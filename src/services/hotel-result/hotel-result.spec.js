/* global describe it expect */

import HotelResultService from './hotel-result.service';

describe('HotelResultService', () => {
  it('is a singleton', () => {
    expect(HotelResultService).toBeTruthy();
  });
});
