function displayTemperature(response) {
  console.log(response.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.temp;
}

let apiKey = "33d07e1a28d76a09d64977t04bafo00c";
let apiUrl =
  "https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=33d07e1a28d76a09d64977t04bafo00c&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
