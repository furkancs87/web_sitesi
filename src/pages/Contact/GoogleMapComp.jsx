import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function GoogleMapComp() {
    return (
        <div>
           <Map google={this.props.google} zoom={14}>
 
               <Marker onClick={this.onMarkerClick}
                 name={'Current location'} />

               <InfoWindow onClose={this.onInfoWindowClose}>

               </InfoWindow>
            </Map>
        </div>
    );
}

//export default GoogleMapComp;

export default GoogleApiWrapper({
    apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(GoogleMapComp)