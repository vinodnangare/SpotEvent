import React from "react";

export default function EventCard({ title, date }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">📅 {date}</p>
    </div>
  );
}
