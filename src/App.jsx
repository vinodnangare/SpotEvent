import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MapView from "./components/MapView";
import EventCard from "./components/EventCard";
import LocationInput from "./components/LocationInput";

export default function App() {
  const [userLocation, setUserLocation] = useState(null);

  // Dummy events for demonstration
  const events = [
    { id: 1, title: "Tech Conference", date: "2025-09-01", lat: 28.6139, lon: 77.209 },
    { id: 2, title: "Music Festival", date: "2025-09-10", lat: 28.7041, lon: 77.1025 },
    { id: 3, title: "Startup Meetup", date: "2025-09-15", lat: 28.5355, lon: 77.391 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Nearby Events</h1>
        <LocationInput onLocationChange={setUserLocation} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {events.map((event) => (
            <EventCard key={event.id} title={event.title} date={event.date} />
          ))}
        </div>

        <div className="mt-6">
          <MapView userLocation={userLocation} events={events} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
