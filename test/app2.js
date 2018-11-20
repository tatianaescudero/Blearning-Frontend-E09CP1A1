var coords = {
 	isla: {
 		lat: -27.112723,
 		lng: -109.34968650000002
 	},
 	arica: {
 		lat: -18.4782534,
 		lng: -70.31259879999999
 	},
 	santiago: {
 		lat: -33.4488897,
 		lng: -70.6692655
 	}
 };

var image = {
    'clear-day':'https://icons.wxug.com/i/c/v4/clear.svg',
    'clear-night':'https://icons.wxug.com/i/c/v4/nt_clear.svg',
    'partly-cloudy-day':'https://icons.wxug.com/i/c/v4/partlycloudy.svg',
    'partly-cloudy-night':'https://icons.wxug.com/i/c/v4/nt_hazy.svg',
    'cloudy':'https://icons.wxug.com/i/c/v4/cloudy.svg',
    'rain':'https://icons.wxug.com/i/c/v4/rain.svg'
  }

var map;
var marker;

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: coords.santiago,
          zoom: 8
        });

        marker = new google.maps.Marker({position: coords.santiago, map: map});

      }

var cors = 'https://cors-anywhere.herokuapp.com/'
var url = 'https://api.darksky.net/forecast/';
var apiKey = 'e193913a8a2bab291b8999fae03fc8b7';
var queryParams = ['exclude=[minutely,flags]', 'lang=es', 'units=auto'];

$('#select').on('change', function() {
	var value = $(this).val()

	if (value === '0') {return null}

	map.setCenter(coords[value]);
    marker = new google.maps.Marker({
    position: (coords[value]),
    map: map

	});

	console.log(value)

	});


//Info Clima
$.ajax({
	url: cors + 
		 url + 
		 apiKey + 
		 '/' +
		 coords[value].lat + 
		 ',' +
		 coords[value].lng + 
		 '?'+ queryParams[0] + 
		 '&' + queryParams[1] + 
		 '&' + queryParams[2],
	type: 'GET',
	dataType: 'json',
	xhrFields: {cors: false};
})
.done(function(data) {
	console.log(data);
})
.fail(function(error) {
	console.log(error);
});

});




