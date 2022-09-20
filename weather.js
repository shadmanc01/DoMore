let weatherimg = document.getElementById('weathericon');
let temp = document.getElementById('temperature');
window.addEventListener('DOMContentLoaded', () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			console.log('My General Position:', position);
			const lon = position.coords.longitude;
			const lat = position.coords.latitude;
			fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e6e8be293abf4cc4e1ebcc1e9730d1a7`)
			.then(resp => resp.json())
			.then(data =>  {
                let kelvin = data.main.temp;
                console.log("kel", kelvin)
                let fahr = Math.round((((kelvin - 273.15) * 9) / 5) + 32)
                weathericon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
                temp.innerText = fahr + '℉';
            })
		});
	}
	
});
