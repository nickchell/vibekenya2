"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, MapPin } from "lucide-react";
import MemeGrid from "@/components/meme-grid";
import EventList from "@/components/event-list";
import UserStats from "@/components/user-stats";
import { mockUserProfiles } from "@/lib/mock-data";

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [isFollowing, setIsFollowing] = useState(false);
  
  // In a real app, we would fetch this data based on the ID
  const profile = mockUserProfiles.find(p => p.id === params.id) || mockUserProfiles[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col items-center">
        <div className="w-full h-48 bg-gradient-to-r from-green-600 to-emerald-400 rounded-lg mb-16 relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <div className="flex items-center justify-center mt-2 text-muted-foreground">
            <MapPin size={16} className="mr-1" /> {profile.location}
          </div>
          <p className="mt-4 max-w-md">{profile.bio}</p>
        </div>
        
        <div className="flex gap-4 mb-8">
          <Button 
            variant={isFollowing ? "outline" : "default"}
            onClick={() => setIsFollowing(!isFollowing)}
            className="gap-2"
          >
            <UserPlus size={16} />
            {isFollowing ? "Following" : "Follow"}
          </Button>
          <Button variant="outline">Message</Button>
        </div>
        
        <UserStats 
          followers={profile.stats.followers}
          following={profile.stats.following}
          posts={profile.stats.posts}
        />
        
        <Tabs defaultValue="memes" className="w-full mt-8">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="memes">Memes</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
          <TabsContent value="memes" className="mt-6">
            <MemeGrid category="user" userId={params.id} />
          </TabsContent>
          <TabsContent value="events" className="mt-6">
            <EventList userId={params.id} />
          </TabsContent>
          <TabsContent value="saved" className="mt-6">
            <MemeGrid category="saved" userId={params.id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}