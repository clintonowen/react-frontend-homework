import axios from 'axios';

class HotelResultService {
  get () {
    return axios
      .get('https://homework-app.rocketmiles.com/fe-homework/rates')
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch(() => {});
  }
}

const hotelResultService = new HotelResultService();

export default hotelResultService;
