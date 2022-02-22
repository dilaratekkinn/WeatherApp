const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'ecf1923d19d4075f8189a8badef181ef';
const setQuery = (e) => {

    if (e.keyCode == '13') {
        getResult(searchBar.value)
    }
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;

    console.log(query);
    fetch(query)
        .then(data => data.json())
        .then(data => displayResult(data));
}

function displayResult(data) {
    console.log(data);
    let city = document.querySelector('.city');
    city.innerText = `${data.name},${data.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(data.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = data.weather[0].description;

    if (typeof data.weather[0].description != 'undefined') {

        if (data.weather[0].description == 'açık') {
            document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/2/26/Sunny_day_in_India.jpg')";

        } else if (data.weather[0].description == 'parçalı bulutlu') {
            document.body.style.backgroundImage = "url('https://www.egehaber.com/wp-content/uploads/2021/02/cloudscape-488478_640.jpg')";

        } else if (data.weather[0].description == 'hafif kar yağışlı') {
            document.body.style.backgroundImage = "url('https://render.fineartamerica.com/images/rendered/default/greeting-card/images-medium/sun-rays-through-stormclouds-jennifer-brindley.jpg?&targetx=-25&targety=0&imagewidth=751&imageheight=500&modelwidth=700&modelheight=500&backgroundcolor=948F9B&orientation=0')";

        } else if (data.weather[0].description == 'parçalı az bulutlu') {
            document.body.style.backgroundImage = "url('https://www.azernews.az/media/2017/01/23/clouds_3.jpg')";

        } else if (data.weather[0].description == 'sisli') {
            document.body.style.backgroundImage = "url('http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQFGCACwDhhgqSiTzLWNRdatPxSZNiY9mhNx6XX1-Al2esl9I_sWLglALCsHWNN2lhtpOUrjD1rvH1gU6xFj1c')";

        } else if (data.weather[0].description == 'kapalı') {
            document.body.style.backgroundImage = "url('https://render.fineartamerica.com/images/rendered/default/greeting-card/images-medium/sun-rays-through-stormclouds-jennifer-brindley.jpg?&targetx=-25&targety=0&imagewidth=751&imageheight=500&modelwidth=700&modelheight=500&backgroundcolor=948F9B&orientation=0')";

        } else {
            document.body.style.backgroundImage = "url('weather.jpg')";
        }

        console.log(data.weather[0].description);
    }


    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(data.main.temp_min)}°C/${Math.round(data.main.temp_max)}°C`;
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener('keypress', setQuery);