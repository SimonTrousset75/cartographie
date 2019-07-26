import React, { Component } from 'react';
import './MapOverlay.css';

class Mapoverlay extends Component {
    render () {
        return (
        <div className="map-overlay top">
            <div className="map-overlay-inner">
              <div className="legend" id="legend">
                <div className="bar"></div>
                  <div className='info'>
                    <div>0km</div>
                    <div>+80km</div>
                  </div>
                  <div>Taux de couverture</div>
                  <div id="couverture20"></div>
                  <div id="couverture20-10"></div>
                  <div id="couverture10-5"></div>
                  <div id="couverture5"></div>
              </div>
            </div>
            <div className="map-overlay-inner">
              <h2>Data Features</h2>
              <div>
                <b>Commune</b>
              </div>
              <div id="name"></div>
              <div>
                <b>Distance au point de vente</b>
              </div>
              <div id="shop"></div>
              <div>
                <b>Location antenne</b>
              </div>
              <div id="coord"></div>
            </div>
          </div>
        )
      }
}

export default Mapoverlay;