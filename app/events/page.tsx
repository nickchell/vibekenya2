import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventGrid from "@/components/event-grid";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold">Events</h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search events..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="music">Music & Concerts</SelectItem>
              <SelectItem value="food">Food & Drink</SelectItem>
              <SelectItem value="art">Art & Culture</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="weekend">This Weekend</TabsTrigger>
          <TabsTrigger value="nairobi">Nairobi</TabsTrigger>
          <TabsTrigger value="mombasa">Mombasa</TabsTrigger>
          <TabsTrigger value="kisumu">Kisumu</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <EventGrid category="upcoming" />
        </TabsContent>
        <TabsContent value="weekend">
          <EventGrid category="weekend" />
        </TabsContent>
        <TabsContent value="nairobi">
          <EventGrid category="nairobi" />
        </TabsContent>
        <TabsContent value="mombasa">
          <EventGrid category="mombasa" />
        </TabsContent>
        <TabsContent value="kisumu">
          <EventGrid category="kisumu" />
        </TabsContent>
      </Tabs>
    </div>
  );
}