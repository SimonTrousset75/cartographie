import React, { Component } from 'react';
import './Sidenav.css';
import orange from '../images/logo-orange.png';
import vodafone from '../images/vodafone.png';
import yoigo from '../images/yoigo.png';
import movistar from '../images/movistar.png';
import sfr from '../images/Logo_SFR.png';
import bouygues from '../images/bouygues-telecom.png';
import free from '../images/logo-free.png';
import spain from '../images/Flag_of_Spain.png';

class Sidenav extends Component {
    _showMenu(id) {
      var dropdown = document.getElementById(id);
      if (id === 'espagne') {
        this.props.map.flyTo({center : [-3.7037902 ,40.4167754]});
      } else if (id === 'operateurs' || id === 'couverture') {
        this.props.map.flyTo({center : [2.56, 47.97]})
      }
      if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "flex";
      }
    }
    
    _changeIndexSPAINO() {
        let visibility = this.props.map.getLayoutProperty('spain', 'visibility');
      let visibility_ = this.props.map.getLayoutProperty('spainO', 'visibility');
  
        if (visibility === 'none' && visibility_ === 'none') {
          this.props.map.setLayoutProperty('spain', 'visibility', 'visible');
          this.props.map.setLayoutProperty('spainO', 'visibility', 'visible');
          document.getElementById('couverture20').innerHTML = "Plus de 20km : 8.51%";
          document.getElementById('couverture20-10').innerHTML = "Entre 10 et 20km : 9.78%";
          document.getElementById('couverture10-5').innerHTML = "Entre 5 et 10km : 15.80%";
          document.getElementById('couverture5').innerHTML = "Moins de 5km : 60.38%";
      }
        else {
          this.props.map.setLayoutProperty('spain', 'visibility', 'none');
          this.props.map.setLayoutProperty('spainO', 'visibility', 'none');
          document.getElementById('couverture20').innerHTML = "";
          document.getElementById('couverture20-10').innerHTML = "";
          document.getElementById('couverture10-5').innerHTML = "";
          document.getElementById('couverture5').innerHTML = "";
      }
    }
         
    _changeIndexSPAINV() {
      let visibility = this.props.map.getLayoutProperty('spainV', 'visibility');
      let visibility_ = this.props.map.getLayoutProperty('spainVC', 'visibility');
  
      if (visibility === 'none' && visibility_ === 'none') {
        this.props.map.setLayoutProperty('spainV', 'visibility', 'visible');
        this.props.map.setLayoutProperty('spainVC', 'visibility', 'visible');
          document.getElementById('couverture20').innerHTML = "Plus de 20km : 11.34%";
          document.getElementById('couverture20-10').innerHTML = "Entre 10 et 20km : 11.11%";
          document.getElementById('couverture10-5').innerHTML = "Entre 5 et 10km : 15.50%";
          document.getElementById('couverture5').innerHTML = "Moins de 5km : 56.09%";
      }
      else {
        this.props.map.setLayoutProperty('spainV', 'visibility', 'none');
        this.props.map.setLayoutProperty('spainVC', 'visibility', 'none');
          document.getElementById('couverture20').innerHTML = "";
          document.getElementById('couverture20-10').innerHTML = "";
          document.getElementById('couverture10-5').innerHTML = "";
          document.getElementById('couverture5').innerHTML = "";
      }
    }
  
    _changeIndexSPAINY() {
        let visibility = this.props.map.getLayoutProperty('spainY', 'visibility');
        let visibility_ = this.props.map.getLayoutProperty('spainYC', 'visibility');
  
        if (visibility === 'none' && visibility_ === 'none') {
          this.props.map.setLayoutProperty('spainY', 'visibility', 'visible');
          this.props.map.setLayoutProperty('spainYC', 'visibility', 'visible');
            document.getElementById('couverture20').innerHTML = "Plus de 20km : 14.90%";
            document.getElementById('couverture20-10').innerHTML = "Entre 10 et 20km : 10.37%";
            document.getElementById('couverture10-5').innerHTML = "Entre 5 et 10km : 14.91%";
            document.getElementById('couverture5').innerHTML = "Moins de 5km : 52.90%";
        }
        else {
          this.props.map.setLayoutProperty('spainY', 'visibility', 'none');
          this.props.map.setLayoutProperty('spainYC', 'visibility', 'none');
            document.getElementById('couverture20').innerHTML = "";
            document.getElementById('couverture20-10').innerHTML = "";
            document.getElementById('couverture10-5').innerHTML = "";
            document.getElementById('couverture5').innerHTML = "";
        }
      }
  
    _changeIndexSPAINMS() {
      let visibility = this.props.map.getLayoutProperty('spainMS', 'visibility');
      let visibility_ = this.props.map.getLayoutProperty('spainMSC', 'visibility');
      
      if (visibility === 'none' && visibility_ === 'none') {
        this.props.map.setLayoutProperty('spainMS', 'visibility', 'visible');
        this.props.map.setLayoutProperty('spainMSC', 'visibility', 'visible');
          document.getElementById('couverture20').innerHTML = "Plus de 20km : 8.39%";
          document.getElementById('couverture20-10').innerHTML = "Entre 10 et 20km : 9.34%";
          document.getElementById('couverture10-5').innerHTML = "Entre 5 et 10km : 15.95%";
          document.getElementById('couverture5').innerHTML = "Moins de 5km : 60.27%";
      }
      else {
        this.props.map.setLayoutProperty('spainMS', 'visibility', 'none');
        this.props.map.setLayoutProperty('spainMSC', 'visibility', 'none');
          document.getElementById('couverture20').innerHTML = "";
          document.getElementById('couverture20-10').innerHTML = "";
          document.getElementById('couverture10-5').innerHTML = "";
          document.getElementById('couverture5').innerHTML = "";
        }
    }
   
  _changeLayerVisibility(layerID) {
    let visibility = this.props.map.getLayoutProperty(layerID, 'visibility');
  
    if (visibility === 'none') {
      this.props.map.setLayoutProperty(layerID, 'visibility', 'visible');
    } else {
      this.props.map.setLayoutProperty(layerID, 'visibility', 'none');
    }
  }

  _reset() {
    this.props.map.setLayoutProperty('spain', 'visibility', 'none');
    this.props.map.setLayoutProperty('spainO', 'visibility', 'none');
    this.props.map.setLayoutProperty('spainV', 'visibility', 'none');
    this.props.map.setLayoutProperty('spainVC', 'visibility', 'none');
    this.props.map.setLayoutProperty('spainY', 'visibility', 'none');
    this.props.map.setLayoutProperty('spainYC', 'visibility', 'none');
    this.props.map.setLayoutProperty('spainMS', 'visibility', 'none');
    this.props.map.setLayoutProperty('spainMSC', 'visibility', 'none');
    this.props.map.setLayoutProperty('orange', 'visibility', 'none');
    this.props.map.setLayoutProperty('free', 'visibility', 'none');
    this.props.map.setLayoutProperty('sfr', 'visibility', 'none');
    this.props.map.setLayoutProperty('bt', 'visibility', 'none');
    this.props.map.setLayoutProperty('other', 'visibility', 'none');
    this.props.map.setLayoutProperty('4GcovORANGE', 'visibility', 'none');
    this.props.map.setLayoutProperty('4GcovFREE', 'visibility', 'none');
    this.props.map.setLayoutProperty('4GcovSFR', 'visibility', 'none');
    this.props.map.setLayoutProperty('4GcovBT', 'visibility', 'none');
  }
    render () {
        return (
            <div className="sidenav">
                <button className="dropdown-btn" onClick={() => this._showMenu('operateurs')}>Opérateurs</button>
                <div className="dropdown-container" id="operateurs">
                    <button className="button" onClick={() => this._changeLayerVisibility('orange')}>
                        <img className="logoOrange" alt="logo orange" src={orange}></img>
                        <div>Orange</div>
                    </button>
                    <button className="button" onClick={() => this._changeLayerVisibility('sfr')}>
                        <img className="logoSFR" alt="logo sfr" src={sfr}></img>
                        <div>SFR</div>
                    </button>
                    <button className="button" onClick={() => this._changeLayerVisibility('bt')}>
                        <img className="logoBouygues" alt="logo bouygues" src={bouygues}></img>
                        <div>Bouygues</div>
                    </button>
                    <button className="button" onClick={() => this._changeLayerVisibility('free')}>
                        <img className="logoFREE" alt="logo free" src={free}></img>
                        <div>Free</div>
                    </button>
                    <button className="button" onClick={() => this._changeLayerVisibility('other')}>Autres</button>
                </div>
                <button className="dropdown-btn" onClick={() => this._showMenu('couverture')}>Couverture 4G</button>
                <div className="dropdown-container" id="couverture">
                    <button className="button" onClick={() => this._changeLayerVisibility('4GcovOrange')}>
                        <img className="logoOrange" alt="logo orange" src={orange}></img>
                        <div>Orange</div>
                    </button>
                    <button className="button" onClick={() => this._changeLayerVisibility('4GcovSFR')}>
                        <img className="logoSFR" alt="logo sfr" src={sfr}></img>
                        <div>SFR</div>
                    </button>
                    <button className="button" onClick={() => this._changeLayerVisibility('4GcovBT')}>
                        <img className="logoBouygues" alt="logo bouygues" src={bouygues}></img>
                        <div>Bouygues</div>
                    </button>
                    <button className="button" onClick={() => this._changeLayerVisibility('4GcovFREE')}>
                        <img className="logoFREE" alt="logo free" src={free}></img>
                        <div>Free</div>
                    </button>
                </div>
                <button className="dropdown-btn"  onClick={() => this._showMenu('espagne')}>
                    <img className="logoEspagne" alt="logo espagne" src={spain}></img>
                    <div>Espagne</div>
                </button>
                <div className="dropdown-container"  id="espagne">
	                <button className="button"  onClick={() => this._changeIndexSPAINO()}>
                    <img className="logoOrange" alt="logo orange" src={orange}></img>
                    <div>Orange</div>                
                </button>
                <button className="button" onClick={() => this._changeIndexSPAINV()}>
                    <img className="logoVodafone" alt="logo vodafone" src={vodafone}></img>
                    <div>Vodafone</div>
                </button>
                <button className="button" onClick={() => this._changeIndexSPAINY()}>
                    <img className="logoYoigo" alt="logo yoigo" src={yoigo}></img>
                    <div>Yoigo</div>
                </button>
                <button className="button" onClick={() => this._changeIndexSPAINMS()}>
                    <img className="logoMovistar" alt="logo movistar" src={movistar}></img>
                    <div>MoviStar</div>
                </button>
                </div>
                <button className="dropdown-btn"  onClick={() => this._reset()}>
                  <div>Reset</div>
                </button>
            </div>
        );
    }
}

export default Sidenav;