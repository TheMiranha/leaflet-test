import { useCallback, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Map, polyline } from "leaflet";
import { antPath } from 'leaflet-ant-path';

const points: { latitude: number, longitude: number, text: string }[] = [
  { latitude: -22.68882484078866, longitude: -47.6328992843628, text: 'Ponto 1' },
  { latitude: -22.6880, longitude: -47.6334, text: 'Ponto 1' },
  { latitude: -22.6870, longitude: -47.6334, text: 'Ponto 1' },
  { latitude: -22.6860, longitude: -47.6334, text: 'Ponto 1' },
  { latitude: -22.6850, longitude: -47.6334, text: 'Ponto 1' },
  { latitude: -22.6840, longitude: -47.6336, text: 'Ponto 1' },
  { latitude: -22.6830, longitude: -47.6335, text: 'Ponto 1' },
  { latitude: -22.6820, longitude: -47.6338, text: 'Ponto 1' },
  { latitude: -22.6810, longitude: -47.6342, text: 'Ponto 1' },
  { latitude: -22.6800, longitude: -47.6338, text: 'Ponto 1' },
]

const path = antPath([points.map(point => [point.latitude, point.longitude])], {
  use: polyline,
})

const ExemploDeMapa = () => {

  const [mapInstance, setMapInstance] = useState<Map | null>(null)
  const [loadedPath, setLoadedPath] = useState<boolean>(false)

  useEffect(() => {
    if (mapInstance && !loadedPath) {
      mapInstance.addLayer(path)
      setLoadedPath(true)
    }
  }, [mapInstance, loadedPath])

  const handleRect = useCallback((node: Map) => {
    if (node) {
      setMapInstance(node)
    }
  }, []);

  return (
    <div style={{ height: '100dvh', width: '100dvw', display: 'grid', placeItems: 'center', backgroundColor: '#242424' }}>
      <MapContainer center={[points[0].latitude, points[0].longitude]} zoom={13} ref={handleRect} style={{ height: "75vh", width: "75vw" }}>
        <TileLayer
          attribution='Qualquer texto'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* {
          points.map(point => (
            <Marker icon={legalIcon} position={[point.latitude, point.longitude]} key={point.latitude + '-' + point.longitude}>
              <Popup>
                {point.text}
              </Popup>
            </Marker>
          ))
        } */}

      </MapContainer>
    </div>
  );
};

export default ExemploDeMapa;