import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';
import Sidenav from './components/Sidenav.js';
import Mapoverlay from './components/MapOverlay';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tmpMap:{},
    };
  }

  ////////////////////////////////////////////////// INITIALISATION DE LA MAP /////////////////////////////////////////////////////////
  componentDidMount() {
    let map = new mapboxgl.Map({
      zoom: 6,
      center: [2.56, 47.97],
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9'
    });

    //////////////////////////////////////////////////  CREATION DES LAYEURS ////////////////////////////////////////////////////////////////
    map.on('load', function() {
      map.addLayer({
        id: "spainVC",
        type: 'fill',
        source: {
          type: 'vector',
		      url: 'mapbox://mzabalza.60tcpkdm',
        },
        'source-layer': 'spainCitiesDistanceVodafonePlus',
        layout: {
          visibility: 'none',
        },
        paint: {
		      'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'closestDistShop'],
            0, '#ff0000',
            0.1, '#ff3300',
            0.5, '#ff6600',
            1, '#ff9933',
            1.5, '#ffcc00',
            2, '#ffff00',
            5, '#ffff99',
            10, '#ffffcc',
            20, '#ccccff',
            50, '#9999ff'
          ],
		      'fill-opacity': 0.6
        },
        minzoom:11,  
	    })
      map.addLayer({
        id: "spainYC",
        type: 'fill',
        source: {
          type: 'vector',
		      url: 'mapbox://mzabalza.ac06avzd',
        },
        'source-layer': 'spainCitiesDistanceYoigoPlus',
        layout: {
          visibility: 'none',
        },
        paint: {
		      'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'closestDistShop'],
            0, '#ff0000',
            0.1, '#ff3300',
            0.5, '#ff6600',
            1, '#ff9933',
            1.5, '#ffcc00',
            2, '#ffff00',
            5, '#ffff99',
            10, '#ffffcc',
            20, '#ccccff',
            50, '#9999ff'
          ],
		      'fill-opacity': 0.6
        },
        minzoom:11,  
	    })
      map.addLayer({
        id: "spainO",
        type: 'fill',
        source: {
          type: 'vector',
		      url: 'mapbox://mzabalza.3d5lsp6v',
        },
        'source-layer': 'spainCitiesDistanceOrangePlus',
        layout: {
          visibility: 'none',
        },
        paint: {
		      'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'closestDistShop'],
            0, '#ff0000',
            0.1, '#ff3300',
            0.5, '#ff6600',
            1, '#ff9933',
            1.5, '#ffcc00',
            2, '#ffff00',
            5, '#ffff99',
            10, '#ffffcc',
            20, '#ccccff',
            50, '#9999ff'
          ],
		      'fill-opacity': 0.6
        },
        minzoom:11,  
	    })
      map.addLayer({
        id: "spainMSC",
        type: 'fill',
        source: {
          type: 'vector',
		      url: 'mapbox://mzabalza.5vz70bg0',
        },
        'source-layer': 'spainCitiesDistanceMovieStarPlus',
        layout: {
          visibility: 'none',
        },
        paint: {
		      'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'closestDistShop'],
            0, '#ff0000',
            0.1, '#ff3300',
            0.5, '#ff6600',
            1, '#ff9933',
            1.5, '#ffcc00',
            2, '#ffff00',
            5, '#ffff99',
            10, '#ffffcc',
            20, '#ccccff',
            50, '#9999ff'
          ],
		      'fill-opacity': 0.6
        },
        minzoom:11,  
	    })
      map.addLayer({
        id: "spainMS",
        type: 'fill',
        source: {
          type: 'vector',
		      url: 'mapbox://mzabalza.13uy66vc',
        },
        'source-layer': 'spainCitiesDistanceMovieStar',
        layout: {
          visibility: 'none',
        },
        paint: {
		      'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'closestDistShop'],
            0, '#ff0000',
            5, '#ff3300',
            10, '#ff6600',
            20, '#ff9933',
            30, '#ffcc00',
            40, '#ffff00',
            50, '#ffff99',
            60, '#ffffcc',
            70, '#ccccff',
            80, '#9999ff'
          ],
		      'fill-opacity': 0.6
        },
        maxzoom:11,  
	    })
      map.addLayer({
        id: "spainY",
        type: 'fill',
        source: {
          type: 'vector',
		      url: 'mapbox://mzabalza.aokp9het',
        },
        'source-layer': 'spainCitiesDistanceYoigo',
        layout: {
		      visibility: 'none',
        },
        paint: {
		      'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'closestDistShop'],
            0, '#ff0000',
            5, '#ff3300',
            10, '#ff6600',
            20, '#ff9933',
            30, '#ffcc00',
            40, '#ffff00',
            50, '#ffff99',
            60, '#ffffcc',
            70, '#ccccff',
            80, '#9999ff'
          ],
		      'fill-opacity': 0.6
        },  
        maxzoom:11,  
	    })
      map.addLayer({
        id: "spainV",
        type: 'fill',
        source: {
          type: 'vector',
		      url: 'mapbox://mzabalza.6u1tro28',
        },
        'source-layer': 'spainCitiesDistanceVodafone',
        layout: {
		      visibility: 'none',
        },
        paint: {
		      'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'closestDistShop'],
            0, '#ff0000',
            5, '#ff3300',
            10, '#ff6600',
            20, '#ff9933',
            30, '#ffcc00',
            40, '#ffff00',
            50, '#ffff99',
            60, '#ffffcc',
            70, '#ccccff',
            80, '#9999ff'
          ],
		      'fill-opacity': 0.6
        },  
        maxzoom:11,  
	    })
	    map.addLayer({
        id: "spain",
        type: 'fill',
        source: {
          type: 'vector',
		      url: 'mapbox://mzabalza.3m2e2edz',
        },
        'source-layer': 'spainCitiesDistance',
        layout: {
		      visibility: 'none',
        },
        paint: {
		      'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'closestDistShop'],
            0, '#ff0000',
            5, '#ff3300',
            10, '#ff6600',
            20, '#ff9933',
            30, '#ffcc00',
            40, '#ffff00',
            50, '#ffff99',
            60, '#ffffcc',
            70, '#ccccff',
            80, '#9999ff'
          ],
		      'fill-opacity': 0.6
        },  
        maxzoom:11,  
	    })
      map.addLayer({
        id: "4GcovOrange",
        type: "fill",
        source: {
          type: 'vector',
          url: 'mapbox://mzabalza.bhto9vib',
        },
        'source-layer': 'ORANGE_cov',
        layout: {
            visibility: 'none',
        },
        paint: {
         'fill-color': '#884812',
         'fill-opacity': 0.3
        },
	  'minzoom' : 1,
      });
      map.addLayer({
        id: "4GcovSFR",
        type: "fill",
        source: {
          type: 'vector',
          url: 'mapbox://mzabalza.55nkitf6',
        },
        'source-layer': 'sfr2',
        layout: {
          visibility: 'none'
        },
        paint: {
          'fill-color': '#e5211d',
          'fill-opacity': 0.3
        }
      });
      map.addLayer({
        id: "4GcovBT",
        type: "fill",
        source: {
          type: 'vector',
          url: 'mapbox://mzabalza.9f1g8l0h',
        },
        'source-layer': 'BT_cov',
        layout: {
          visibility: 'none'
        },
        paint: {
          'fill-color': '#568088',
          'fill-opacity': 0.3
        }
      });
      map.addLayer({
        id: "4GcovFREE",
        type: "fill",
        source: {
          type: 'vector',
          url: 'mapbox://mzabalza.4j4izcq4',
        },
        'source-layer': 'FREE_cov',
        layout: {
          visibility: 'none'
        },
        paint: {
          'fill-color': '#ff3359',
          'fill-opacity': 0.3
        }
      });
      map.addLayer({
        id: "other",
        type: "circle",
        source: {
          type: 'vector',
          url: 'mapbox://mzabalza.833yrq8s',
        },
        'source-layer': 'alexis_supports',
        layout: {
          visibility: 'none'
        },
          paint: {
          'circle-color': [
            'match',
            ['get', 'support_carto_Proprietaire_niv2'],
            'BT', '#3E38F2',
            'SFR', "#3E38F2",
            'IFW-FREE', "#3E38F2",
            'ORANGE', "#3E38F2",
            '#ccc'
          ],
          "circle-radius": {
            'base' : 1.75,
            'stops' : [[12, 2], [22, 180]],
          },
          "circle-opacity": [
            'match',
            ['get', 'support_carto_Proprietaire_niv2'],
            'BT', 0,
            'SFR', 0,
            'ORANGE', 0,
            'IFW-FREE', 0,
            0.5
          ],
        }
      });
      map.addLayer({
          id: "orange",
          type: "circle",
          source: {
            type: 'vector',
            url: 'mapbox://mzabalza.833yrq8s',
          },
          'source-layer': 'alexis_supports',
          layout: {
            visibility: 'none'
          },
          paint: {
            'circle-color': [
              'match',
              ['get', 'support_carto_Proprietaire_niv2'],
              'ORANGE', '#FF7410',
               '#ccc'
            ],
            "circle-radius":
                5,
            "circle-opacity": [
              'match',
              ['get', 'support_carto_Proprietaire_niv2'],
              'ORANGE', 0.7,
               0
            ],
          }
      });
      map.addLayer({
        id: "sfr",
        type: "circle",
        source: {
          type: 'vector',
          url: 'mapbox://mzabalza.833yrq8s',
        },
        'source-layer': 'alexis_supports',
        layout: {
          visibility: 'none'
        },
        paint: {
          'circle-color': [
            'match',
            ['get', 'support_carto_Proprietaire_niv2'],
            'SFR', '#FF1003',
              '#ccc'
          ],
          'circle-radius': {
            'base': 1.75,
            'stops': [[5, 2], [22, 180]]
            },
          "circle-opacity": [
            'match',
            ['get', 'support_carto_Proprietaire_niv2'],
            'SFR', 0.7,
              0
          ],
        }
      });
      map.addLayer({
        id: "free",
        type: "circle",
        source: {
          type: 'vector',
          url: 'mapbox://mzabalza.833yrq8s',
        },
        'source-layer': 'alexis_supports',
        layout: {
          visibility: 'none'
        },
        paint: {
          'circle-color': [
            'match',
            ['get', 'support_carto_Proprietaire_niv2'],
            'IFW-FREE', '#4b0708',
            '#ccc'
          ],
          "circle-radius":
              5,
          "circle-opacity": [
            'match',
            ['get', 'support_carto_Proprietaire_niv2'],
            'IFW-FREE', 0.7,
            0
          ],
        }
      });
      map.addLayer({
        id: "bt",
        type: "circle",
        source: {
          type: 'vector',
          url: 'mapbox://mzabalza.833yrq8s',
        },
        'source-layer': 'alexis_supports',
        layout: {
          visibility: 'none'
        },
        paint: {
          'circle-color': [
            'match',
            ['get', 'support_carto_Proprietaire_niv2'],
            'BT', '#3E38F2',
            '#ccc'
          ],
          "circle-radius":
              5,
          "circle-opacity": [
            'match',
            ['get', 'support_carto_Proprietaire_niv2'],
            'BT', 0.7,
            0
          ],
        }
      });
    
      /////////////////////////////////////////// RECONNAISSANCE DE SOURIS /////////////////////////////////////////////////////
      map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['spain', 'spainY', 'spainV', 'spainMS', 'bt', 'free', 'orange', 'sfr']});
        if (features.length > 0) {
          var feature = features[0];
          console.log(feature);
          var name = feature.properties.municipio;
          var tmp = feature.properties.closestDistShop;
          var shop = Math.round(tmp*100)/100
          var lat = feature.properties.lat;
          var long = feature.properties.long;
          var coor = 'https://maps.googleapis.com/maps/api/streetview?size=200x200&location=' + lat + ', ' + long + '&fov=90&heading=235&pitch=10&key=AIzaSyDK24FXks1-EV9dwFSboRKy4QLHKBUUjLQ';
        }
        document.getElementById('name').innerHTML = JSON.stringify(name, null, 2);
        document.getElementById('shop').innerHTML = JSON.stringify(shop, null, 2);
        document.getElementById('coord').innerHTML = "<img src=\"" + coor + "\" alt=\"placez vous sur un point\">";
      });
    });
    this.setState({tmpMap : map});
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };
    return (
        <div>
          <div style={style} ref={el => this.mapContainer = el} />
          <Mapoverlay/>
          <Sidenav map={this.state.tmpMap}/>
        </div>
    );
  }
}

export default App;