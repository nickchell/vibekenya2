export default function UserStats({ 
  followers, 
  following, 
  posts 
}: { 
  followers: number; 
  following: number; 
  posts: number;
}) {
  return (
    <div className="flex justify-center gap-8 border-y py-4 w-full">
      <div className="text-center">
        <span className="block font-bold">{followers}</span>
        <span className="text-sm text-muted-foreground">Followers</span>
      </div>
      <div className="text-center">
        <span className="block font-bold">{following}</span>
        <span className="text-sm text-muted-foreground">Following</span>
      </div>
      <div className="text-center">
        <span className="block font-bold">{posts}</span>
        <span className="text-sm text-muted-foreground">Posts</span>
      </div>
    </div>
  );
}