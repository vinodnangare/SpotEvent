import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MapView from "./components/MapView";
import EventCard from "./components/EventCard";
import LocationInput from "./components/LocationInput";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Nearby Events</h1>
        <LocationInput />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <EventCard title="Tech Conference" date="2025-09-01" />
          <EventCard title="Music Festival" date="2025-09-10" />
          <EventCard title="Startup Meetup" date="2025-09-15" />
        </div>

        <div className="mt-6">
          <MapView />
        </div>
      </main>

      <Footer />
    </div>
  );
}
