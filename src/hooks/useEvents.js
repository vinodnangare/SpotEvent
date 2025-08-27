import { useEffect, useState } from "react";
import eventsData from "../data/dummyEvents.json";

export default function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Later: fetch from Firestore
    setTimeout(() => {
      setEvents(eventsData);
      setLoading(false);
    }, 500);
  }, []);

  return { events, loading };
}
