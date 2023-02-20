import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../css/location.css'
import Navbar from '../comp/NavBar'

const center = [58.07814215851804, 13.020617914330508]


export default function Location() {
    
    return <div>
        <Navbar/>
        <div className='location-square'>
        <h1 className='location-header'>Område</h1>

                <p>ashfjasjfdkadkasjkd</p>
        </div>
        <div className='map-square'>
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
                    A pretty CSS3 popu1p. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    </div>
    </div>

}