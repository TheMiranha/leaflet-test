import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const points: { latitude: number, longitude: number, text: string }[] = [
  { latitude: -22.68882484078866, longitude: -47.6328992843628, text: 'Ponto 1' },
  { latitude: -22.685, longitude: -47.605, text: 'Ponto 2' },
]

const ExemploDeMapa = () => {
  const mapRef = useRef(null);

  return (
    <div style={{ height: '100dvh', width: '100dvw', display: 'grid', placeItems: 'center', backgroundColor: '#242424' }}>
      <MapContainer center={[points[0].latitude, points[0].longitude]} zoom={13} ref={mapRef} style={{ height: "75vh", width: "75vw" }}>
        <TileLayer
          attribution='Qualquer texto'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          points.map(point => (
            <Marker position={[point.latitude, point.longitude]} key={point.latitude + '-' + point.longitude}>
              <Popup>
                {point.text}
              </Popup>
            </Marker>
          ))
        }

      </MapContainer>
    </div>
  );
};

export default ExemploDeMapa;