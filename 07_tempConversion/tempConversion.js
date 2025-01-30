const convertToCelsius = function(degF) {
  return Math.round((degF - 32) / 1.8 * 10) / 10;
};

const convertToFahrenheit = function(degC) {
  return Math.round(degC * 1.8 * 10) / 10 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
