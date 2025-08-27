import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Fix for missing default markers in Vite
const DefaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
});
L.Marker.prototype.options.icon = DefaultIcon;

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
    <div className="w-full h-[400px]">
      <MapContainer
        center={[userLocation.lat, userLocation.lon]}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg shadow"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
        />

        {/* Auto-recenter when location changes */}
        <RecenterMap lat={userLocation.lat} lon={userLocation.lon} />

        {/* User Marker */}
        <Marker position={[userLocation.lat, userLocation.lon]}>
          <Popup>Your Location</Popup>
        </Marker>

        {/* Event Markers */}
        {events.map((event) => (
          <Marker key={event.id} position={[event.lat, event.lon]}>
            <Popup>
              <strong>{event.title}</strong> <br />
              {event.date}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
