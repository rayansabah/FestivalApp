import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../css/location.css'

const center = [58.07814215851804, 13.020617914330508]


export default function Location() {
    
    return <div className='rcorners1'>
        <MapContainer style={{ height: '90%', width:'100%'}}
            center={center}
            zoom={13}
            attributionControl={false}
            zoomControl={false}>
            
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    </div>

}