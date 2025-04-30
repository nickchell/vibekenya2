"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share2, MapPin, FileHeartIcon as HeartFilledIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Meme } from "@/lib/types";

interface MemeCardProps {
  meme: Meme;
  className?: string;
}

export function MemeCard({ meme, className }: MemeCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(meme.likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <CardHeader className="p-4">
        <div className="flex items-center space-x-3">
          <Link href={`/profile/${meme.user.id}`}>
            <Avatar>
              <AvatarImage src={meme.user.avatar} alt={meme.user.name} />
              <AvatarFallback>{meme.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1 min-w-0">
            <Link href={`/profile/${meme.user.id}`} className="font-medium hover:underline">
              {meme.user.name}
            </Link>
            {meme.location && (
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <MapPin size={12} className="mr-1" />
                {meme.location}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <Link href={`/memes/${meme.id}`}>
        <CardContent className="p-0">
          <img 
            src={meme.imageUrl} 
            alt={meme.caption || "Meme"} 
            className="w-full h-60 object-cover"
          />
        </CardContent>
      </Link>
      
      <CardFooter className="flex flex-col items-start p-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-0.5">
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "text-muted-foreground hover:text-red-500", 
                liked && "text-red-500"
              )}
              onClick={handleLike}
            >
              {liked ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="text-red-500"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              ) : (
                <Heart size={20} />
              )}
            </Button>
            <span className="text-sm">{likeCount}</span>
            
            <Button variant="ghost" size="icon" className="ml-2 text-muted-foreground hover:text-primary">
              <MessageSquare size={20} />
            </Button>
            <span className="text-sm">{meme.comments}</span>
          </div>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Share2 size={20} />
          </Button>
        </div>
        
        {meme.caption && (
          <p className="text-sm mt-2">
            <Link href={`/profile/${meme.user.id}`} className="font-medium hover:underline">
              {meme.user.name}
            </Link>{" "}
            {meme.caption}
          </p>
        )}
        
        {meme.tags && meme.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {meme.tags.map((tag) => (
              <Link 
                href={`/search?tag=${tag}`} 
                key={tag}
                className="text-xs px-2 py-1 bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}