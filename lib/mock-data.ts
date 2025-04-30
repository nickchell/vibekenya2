import { Meme, Event, User } from "./types";

export const mockUserProfiles: User[] = [
  {
    id: "user1",
    name: "Jomo Kariuki",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Digital content creator & meme enthusiast. Nairobi born and raised! 🇰🇪",
    location: "Nairobi",
    stats: {
      followers: 5243,
      following: 342,
      posts: 127
    }
  },
  {
    id: "user2",
    name: "Aisha Omar",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Event organizer & foodie. Showcasing the best of Mombasa! 🌴🌊",
    location: "Mombasa",
    stats: {
      followers: 3782,
      following: 516,
      posts: 89
    }
  },
  {
    id: "user3",
    name: "Brian Omondi",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Photographer, music lover & event promoter. Always capturing the vibe! 📸",
    location: "Kisumu",
    stats: {
      followers: 2143,
      following: 452,
      posts: 236
    }
  },
  {
    id: "user4",
    name: "Mercy Wanjiku",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Lifestyle blogger & fashion enthusiast. Sharing my Kenya through my lens! ✨",
    location: "Nakuru",
    stats: {
      followers: 6892,
      following: 731,
      posts: 412
    }
  },
  {
    id: "user5",
    name: "David Kamau",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Sports fanatic & meme lord. Making Kenyans laugh one post at a time! 😂",
    location: "Eldoret",
    stats: {
      followers: 4321,
      following: 229,
      posts: 178
    }
  }
];

