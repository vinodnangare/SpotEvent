import React, { useState } from "react";

export default function LocationInput({ onLocationChange }) {
  const [location, setLocation] = useState("");

  const handleManualSubmit = async (e) => {
    e.preventDefault();

    // Try to parse coordinates first
    const parts = location.split(",");
    if (parts.length === 2) {
      const lat = parseFloat(parts[0]);
      const lon = parseFloat(parts[1]);
      if (!isNaN(lat) && !isNaN(lon)) {
        if (onLocationChange) onLocationChange({ lat, lon });
        return;
      }
    }

    // Otherwise, treat as a city name → use OpenStreetMap Nominatim
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          location
        )}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setLocation(`${lat},${lon}`); // update input field
        if (onLocationChange) onLocationChange({ lat, lon });
      } else {
        alert("City not found. Please enter a valid city name.");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching city coordinates.");
    }
  };

  const handleUseGPS = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude},${longitude}`);
        if (onLocationChange) onLocationChange({ lat: latitude, lon: longitude });
      },
      (error) => {
        alert("Unable to retrieve your location: " + error.message);
      }
    );
  };

  return (
    <div className="flex gap-2 flex-col md:flex-row">
      <form onSubmit={handleManualSubmit} className="flex flex-1 gap-2">
        <input
          type="text"
          placeholder="Enter city or coordinates"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 border p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <button
        onClick={handleUseGPS}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Use My Location
      </button>
    </div>
  );
}
