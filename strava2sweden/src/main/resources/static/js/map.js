mapboxgl.accessToken = 'pk.eyJ1Ijoia2FzcGVydmVyaHVsc3QiLCJhIjoiY2s5cmU1ZnBmMHRsMjNvbjFyaTBmY2V4aiJ9.WdmMCrvixX_QxVjt8IbCPw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [14.299349, 55.347577],
    interactive: false,
    zoom: 4.75
});

// Kontich Kazerne
var origin = [4.473008,51.127661];  

// Ransäter, Sweden
var destination = [13.416498,59.791161];

//complete route
var route = [ 
    origin,
    [4.430101,51.136226], 
    [4.420488,51.188760], 
    [4.447954,51.215435], 
    [4.581163,51.199948], 
    [4.671800,51.238655], 
    [4.778917,51.247252], 
    [4.869554,51.291931], 
    [4.987657,51.297083], 
    [5.098894,51.297942], 
    [5.230730,51.332276], 
    [5.428483,51.404294], 
    [5.725114,51.417999], 
    [5.807512,51.407721], 
    [5.922868,51.370014], 
    [6.126115,51.392299], 
    [6.233232,51.385443], 
    [6.274431,51.392299], 
    [6.323869,51.387158], 
    [6.472185,51.409434], 
    [6.615007,51.435125], 
    [6.774309,51.447109], 
    [6.793535,51.447109], 
    [6.829240,51.529200], 
    [6.972063,51.551407], 
    [7.016008,51.573604], 
    [7.057207,51.663987], 
    [7.139604,51.689534], 
    [7.186296,51.801770], 
    [7.400529,51.901867], 
    [7.491167,51.903562], 
    [7.559831,51.914870], 
    [7.562578,51.989352], 
    [7.677934,52.104217], 
    [7.856462,52.215422], 
    [7.930620,52.272601], 
    [8.018510,52.344810], 
    [8.043230,52.378356], 
    [8.034990,52.440347], 
    [8.109148,52.528995], 
    [8.109148,52.594112], 
    [8.158586,52.650802], 
    [8.224504,52.851957], 
    [8.381059,52.909969], 
    [8.482683,52.926529], 
    [8.812273,53.027412], 
    [8.884422,53.041752], 
    [8.950340,53.030192], 
    [9.172814,53.086315], 
    [9.332115,53.231238], 
    [9.403526,53.247676], 
    [9.741356,53.369117], 
    [10.007775,53.383864],
    [10.040734,53.509818],
    [10.079852,53.505314],
    [10.126544,53.521646],
    [10.159503,53.555923],
    [10.228168,53.599953],
    [10.283099,53.647193],
    [10.351764,53.739890],
    [10.500079,53.819413],
    [10.598956,53.853449],
    [10.746375,53.947918],
    [10.729895,54.051241],
    [10.793067,54.123736],
    [10.880958,54.176819],
    [10.897437,54.215382],
    [10.864478,54.287590],
    [10.971595,54.359672],
    [11.086139,54.378745],
    [11.388263,54.675208],
    [11.498126,54.785210],
    [11.673908,54.801045],
    [11.846942,54.856418],
    [11.921100,54.903820],
    [11.989764,54.962206],
    [11.984271,55.033102],
    [11.929340,55.125865],
    [11.967792,55.210578],
    [12.135333,55.480764],
    [12.173356,55.508696],
    [12.324418,55.611215],
    [12.431535,55.629826],
    [12.448014,55.615869],
    [12.516679,55.617420],
    [12.533158,55.625174],
    [12.670487,55.631376],
    [12.788591,55.584834],
    [12.923173,55.563096],
    [13.003085,55.549568],
    [13.055271,55.551122],
    [13.107456,55.582183],
    [13.099216,55.639581],
    [13.088229,55.724747],
    [12.981113,55.771123],
    [12.774184,55.990037],
    [12.774184,56.083635],
    [12.836023,56.144933],
    [12.852502,56.193866],
    [12.893701,56.218308],
    [12.954126,56.437592],
    [12.940393,56.463397],
    [12.965112,56.540706],
    [12.877222,56.728846],
    [12.435022,56.975147],
    [12.212684,57.247999],
    [12.196204,57.372605],
    [12.149512,57.430314],
    [12.047889,57.470213],
    [12.068035,57.594551],
    [11.985637,57.750240],
    [12.018596,57.854148],
    [12.157846,57.971850],
    [12.171442,58.051968],
    [12.132990,58.166599],
    [12.229120,58.228838],
    [12.327997,58.301072],
    [12.292292,58.333484],
    [12.251093,58.355106],
    [12.292292,58.401188],
    [12.275812,58.480251],
    [12.399409,58.580619],
    [12.407648,58.673562],
    [12.443354,58.697829],
    [12.454340,58.734911],
    [12.479059,58.749163],
    [12.623260,58.974283],
    [12.689178,59.011070],
    [12.669952,59.036515],
    [12.708404,59.087349],
    [12.922637,59.138107],
    [13.007781,59.162678],
    [13.002288,59.254069],
    [13.106658,59.327006],
    [13.139617,59.364816],
    [13.285186,59.391397],
    [13.425262,59.383005],
    [13.414275,59.483571],
    [13.480193,59.562009],
    [13.430755,59.630120],
    [13.444488,59.685619],
    [13.458221,59.691163],
    [13.480193,59.707792],
    [13.447234,59.763163],
    destination
];


var distanceExLeaders = document.getElementById('distanceExLeaders').innerHTML;
var distanceCurrentLeaders = document.getElementById('distanceCurrentLeaders').innerHTML;


function transfromDistance2Map(distance) {
    return Math.round((distance / 1482) * route.length);
}

// add chiro koka icon on start
var geojson1  = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Chiro Koka',
                'iconSize': [50, 50]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [3.473008,51.127661]
            }
        }
    ]
};

geojson1.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = "url('https://chirosintjan.be/chirosintjan/wp-content/uploads/2015/09/cropped-chiro.png')"
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
     
    // add marker to map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
    });


// add marker on destination
var geojson2  = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Ransäter, Sweden',
                'iconSize': [60, 50]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [14.416498,59.691161]
            }
        }
    ]
};

geojson2.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = "url('https://www.1001-kochrezepte.de/wp-content/uploads/2016/08/koettbullar.jpg')"
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
         
    // add marker to map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
    });


var locationEx = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': route[transfromDistance2Map(distanceExLeaders)]
            }
        }
    ]
};

var locationCurrent = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': route[transfromDistance2Map(distanceCurrentLeaders)]
            }
        }
    ]
};


//change language to dutch
// map.setLayoutProperty('country-label', 'text-field', [
//     'get',
//     'name_' + 'nld'
//     ]);


map.on('load', function () {
    //route
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': 
                    route
            }
        }
    });
    //locationCurrent
    map.addSource('locationCurrent', {
        'type': 'geojson',
        'data': locationCurrent
    });
    //locationEx
    map.addSource('locationEx', {
        'type': 'geojson',
        'data': locationEx
    });
    //route
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 5
        }
    });
    //locationCurrent
    map.addLayer({
        'id': 'locationCurrent',
        'source': 'locationCurrent',
        'type': 'symbol',
        'layout': {
            'icon-image': 'airport-15',
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
            'icon-size': 2
        }
    });
    //locationEx
    map.addLayer({
        'id': 'locationEx',
        'source': 'locationEx',
        'type': 'symbol',
        'layout': {
            'icon-image': 'bicycle-15',
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
            'icon-size': 2
        }
    });
});

