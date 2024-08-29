import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export class MarkerInfo{
    constructor(id, latitude, longitude, icon, popUpHTML){
      this.id = id;
      this.latitude = latitude;
      this.longitude = longitude;
      this.icon = icon;
      this.popUpHTML = popUpHTML;
    }
}

export class MapInfo{
    constructor(center, zoom, scrollWheelZoom, allMarkerInfo){
        this.center = center;
        this.zoom = zoom;
        this.scrollWheelZoom = scrollWheelZoom;
        this.allMarkerInfo = allMarkerInfo;
    }
}

//Component that represents the map display
export const MapBox = ({mapInfo})=>{

    //Display the map with the determined markers
    return(
      <div className="Map-Box">
        <MapContainer center={mapInfo.center} zoom={mapInfo.zoom} scrollWheelZoom={mapInfo.scrollWheelZoom}>
          <TileLayer
            url="<FAKE_API_KEY>" //Place to put your API key in
          />
  
          {mapInfo.allMarkerInfo.map((marker)=>
          <Marker key={marker.id + " marker"} position = {[marker.latitude, marker.longitude]} icon={marker.icon}>
            <Popup key={marker.id + ' popup'}>
              {marker.popUpHTML()}
            </Popup>
          </Marker>)}
        </MapContainer>
      </div>
    )
  
  }