/*const searchButton = document.getElementById("search");
const currentWeatherText = document.getElementById("div");
const searchInput = document.getElementById("searchInput");*/
let obj={};

const WEATHER_DATA_API =
 "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
 const KEY="?apikey=CJGLS4vcAUFE85LrtGmgA9KIimcurtup";
 const ID_BY_CITY="http://dataservice.accuweather.com/locations/v1/topcities/150";

 function openWin() {
  window.open("http://127.0.0.1:5500/weather/page.html");
}



async function fetchWeatherData() {
  let keyCity=-1;
  console.log("fetchWeatherData");
  const input=document.getElementById("searchInput");
  const response2=await fetch('http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=CJGLS4vcAUFE85LrtGmgA9KIimcurtup');
  let data2=await response2.json();
  for(let i=0;i<data2.length;i++){
    if(data2[i].EnglishName===input.value)
    {
      keyCity=data2[i].Key;
      break;
    }
  }
 
  if(keyCity===-1)
  {
    document.getElementById("div").innerText="There is no forecast for this city";
    return;
  }
  const response = await fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+keyCity+"?apikey=CJGLS4vcAUFE85LrtGmgA9KIimcurtup");
  const data = await response.json();

  
  document.getElementById("div").innerText=input.value;
  document.getElementById("div1").innerText =data.DailyForecasts[0].Date.slice(8,10)+"/"+data.DailyForecasts[0].Date.slice(5,7)+"\n"+data.DailyForecasts[0].Day.IconPhrase+"\n"+data.DailyForecasts[0].Temperature.Minimum.Value;
  document.getElementById("div2").innerText = data.DailyForecasts[1].Date.slice(8,10)+"/"+data.DailyForecasts[1].Date.slice(5,7)+"\n"+data.DailyForecasts[1].Day.IconPhrase+"\n"+data.DailyForecasts[1].Temperature.Minimum.Value;
  document.getElementById("div3").innerText = data.DailyForecasts[2].Date.slice(8,10)+"/"+data.DailyForecasts[2].Date.slice(5,7)+"\n"+data.DailyForecasts[2].Day.IconPhrase+"\n"+data.DailyForecasts[2].Temperature.Minimum.Value;
  document.getElementById("div4").innerText = data.DailyForecasts[3].Date.slice(8,10)+"/"+data.DailyForecasts[3].Date.slice(5,7)+"\n"+data.DailyForecasts[3].Day.IconPhrase+"\n"+data.DailyForecasts[3].Temperature.Minimum.Value;
  document.getElementById("div5").innerText = data.DailyForecasts[4].Date.slice(8,10)+"/"+data.DailyForecasts[4].Date.slice(5,7)+"\n"+data.DailyForecasts[4].Day.IconPhrase+"\n"+data.DailyForecasts[4].Temperature.Minimum.Value;

  obj.name=input.value;
  obj.temp=data.DailyForecasts[0].Temperature.Minimum.Value;
  obj.text=data.DailyForecasts[0].Day.IconPhrase+"\n"+data.DailyForecasts[0];
  console.log(obj);
}

//searchButton.addEventListener("click", fetchWeatherData);

