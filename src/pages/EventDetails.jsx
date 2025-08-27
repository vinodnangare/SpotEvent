import React from "react";
import { useParams, Link } from "react-router-dom";
import useEvents from "../hooks/useEvents";

export default function EventDetails() {
  const { id } = useParams();
  const { events } = useEvents();
  const event = events.find(e => e.id === id);

  if (!event) return <p className="p-6">Event not found!</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{event.title}</h2>
      <p className="text-gray-600">{event.date}</p>
      <p className="mt-4">{event.description}</p>

      <Link to="/events" className="mt-4 inline-block text-blue-600">
        ← Back to Events
      </Link>
    </div>
  );
}
