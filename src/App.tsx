import { useRef } from "react";
import { MapContainer, Marker, Popup, SVGOverlay, TileLayer } from "react-leaflet";
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

        <SVGOverlay attributes={{ stroke: 'red' }} bounds={[[points[0].latitude, points[0].longitude], [points[0].latitude + 0.005, points[0].longitude + 0.005]]}>
          <rect x="0" y="0" width="100%" height="100%" fill="#FEFEFE" />
          <text x="20%" y="50%" stroke="black">
            Literalmente qualquer coisa
            {/* pode ser um ícone */}
            {/* pode ser um componente inteiro */}
            {/* realmente qualquer coisa */}
          </text>
        </SVGOverlay>

      </MapContainer>
    </div>
  );
};

export default ExemploDeMapa;