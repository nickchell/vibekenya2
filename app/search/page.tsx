"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import MemeGrid from "@/components/meme-grid";
import EventGrid from "@/components/event-grid";
import { mockUserProfiles } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger an API call
    console.log("Searching for:", searchQuery);
  };
  
  // Filter users based on search query (simplified for demo)
  const filteredUsers = searchQuery 
    ? mockUserProfiles.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockUserProfiles;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Search</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search memes, events, users..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </div>
      </form>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="memes">Memes</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="tags">Tags</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-12">
          {/* Users Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4">
              {filteredUsers.slice(0, 4).map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
            {filteredUsers.length > 4 && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab("users")}
                  className="mt-2"
                >
                  See all users
                </Button>
              </div>
            )}
          </div>
          
          {/* Memes Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Memes</h2>
            <MemeGrid category="trending" />
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => setActiveTab("memes")}
                className="mt-6"
              >
                See all memes
              </Button>
            </div>
          </div>
          
          {/* Events Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Events</h2>
            <EventGrid category="upcoming" />
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => setActiveTab("events")}
                className="mt-6"
              >
                See all events
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="memes">
          <h2 className="text-2xl font-bold mb-4">Memes</h2>
          <MemeGrid category="trending" />
        </TabsContent>
        
        <TabsContent value="events">
          <h2 className="text-2xl font-bold mb-4">Events</h2>
          <EventGrid category="upcoming" />
        </TabsContent>
        
        <TabsContent value="users">
          <h2 className="text-2xl font-bold mb-4">Users</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tags">
          <h2 className="text-2xl font-bold mb-4">Popular Tags</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "trending", "nairobi", "mombasa", "kisumu", "events", 
              "music", "food", "sports", "art", "matatu", "kenyantime", 
              "weekend", "beach", "nightlife"
            ].map((tag) => (
              <Link 
                href={`/search?tag=${tag}`} 
                key={tag}
                className="px-4 py-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function UserCard({ user }: { user: typeof mockUserProfiles[0] }) {
  return (
    <Link href={`/profile/${user.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md h-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <Avatar className="h-16 w-16 mb-4">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-sm text-muted-foreground">{user.location}</p>
          <p className="text-xs mt-2 line-clamp-2">{user.bio}</p>
        </CardContent>
      </Card>
    </Link>
  );
}