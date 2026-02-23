// In-memory data — no database needed for a prototype.
// In a real app this would be replaced by a DB query.

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const posts: Post[] = Array.from({ length: 100 }, (_, i) => ({
  id:     i + 1,
  userId: Math.ceil((i + 1) / 10),
  title:  `Post number ${i + 1} title`,
  body:   `This is the body of post ${i + 1}. It contains some sample text to simulate real content.`,
}));
