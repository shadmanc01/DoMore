window.addEventListener('DOMContentLoaded', () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			console.log('My General Position:', position);
			const lon = position.coords.longitude;
			const lat = position.coords.latitude;
            console.log(lat);
            console.log(lon)

			fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e6e8be293abf4cc4e1ebcc1e9730d1a7`)
			.then(resp => resp.json())
			.then(data => console.log(data))
		});
	}
	
});
