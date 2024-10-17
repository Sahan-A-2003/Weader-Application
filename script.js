
const weaderAPI = "c2c5eda2b5c7b98ccc49235289e97cb0";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let seachBox = document.querySelector(".seach-contry");
const seachBtn = document.querySelector(".seach button");
const weaderImage = document.querySelector(".weather-image");
const inputField = document.getElementById("inputField");

async function chackWeader(city){
  // fetch the weader API.
  const respons = await fetch(apiURL + city + `&appid=${weaderAPI}`);

  if (respons.status == 404) {
    document.querySelector(".weather-display").style.display = "none";
    document.querySelector(".invalid-input").style.display = "block";

  }else{

    var data = await respons.json();
    let weader = data.weather[0].main;

    document.querySelector(".Country").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#Hpresanteg").innerHTML = data.main.humidity + "%";
    document.querySelector("#wSpeed").innerHTML = data.wind.speed.toFixed(1) + "Km\\h";

    // Change images acoding to the weader

    if(weader == "Clouds"){
      weaderImage.src = "images/clouds.png";

    }else if(weader == "Clear"){
      weaderImage.src = "images/clear.png";

    }else if(weader == "Mist"){
      weaderImage.src = "images/mist.png";

    }else if(weader == "Rain"){
      weaderImage.src = "images/rain.png";

    }else if(weader == "Drizzle"){
      weaderImage.src = "images/drizzle.png";

    }else if(weader == "Snow"){
      weaderImage.src = "images/snow.png";

    }

    document.querySelector(".weather-display").style.display = "block";
    document.querySelector(".invalid-input").style.display = "none";
    seachBox.value = "";

    }

}
// seach button click event.
seachBtn.addEventListener("click", ()=>{
  chackWeader(seachBox.value);
})

// enter key event
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    chackWeader(seachBox.value);
  }
});