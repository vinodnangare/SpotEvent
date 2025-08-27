import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Component to recenter map when location changes
function RecenterMap({ lat, lon }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon], 12); // zoom 12 when new city selected
  }, [lat, lon, map]);
  return null;
}

export default function MapView({ userLocation, events }) {
  if (!userLocation)
    return <p className="text-gray-600">Search for a city or allow GPS to see nearby events.</p>;

  return (
    <MapContainer
      center={[userLocation.lat, userLocation.lon]}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%" }}
      className="rounded-lg shadow"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
      />
      
      {/* User Marker */}
      <Marker position={[userLocation.lat, userLocation.lon]}>
        <Popup>Your Location</Popup>
      </Marker>
        {/* Auto-recenter when location changes */}
        <RecenterMap lat={userLocation.lat} lon={userLocation.lon} />

        {/* User Marker */}
        <Marker position={[userLocation.lat, userLocation.lon]}>
          <Popup>Your Location</Popup
        </Marker>
      ))}
    </MapContainer>
  );
}
