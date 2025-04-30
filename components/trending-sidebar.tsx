"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockUserProfiles } from "@/lib/mock-data";
import Link from "next/link";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

export default function TrendingSidebar() {
  const trendingTags = [
    "KOTMemes",
    "NairobiVibes",
    "KenyanTime",
    "MatuCulture",
    "WeekendPlans"
  ];

  const topCreators = mockUserProfiles.slice(0, 3);

  return (
    <div className="space-y-6 sticky top-20">
      {/* Trending Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp size={20} className="text-primary" />
            Trending Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag) => (
              <Link 
                key={tag} 
                href={`/search?tag=${tag}`}
                className="text-sm px-3 py-1 bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Creators */}
      <Card>
        <CardHeader>
          <CardTitle>Top Creators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {topCreators.map((creator) => (
            <Link 
              key={creator.id} 
              href={`/profile/${creator.id}`}
              className="flex items-center gap-3 group"
            >
              <Avatar>
                <AvatarImage src={creator.avatar} alt={creator.name} />
                <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium group-hover:text-primary transition-colors">
                  {creator.name}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {creator.location}
                </p>
              </div>
              <Button variant="outline" size="sm">Follow</Button>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Download App CTA */}
      <Card className="bg-gradient-to-br from-primary/90 to-secondary/90 text-white">
        <CardContent className="pt-6">
          <h3 className="text-lg font-bold mb-2">Get the VibeKenya App</h3>
          <p className="text-sm mb-4 text-white/90">
            Join 50,000+ Kenyans sharing vibes on mobile!
          </p>
          <div className="space-y-2">
            <Button 
              variant="secondary" 
              className="w-full bg-white/10 hover:bg-white/20 text-white"
            >
              Download on App Store
            </Button>
            <Button 
              variant="secondary" 
              className="w-full bg-white/10 hover:bg-white/20 text-white"
            >
              Get it on Google Play
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}