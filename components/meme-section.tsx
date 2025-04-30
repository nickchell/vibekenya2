import { MemeCard } from "@/components/meme-card";
import { mockMemes } from "@/lib/mock-data";

export default function MemeSection() {
  // Show only the first 3 trending memes on the homepage
  const trendingMemes = mockMemes
    .filter(meme => meme.tags.includes("trending"))
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trendingMemes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </div>
  );
}