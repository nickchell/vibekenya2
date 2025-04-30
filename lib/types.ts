export interface User {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
  location: string;
  stats: {
    followers: number;
    following: number;
    posts: number;
  };
}

export interface Meme {
  id: string;
  imageUrl: string;
  caption?: string;
  likes: number;
  comments: number;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  tags: string[];
  location?: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  location: string;
  organizer: {
    id: string;
    name: string;
    avatar: string;
  };
  attendees: number;
  category: string;
}