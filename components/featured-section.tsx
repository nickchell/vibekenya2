import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { mockUserProfiles } from "@/lib/mock-data";

export default function FeaturedSection() {
  // Show only the first 4 users for the featured section
  const featuredUsers = mockUserProfiles.slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredUsers.map((user) => (
        <Link href={`/profile/${user.id}`} key={user.id}>
          <Card className="overflow-hidden transition-all hover:shadow-md h-full">
            <CardContent className="p-0">
              <div className="h-24 bg-gradient-to-r from-red-500 to-green-600" />
              <div className="px-4 pt-4 pb-6 flex flex-col items-center -mt-12">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold mt-4 text-center">{user.name}</h3>
                <p className="text-sm text-muted-foreground text-center mt-1">{user.location}</p>
                <p className="text-xs text-center mt-4 line-clamp-2">{user.bio}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}