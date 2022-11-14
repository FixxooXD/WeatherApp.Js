// require("dotenv").config();

const input = document.getElementById("input");
const searchBtn = document.getElementById("btn");
const degree = document.getElementById("celcius");
const ConditionImg = document.getElementById("conditionImg");
const condition = document.getElementById("condition");
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const uv = document.getElementById('uv');

const city = input.value;

// console.log(process.env.API_KEY)
// process.env.HOST

const options = {
  method: "GET",
  headers: {
    // 'X-RapidAPI-Key': '55837e1b2afb4f46bd0175755221011',
    // 'X-RapidAPI-Host': process.env.HOST
  },
};

searchBtn.addEventListener("click", getReport);

async function getReport() {
  console.log(city);
  await fetch(
    `https://api.weatherapi.com/v1/current.json?key=55837e1b2afb4f46bd0175755221011&q=${input.value}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      degree.innerHTML = `${data.current.temp_c}<span  class="text-xl">℃</span>`;
      humidity.innerHTML = `Humidity :<span>${data.current.humidity}%</span>`
      wind.innerHTML = `Wind : <span>${data.current.wind_kph} km/h</span></div>`
      uv.innerHTML =`UV : <span>${data.current.uv}</span>`
      return data.current.condition;
    })
    .then((data) => {
      condition.innerHTML = data.text;
      ConditionImg.src = data.icon;
    })
    .catch((err) => console.error(err));
}

input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
   getReport();
  }
});