export const mockMemes: Meme[] = [
  {
    id: "meme1",
    imageUrl: "https://images.pexels.com/photos/941913/pexels-photo-941913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "When it finally rains in Nairobi after weeks of dust 😂",
    likes: 2453,
    comments: 142,
    user: {
      id: "user1",
      name: "Jomo Kariuki",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    tags: ["trending", "nairobi", "weather"],
    location: "Nairobi",
    createdAt: "2025-03-15T09:24:00Z"
  },
  {
    id: "meme2",
    imageUrl: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Mombasa traffic be like...",
    likes: 1853,
    comments: 98,
    user: {
      id: "user2",
      name: "Aisha Omar",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    tags: ["trending", "mombasa", "traffic"],
    location: "Mombasa",
    createdAt: "2025-03-18T14:12:00Z"
  },
  {
    id: "meme3",
    imageUrl: "https://images.pexels.com/photos/1028723/pexels-photo-1028723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "When someone asks if I'm going to Blankets & Wine this weekend",
    likes: 3201,
    comments: 245,
    user: {
      id: "user4",
      name: "Mercy Wanjiku",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    tags: ["trending", "events", "nairobi"],
    location: "Nairobi",
    createdAt: "2025-03-20T08:36:00Z"
  },
  {
    id: "meme4",
    imageUrl: "https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Finding parking in Westlands on a Friday night",
    likes: 1782,
    comments: 104,
    user: {
      id: "user1",
      name: "Jomo Kariuki",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    tags: ["nairobi", "nightlife", "weekends"],
    location: "Nairobi",
    createdAt: "2025-03-22T19:45:00Z"
  },
  {
    id: "meme5",
    imageUrl: "https://images.pexels.com/photos/2080819/pexels-photo-2080819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "When your matatu driver decides to beat traffic by creating a new lane",
    likes: 4532,
    comments: 321,
    user: {
      id: "user3",
      name: "Brian Omondi",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    tags: ["trending", "matatu", "nairobi"],
    location: "Kisumu",
    createdAt: "2025-03-16T11:28:00Z"
  },
  {
    id: "meme6",
    imageUrl: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Beach vibes in Diani! Who's coming?",
    likes: 2153,
    comments: 167,
    user: {
      id: "user2",
      name: "Aisha Omar",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    tags: ["mombasa", "beach", "weekend"],
    location: "Mombasa",
    createdAt: "2025-03-21T16:52:00Z"
  },
  {
    id: "meme7",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Kipchoge watching everyone struggle during the Nairobi Marathon",
    likes: 5621,
    comments: 432,
    user: {
      id: "user5",
      name: "David Kamau",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    tags: ["trending", "sports", "marathon"],
    location: "Eldoret",
    createdAt: "2025-03-19T12:15:00Z"
  },
  {
    id: "meme8",
    imageUrl: "https://images.pexels.com/photos/1471155/pexels-photo-1471155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "When your friend says they'll be there in 5 Kenyan minutes",
    likes: 3421,
    comments: 265,
    user: {
      id: "user4",
      name: "Mercy Wanjiku",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    tags: ["trending", "kenyantime"],
    location: "Nakuru",
    createdAt: "2025-03-17T10:42:00Z"
  }
];

export const mockEvents: Event[] = [
  {
    id: "event1",
    title: "Nairobi Street Food Festival",
    description: "Experience the best of Kenyan street food with over 50 vendors, live music, and fun activities for the whole family!",
    imageUrl: "https://images.pexels.com/photos/2647713/pexels-photo-2647713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2025-04-15T10:00:00Z",
    location: "Uhuru Park, Nairobi",
    organizer: {
      id: "user1",
      name: "Jomo Kariuki",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    attendees: 342,
    category: "food"
  },
  {
    id: "event2",
    title: "Blankets & Wine",
    description: "Kenya's premier afro-centric outdoor music festival celebrating Kenyan and African talent.",
    imageUrl: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2025-04-25T14:00:00Z",
    location: "Carnivore Grounds, Nairobi",
    organizer: {
      id: "user4",
      name: "Mercy Wanjiku",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    attendees: 1253,
    category: "music"
  },
  {
    id: "event3",
    title: "Mombasa Beach Volleyball Tournament",
    description: "Annual beach volleyball tournament with teams from all over Kenya competing for the grand prize.",
    imageUrl: "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2025-05-08T09:00:00Z",
    location: "Pirates Beach, Mombasa",
    organizer: {
      id: "user2",
      name: "Aisha Omar",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    attendees: 587,
    category: "sports"
  },
  {
    id: "event4",
    title: "Kisumu Art Exhibition",
    description: "Showcasing the works of emerging Kenyan artists from the Nyanza region.",
    imageUrl: "https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2025-04-18T11:00:00Z",
    location: "Kisumu Museum, Kisumu",
    organizer: {
      id: "user3",
      name: "Brian Omondi",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    attendees: 186,
    category: "art"
  },
  {
    id: "event5",
    title: "Nairobi Coffee Festival",
    description: "A celebration of Kenya's world-renowned coffee culture with tastings, workshops, and barista competitions.",
    imageUrl: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2025-05-02T09:30:00Z",
    location: "KICC, Nairobi",
    organizer: {
      id: "user1",
      name: "Jomo Kariuki",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    attendees: 412,
    category: "food"
  },
  {
    id: "event6",
    title: "Koroga Festival",
    description: "A bi-monthly event celebrating African music, food, and arts with top performers from across the continent.",
    imageUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2025-04-30T16:00:00Z",
    location: "Arboretum Gardens, Nairobi",
    organizer: {
      id: "user5",
      name: "David Kamau",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    attendees: 876,
    category: "music"
  },
  {
    id: "event7",
    title: "Diani Beach Cultural Festival",
    description: "A week-long celebration of coastal culture featuring traditional dances, cuisine, and crafts.",
    imageUrl: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2025-05-15T10:00:00Z",
    location: "Diani Beach, Kwale",
    organizer: {
      id: "user2",
      name: "Aisha Omar",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    attendees: 623,
    category: "art"
  },
  {
    id: "event8",
    title: "Eldoret Marathon",
    description: "Annual marathon event in the home of champions, with categories for professionals and amateurs.",
    imageUrl: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2025-05-22T06:00:00Z",
    location: "Eldoret Sports Club, Eldoret",
    organizer: {
      id: "user5",
      name: "David Kamau",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    attendees: 1542,
    category: "sports"
  }
];