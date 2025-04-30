import { MemeCard } from "@/components/meme-card";
import { mockMemes } from "@/lib/mock-data";

interface MemeGridProps {
  category: string;
  userId?: string;
}

export default function MemeGrid({ category, userId }: MemeGridProps) {
  // Filter memes based on category and userId
  let filteredMemes = [...mockMemes];
  
  if (category === "trending") {
    filteredMemes = filteredMemes.filter(meme => meme.tags.includes("trending"));
  } else if (category === "newest") {
    filteredMemes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else if (category === "popular") {
    filteredMemes.sort((a, b) => b.likes - a.likes);
  } else if (category === "nairobi") {
    filteredMemes = filteredMemes.filter(meme => meme.location === "Nairobi");
  } else if (category === "mombasa") {
    filteredMemes = filteredMemes.filter(meme => meme.location === "Mombasa");
  } else if (category === "user" && userId) {
    filteredMemes = filteredMemes.filter(meme => meme.user.id === userId);
  } else if (category === "saved" && userId) {
    // In a real app, we would fetch the user's saved memes
    filteredMemes = filteredMemes.filter((_, index) => index % 3 === 0); // Just for demo
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredMemes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
      
      {filteredMemes.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">No memes found in this category.</p>
        </div>
      )}
    </div>
  );
}