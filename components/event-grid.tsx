import { EventCard } from "@/components/event-card";
import { mockEvents } from "@/lib/mock-data";
import { addDays, startOfWeek, endOfWeek } from "date-fns";

interface EventGridProps {
  category: string;
}

export default function EventGrid({ category }: EventGridProps) {
  // Filter events based on category
  let filteredEvents = [...mockEvents];
  const today = new Date();
  
  if (category === "upcoming") {
    filteredEvents = filteredEvents
      .filter(event => new Date(event.date) > today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } else if (category === "weekend") {
    const weekStart = startOfWeek(today);
    const saturday = addDays(weekStart, 5);
    const sunday = addDays(weekStart, 6);
    const nextWeekend = endOfWeek(addDays(today, 7));
    
    filteredEvents = filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return (
        (eventDate >= saturday && eventDate <= nextWeekend) &&
        eventDate > today
      );
    });
  } else if (category === "nairobi") {
    filteredEvents = filteredEvents.filter(event => 
      event.location.includes("Nairobi") && new Date(event.date) > today
    );
  } else if (category === "mombasa") {
    filteredEvents = filteredEvents.filter(event => 
      event.location.includes("Mombasa") && new Date(event.date) > today
    );
  } else if (category === "kisumu") {
    filteredEvents = filteredEvents.filter(event => 
      event.location.includes("Kisumu") && new Date(event.date) > today
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      
      {filteredEvents.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">No events found in this category.</p>
        </div>
      )}
    </div>
  );
}