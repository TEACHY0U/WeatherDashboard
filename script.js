var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


button.addEventListener('click',function(){
    fetch('api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=8493b22548e64a9d9ddf5977b11abe02')
.then(response => response.json())
.then(data => console.log(data))

.catch(err => alert("wrong city name!"))
})
