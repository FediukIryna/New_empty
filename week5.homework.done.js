let apiKey = "e4e8b1ed839a508aac0f7edc43c3cd9f";
let cityname = "Złotoryja County";


function showTemperature(response) {
  document.querySelector("#cityname").innerHTML = response.data.name;

  let temp = Math.round(response.data.main.temp);
  let showtemperatureElement = document.querySelector("#message");
  showtemperatureElement.innerHTML = `${temp}°C`;

  let description= document.querySelector("#temperature-description");
  description.innerHTML = response.data.weather[0].description;

  let precitatationElement= response.data.main.humidity;
  let showHumidity = document.querySelector("#precitatation");
  showHumidity.innerHTML = `Humidity: ${precitatationElement}%`;

  let wind = Math.round(response.data.wind.speed);
  let showWind = document.querySelector("#wind");
  showWind.innerHTML = `Wind: ${wind} km/h`;

  let apiKey = "e4e8b1ed839a508aac0f7edc43c3cd9f";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);



}

function showPosition(position) {
  let latt = position.coords.latitude;
  let lonn = position.coords.longitude;
  let apiKey = "e4e8b1ed839a508aac0f7edc43c3cd9f";
  let apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${lonn}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl1).then(showTemperature);
  }

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);


function changecity(event) {
  event.preventDefault();
  let input = document.querySelector("#change-NY-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${input.value}`;


  let apiKey = "e4e8b1ed839a508aac0f7edc43c3cd9f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changetemp);
}
let form = document.querySelector("#change-NY-form");
form.addEventListener("submit", changecity);

function changetemp(response) {
  event.preventDefault();
  let  newtemp = Math.round(response.data.main.temp);
  let temp = document.querySelector("#message");
  temp.innerHTML = `${newtemp} °C`;
  console.log(newtemp);

  let description1 = document.querySelector("#temperature-description");
  description1.innerHTML = response.data.weather[0].description;

  let precitatationElement1= response.data.main.humidity;
  let showHumidity = document.querySelector("#precitatation");
  showHumidity.innerHTML = `Humidity: ${precitatationElement1}%`;

  let wind1 = Math.round(response.data.wind.speed);
  let showWind = document.querySelector("#wind");
  showWind.innerHTML = `Wind: ${wind1} km/h`;
}