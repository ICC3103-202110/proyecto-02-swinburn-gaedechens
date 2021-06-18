const axios = require("axios");

const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "92b09c8e655219256499fce90acb66af";

const getTemp = async (input1) => {
  var temperature;
  var maximum;
  var minimum;
  const response = await axios.get(
    API_URL + input1 + "&units=metric&APPID=" + API_KEY,
    {}
  );
  temperature = response.data.main.temp;
  maximum = response.data.main.temp_max;
  minimum = response.data.main.temp_min;
  return { temperature, maximum, minimum };
};

// Returns a random integer from 1 to 10:
//Math.floor(Math.random() * 10) + 1;
const updateadd = async (input1, model) => {
  var temperature;
  var maximum;
  var minimum;
  const response = await getTemp(input1);
  temperature = response.temperature;
  maximum = response.maximum;
  minimum = response.minimum;
  const city_to_add = {
    name: input1,
    temp: temperature,
    max: maximum,
    min: minimum,
  };
  model.push(city_to_add);
  return model;
};

const updatedelete = (input2, model) => {
  var smodel = model;
  for (var i = 0; i < smodel.length; i++) {
    if (smodel[i].name == input2) {
      smodel.splice(i, 1);
      break;
    }
  }
  return model;
};

const updaterefresh = async (input2, model) => {
  const smodel = model;
  for (var i = 0; i < smodel.length; i++) {
    if (smodel[i].name == input2) {
      const response = await getTemp(input2);
      smodel[i].temp = response.temperature;
      smodel[i].min = response.minimum;
      smodel[i].max = response.maximum;
    }
  }
  return model;
};

//function
module.exports = {
  updateadd,
  updatedelete,
  updaterefresh,
};
