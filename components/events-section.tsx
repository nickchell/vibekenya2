import { EventCard } from "@/components/event-card";
import { mockEvents } from "@/lib/mock-data";

export default function EventsSection() {
  // Show only the first 3 upcoming events on the homepage
  const upcomingEvents = mockEvents
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {upcomingEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}