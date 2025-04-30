import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { mockEvents } from "@/lib/mock-data";

interface EventListProps {
  userId: string;
}

export default function EventList({ userId }: EventListProps) {
  // In a real app, we would fetch events the user has created or is attending
  // For demo purposes, we'll just filter by userId
  const userEvents = mockEvents.filter(event => event.organizer.id === userId);

  return (
    <div className="space-y-4">
      {userEvents.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-32">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-1">
                  <Badge 
                    className={cn(
                      "text-xs mb-2", 
                      event.category === "music" && "bg-purple-600",
                      event.category === "food" && "bg-orange-600",
                      event.category === "art" && "bg-blue-600",
                      event.category === "sports" && "bg-green-600",
                    )}
                  >
                    {event.category}
                  </Badge>
                  <h3 className="font-bold">{event.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Calendar size={14} className="mr-1" />
                    {format(new Date(event.date), "EEE, MMM d · h:mm a")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin size={14} className="mr-1" />
                    {event.location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
      
      {userEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No events found for this user.</p>
        </div>
      )}
    </div>
  );
}