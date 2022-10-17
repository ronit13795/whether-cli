const request = require("request");
const geocode = (location, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=a2f6fe9eb83e9ff8978fdb12337ca31c&query=${location}&output=json`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location services!");
    } else if (!response.body.data.length) {
      callback("empty response");
    } else {
      callback(undefined, {
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
        location,
      });
    }
  });
};

module.exports = geocode;
