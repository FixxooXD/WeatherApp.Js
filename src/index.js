// require("dotenv").config();

const input = document.getElementById("input");
const searchBtn = document.getElementById("btn");
const degree = document.getElementById("celcius");
const ConditionImg = document.getElementById("conditionImg");
const condition = document.getElementById("condition");

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
      console.log(data.current);
      // degree.innerText = `${data.current.temp_c}`;
      degree.innerHTML = `${data.current.temp_c}<span  class="text-xl">℃</span>`;
      // degree.append = `<h1 id="celcius" class="flex justify-center  items-center text-5xl w-32 h-32 border-2 p-2">${data.current.temp_c}`<span>℃</span></h1>`
      return data.current.condition;
    })
    .then((data) => {
      condition.innerHTML = data.text;
      ConditionImg.src = data.icon;
    })
    .catch((err) => console.error(err));
}
