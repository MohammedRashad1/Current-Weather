$(document).ready(function(){

	$('#submitWeather').click(function(){

		var city = $("#city").val();

		if (city != ''){

			$.ajax({

				url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=ba17de30d271c677fee776ee885b328a",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);

					$("#show").html(widget);

					$("#city").val('');
				}
			});

		}else{
			$("#error").html('Field cannot be empty');
		}
	});
});

function show(data) {
	return "<h2 style='font-size: 40px; font-weight:bold' class='display'> Current Weather Of " + data.name +"</h2>"+
			"<h3><strong>Description</strong> <img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'>"+ data.weather[0].description +"</h3>" +
			"<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
            "<h3><strong>Temperature</strong>: "+ data.main.temp +"&deg;C</h3>" +
            "<h3><strong>Pressure</strong>: "+ data.main.pressure +" hpa</h3>"+
            "<h3><strong>Humidity</strong>: "+ data.main.humidity+"%</h3>";
	 
}