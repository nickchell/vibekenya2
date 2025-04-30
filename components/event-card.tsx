"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Event } from "@/lib/types";

interface EventCardProps {
  event: Event;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  const [isInterested, setIsInterested] = useState(false);
  const [attendeeCount, setAttendeeCount] = useState(event.attendees);
  
  const handleInterest = () => {
    if (isInterested) {
      setAttendeeCount(attendeeCount - 1);
    } else {
      setAttendeeCount(attendeeCount + 1);
    }
    setIsInterested(!isInterested);
  };

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <Link href={`/events/${event.id}`}>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent z-10" />
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-3 left-3 z-20">
            <Badge 
              className={cn(
                "text-xs text-white", 
                event.category === "music" && "bg-purple-600",
                event.category === "food" && "bg-orange-600",
                event.category === "art" && "bg-blue-600",
                event.category === "sports" && "bg-green-600",
              )}
            >
              {event.category}
            </Badge>
          </div>
        </div>
      </Link>
      
      <CardHeader className="p-4">
        <Link href={`/events/${event.id}`} className="font-bold text-lg hover:underline">
          {event.title}
        </Link>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <Calendar size={14} className="mr-1" />
          {format(new Date(event.date), "EEE, MMM d · h:mm a")}
        </div>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <MapPin size={14} className="mr-1" />
          {event.location}
        </div>
      </CardHeader>
      
      <CardFooter className="p-4 border-t flex items-center justify-between">
        <div className="flex items-center">
          <Users size={16} className="mr-2 text-muted-foreground" />
          <span className="text-sm">{attendeeCount} attending</span>
        </div>
        <Button 
          size="sm" 
          variant={isInterested ? "default" : "outline"}
          className={cn(isInterested && "bg-green-600 hover:bg-green-700")}
          onClick={handleInterest}
        >
          {isInterested ? "Interested" : "Interested?"}
        </Button>
      </CardFooter>
    </Card>
  );
}