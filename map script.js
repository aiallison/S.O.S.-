L.mapbox.accessToken = 'pk.eyJ1IjoiZ3NmZ2lybHN3aG9jb2RlIiwiYSI6IjA0MmYzMjVkNTRlMzc5Nzc1NjNiNDlhYTgwYjY5M2QxIn0.HB47REf6tM0lOZO8TWcl6A';
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

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
            'marker-color': '#f9d62e',
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
            'marker-color': '#eae374',
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
            'marker-color': '#BE9A6B',
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
            'marker-color': '#7ec9b1',
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
            'marker-color': '#fc913a',
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
            'marker-color': '#ff4e50',
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
            'marker-color': '#ff4e50',
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
            'marker-color': '#ff4e50',
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
            'marker-color': '#ff4e50',
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
            'marker-color': '#ff4e50',
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
            'marker-color': '#ff4e50',
            'marker-size': 'large',
            'marker-symbol': 'police',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.45843079999997,37.677186]
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
