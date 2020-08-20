function getApi(){
    const inputCity = document.getElementById("inputCity").value;
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const weatherIcon = document.getElementById("weatherIcon");
    const weatherSituation = document.getElementById("weatherSituation");
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=08cc75873b9653a0e2aa46d782d7e7b4`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => 
        {
        city.innerText = `${data.name}, ${data.sys.country} `;
        temp.innerText = Math.round(data.main.temp) +"° C";
        weatherSituation.innerHTML = `${data.weather[0].description} &deg;C`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` ;
        console.log(data);
        })
    .catch(error => console.log(error)) 
}

//&units=imperial
//temp.innerText = Math.ceil(data.main.temp - 273.15)+"° C"; convert kalvin to degree celcias

//String iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";