import axios from 'axios';

const helpers = {
  fetchGooglePlace: async (input) => {
   const result =  await axios.get('/order/googleMapPlaceSearch',
      {
        params: { input },
      }
    );

    try {
      return result.data;
    } catch(err) {
      return err;
    }
  }
};

export default helpers;
