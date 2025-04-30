import HeroSection from '@/components/hero-section';
import MemeSection from '@/components/meme-section';
import EventsSection from '@/components/events-section';
import FeaturedSection from '@/components/featured-section';
import TrendingSidebar from '@/components/trending-sidebar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Trending Memes</h2>
              <MemeSection />
              <div className="mt-6 text-center">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/memes">
                    See all memes <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
              <EventsSection />
              <div className="mt-6 text-center">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/events">
                    Explore all events <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Featured Vibes</h2>
              <FeaturedSection />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TrendingSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}