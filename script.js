var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');



// var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
// var city = 'san diego';
// var apiKey = '8493b22548e64a9d9ddf5977b11abe02';
// var units = 'units=imperial';


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=8493b22548e64a9d9ddf5977b11abe02&units=imperial')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    cityName.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})


.catch(err => alert("Wrong city name!"))
})

