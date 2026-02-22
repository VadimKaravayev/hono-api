import { Hono } from 'hono';
import { posts } from '../data.js';

const app = new Hono();

// GET /posts?page=1&limit=10
app.get('/', (c) => {
  const page  = Math.max(1, Number(c.req.query('page')  ?? 1));
  const limit = Math.min(50, Number(c.req.query('limit') ?? 10));

  const start = (page - 1) * limit;
  const items = posts.slice(start, start + limit);

  // Mirror the X-Total-Count header that JSONPlaceholder uses —
  // our frontend already reads this to calculate total pages.
  c.header('X-Total-Count', String(posts.length));

  return c.json(items);
});

// GET /posts/:id
app.get('/:id', (c) => {
  const post = posts.find(p => p.id === Number(c.req.param('id')));

  if (!post) {
    return c.json({ error: 'Post not found' }, 404);
  }

  return c.json(post);
});

export default app;
