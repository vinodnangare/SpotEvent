import React, { useState } from "react";

export default function LocationInput({ onLocationChange }) {
  const [location, setLocation] = useState("");

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (onLocationChange) onLocationChange(location);
    alert(`Searching events near: ${location}`);
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
          placeholder="Enter your city or coordinates"
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
