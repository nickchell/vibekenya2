import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MemeGrid from "@/components/meme-grid";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function MemesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold">Memes</h1>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search memes..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="trending" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="newest">Newest</TabsTrigger>
          <TabsTrigger value="popular">Most Liked</TabsTrigger>
          <TabsTrigger value="nairobi">Nairobi</TabsTrigger>
          <TabsTrigger value="mombasa">Mombasa</TabsTrigger>
        </TabsList>
        <TabsContent value="trending">
          <MemeGrid category="trending" />
        </TabsContent>
        <TabsContent value="newest">
          <MemeGrid category="newest" />
        </TabsContent>
        <TabsContent value="popular">
          <MemeGrid category="popular" />
        </TabsContent>
        <TabsContent value="nairobi">
          <MemeGrid category="nairobi" />
        </TabsContent>
        <TabsContent value="mombasa">
          <MemeGrid category="mombasa" />
        </TabsContent>
      </Tabs>
    </div>
  );
}