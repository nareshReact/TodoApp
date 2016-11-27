var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=daf8b202ac6bec0ad62ec0f2d2224bf0&units=imperial';

module.exports = {

  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    debugger;
    return axios.get(requestUrl).then( function (res){

      if (res.data.cod && res.data.message){
         throw new Error(res.data.message);
        // res.data.cod='';
      //  res.data.message=''
      }else{
        return res.data.main.temp;
      }
    }, function (err) {
        // throw new Error(err.response.data.message);
           throw new Error('unable to fetch weather for that location');
         res.data.cod='';
         res.data.message=''
    });
  }
}
