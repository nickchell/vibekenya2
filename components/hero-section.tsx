import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/90 to-green-600/90 z-10" />
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center"
        style={{ filter: 'brightness(0.6)' }}
      />
      
      <div className="relative z-20 container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up text-white">
            Discover, Share, and Connect with VibeKenya
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-up animation-delay-200 text-white">
            The home of Kenyan memes, events, and viral moments. Join the community and share your vibes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/memes">
                Join Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="/events" className="gap-2">
                Explore Events <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}