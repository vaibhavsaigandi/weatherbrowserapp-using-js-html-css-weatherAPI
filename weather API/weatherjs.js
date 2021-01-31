var button = document.querySelector(".button");
var inputvalue = document.querySelector(".inputvalue");
var cityname = document.querySelector("#cityname");
var desp = document.querySelector(".descrption");
var temp = document.querySelector(".temp");
// var countryname = document.querySelector("#countryname");
var mxmitemp = document.querySelector(".maxandmintemp");
var feelsliketemp = document.querySelector(".feelslike");
var handp = document.querySelector(".humidityandpressure");
var iconElement = document.querySelector(".weathericon");
button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&units=metric&appid=40f47a61150181bb2b09bc541a2a5cc0')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            console.log(data);
            var nameofcity = data['name'];
            var countrynamedata = data['sys']['country'];
            var descValue = data['weather'][0]['description'];
            var iconid = data['weather'][0]['icon'];
            var maxtemp = data['main']['temp_max'];
            var mintemp = data['main']['temp_min'];
            var feelslike = data['main']['feels_like'];
            var humidity = data['main']['humidity'];
            var pressure = data['main']['pressure'];
            cityname.innerHTML = nameofcity + "," + countrynamedata;
            // countryname.innerHTML = countrynamedata;
            desp.innerHTML = descValue;
            iconElement.innerHTML = `<img src="icons/${iconid}.png"/>`;
            console.log(iconid);
            temp.innerHTML = tempValue + "&#8451;";
            mxmitemp.innerHTML = maxtemp + "&#8451;" + " " + "/" + " " + mintemp + "&#8451;";
            feelsliketemp.innerHTML = "feelslike -" + "&nbsp &nbsp" + feelslike;
            handp.innerHTML = "humidity -" + humidity + " &nbsp &nbsp &nbsp" + "pressure -" + pressure;
            inputvalue.value = "";
            if (descValue) {
                iconElement.style.visibility = "visible";
            }

        })

    .catch(err => alert("Wrong city name!"));
})