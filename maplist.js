L.mapbox.accessToken = 'pk.eyJ1IjoiZ3NmZ2lybHN3aG9jb2RlIiwiYSI6IjA0MmYzMjVkNTRlMzc5Nzc1NjNiNDlhYTgwYjY5M2QxIn0.HB47REf6tM0lOZO8TWcl6A';

var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);
map = map.addControl(L.mapbox.geocoderControl('mapbox.places'));

var myLayer = L.mapbox.featureLayer().addTo(map);
var geojson = {
    type: 'FeatureCollection',


    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: 'Central Police Station',
            description: '766 Vallejo Street, San Francisco, CA 94133, USA',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.40996280000002, 37.7986593]
        }
    },
    {
   		type: 'Feature',
        properties: {
            title: 'Northern Police Station',
            description: '1125 Fillmore St San Francisco, CA 94115',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.43244520000002, 37.78019]
        }
    },
    {
       type: 'Feature',
        properties: {
            title: 'Richmond Police Station',
            description: '461 6th Ave San Francisco, CA 94118',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.46446679999997, 37.7799276]
        }
    },
    {
       type: 'Feature',
        properties: {
            title: 'Park Police Station',
            description: '461 6th Ave San Francisco, CA 94118',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.455287, 37.767797]
        }
    },
        {
        type: 'Feature',
        properties: {
            title: 'Southern Police Station',
            description: '1251 3rd St San Francisco, CA 94158',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.38941210000002, 37.7723802]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Mission Police Station',
            description: '630 Valencia Street, San Francisco, CA 94110, USA',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.42200500000001, 37.762849]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Taraval Police Station',
            description: '2345 24th Avenue, San Francisco, CA 94116, USA',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.48116549999997, 37.7438321]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Daly City Police',
            description: '333 90th Street, Daly City, CA 94015, USA',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.47357579999999,37.6904927]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'University Police',
            description: 'North State Drive, San Francisco, CA 94132, USA',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.48211090000001,37.7259911]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'San Francisco Police Department; Bayview Station',
            description: '201 Williams Avenue, San Francisco, CA 94124, USA',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.39790340000002,37.7297506]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Colma City Police Department',
            description: '1199 El Camino Real, Colma, CA 94014, USA',
            'marker-color': '#0000CC',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.45843079999997,37.677186]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Saint Francis Memorial Hospital',
            description: '900 Hyde Street, San Francisco, CA 94109, USA',
            'marker-color': '#ff4e50',
            'marker-size': 'large',
            'marker-symbol': 'hospital',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.41668620000002,37.7895482]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'San Francisco General Hospital',
            description: '900 Hyde Street, San Francisco, CA 94109, USA Potrero Ave & 22nd St, San Francisco, CA 94110, USA',
            'marker-color': '#ff4e50',
            'marker-size': 'large',
            'marker-symbol': 'hospital',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.40645,37.75554]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Kaiser Permanente Medical Center',
            description: '2200 O Farrell Street, San Francisco, CA 94115, USA',
            'marker-color': '#ff4e50',
            'marker-size': 'large',
            'marker-symbol': 'hospital',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.44124499999998,37.7825774]
        }
    },
      {
        type: 'Feature',
        properties: {
            title: 'San Francisco Fire Department',
            description: '1443 Grove Street, San Francisco, CA 94117, USA',
            'marker-color': '#930000',
            'marker-size': 'large',
            'marker-symbol': 'fire-station',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.44027829999999,37.7754446]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'San Francisco Fire Department: Station 11',
            description: '3880 26th Street, San Francisco, CA 94131, USA',
            'marker-color': '#930000',
            'marker-size': 'large',
            'marker-symbol': 'fire-station',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.4266005,37.7485495]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'San Francisco Fire Department: Station 43',
            description: '720 Moscow Street, San Francisco, CA 94112, USA',
            'marker-color': '#930000',
            'marker-size': 'large',
            'marker-symbol': 'fire-station',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.43161950000001,37.71626]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'San Francisco Fire Department: Station 43',
            description: '1000 Ocean Avenue, San Francisco, CA 94112, USA',
            'marker-color': '#930000',
            'marker-size': 'large',
            'marker-symbol': 'fire-station',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.45292469999998,37.7232908]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'San Francisco Fire Department: Station 39',
            description: '1091 Portola Drive, San Francisco, CA 94127, USA',
            'marker-color': '#930000',
            'marker-size': 'large',
            'marker-symbol': 'fire-station',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.45872459999998,37.7400451]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Daly City Fire Department: Station 93',
            description: '464 Martin Street, Daly City, CA 94014, USA',
            'marker-color': '#930000',
            'marker-size': 'large',
            'marker-symbol': 'fire-station',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.42003019999999,37.7024194]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Google SF',
            description: 'We are here!',
            'marker-color': '#339966',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.39055989999997,37.7900464]
        }
    },

    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});
