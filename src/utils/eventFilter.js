import { haversineDistance } from "./haversine";

export function filterEvents(events, userLocation, radiusKm = 50) {
  return events.filter((event) => {
    const distance = haversineDistance(userLocation, {
      lat: event.lat,
      lon: event.lon,
    });
    return distance <= radiusKm;
  });
}
