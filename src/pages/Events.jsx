import React, { useState } from "react";
import useEvents from "../hooks/useEvents";
import MapView from "../components/MapView";
import LocationInput from "../components/LocationInput";
import { filterEvents } from "../utils/eventFilter";

export default function Events() {
  const { events: allEvents, loading } = useEvents();
  const [userLocation, setUserLocation] = useState(null);
  const [radiusKm, setRadiusKm] = useState(10); // default 10 km

  if (loading) return <p className="p-4">Loading events...</p>;

  // Filter events dynamically based on user location
  const nearbyEvents = userLocation ? filterEvents(allEvents, userLocation, radiusKm) : [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Nearby Events</h2>

      {/* Location Input + GPS button */}
      <LocationInput onLocationChange={setUserLocation} />

      {/* Radius filter */}
      {userLocation && (
        <div className="mt-2 mb-4">
          <label className="mr-2">Radius (km):</label>
          <input
            type="number"
            className="border rounded p-1 w-16"
            value={radiusKm}
            onChange={(e) => setRadiusKm(Number(e.target.value))}
          />
        </div>
      )}

      {/* Event List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nearbyEvents.map(event => (
          <div key={event.id} className="p-4 border rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="mt-6">
        <MapView userLocation={userLocation} events={nearbyEvents} />
      </div>
    </div>
  );
}
