const button = document.getElementById("search-button");
const cityName = document.getElementById("city-name");
const weatherDiv = document.getElementById("weather-info");
const country = document.getElementById("country");
const city = document.getElementById("city");
const region = document.getElementById("region");
const timeZone = document.getElementById("time-zone");
const localTime = document.getElementById("local-time");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windMph = document.getElementById("wind_mph");
const temperature_f = document.getElementById("temperature_f");





// console.log(cityName.val());

async function getDataByCity(cityName){

  const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=9abdf5e343bb45589d4105457242603&q=${cityName}&aqi=yes`);
  return await promise.json();
}



async function getData(lan, lat){

  const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=9abdf5e343bb45589d4105457242603&q=${lan},${lat}&aqi=yes`);
  return await promise.json();
}



async function getLocation(position){

 let result = await  getData(cityName,position.coords.latitude, position.coords.longitude);
 
 weatherDiv.classList.remove('d-none');

 country.innerText = result.location.country;
 city.innerText = result.location.name;
 region.innerText = result.location.region;
 timeZone.innerText = result.location.tz_id;
 localTime.innerText = result.location.localtime;
 latitude.innerText = result.location.lat;
 longitude.innerText = result.location.lon;

 // current 

 console.log(result.current.condition.icon);

 condition.innerText = result.current.condition.text;
 humidity.innerText = result.current.humidity;
 windMph.innerText = result.current.wind_mph;
 temperature_f.innerText = result.current.temp_f;

 console.log(result);
}


// call when some error in get location 
function failToGetLocation(){
  console.log('there is some error ');
}


window.onload = async () => {
  navigator.geolocation.getCurrentPosition(getLocation, failToGetLocation);
}


button.addEventListener("click", async () => {

  const value = cityName.value;
  
  const result = await getDataByCity(value);

  weatherDiv.classList.remove('d-none');

    country.innerText = result.location.country;
  city.innerText = result.location.name;
  region.innerText = result.location.region;
  timeZone.innerText = result.location.tz_id;
  localTime.innerText = result.location.localtime;
  latitude.innerText = result.location.lat;
  longitude.innerText = result.location.lon;
  
  condition.innerText = result.current.condition.text;
  humidity.innerText = result.current.humidity;
  windMph.innerText = result.current.wind_mph;
  temperature_f.innerText = result.current.temp_f;
 

  // console.log(result.current);
  // console.log(value);
})