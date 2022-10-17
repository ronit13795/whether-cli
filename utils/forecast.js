const request = require("request");

const forecast = (latitude, longitude, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=51f7f0253608152d9686473bfcfcbd5e&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      cb("unable to connect to weather service");
    } else if (response.body.error) {
      cb("unable to find location");
    } else {
      const data = response.body.current;
      cb(
        undefined,
        `it is currently ${data.temperature} degrees out. it feels like ${data.feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
