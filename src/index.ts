import { Hono } from 'hono';
import { cors } from 'hono/cors';
import postsRoute from './routes/posts';

const app = new Hono();

// Allow requests from any origin — needed so our frontend can call this API.
// In production you'd restrict this to your frontend's domain.
app.use('*', cors());

app.get('/', async (_c) => {
  const file = Bun.file(new URL('./views/index.html', import.meta.url));
  return new Response(file);
});

app.route('/posts', postsRoute);

// Railway injects PORT automatically — fallback to 3000 for local dev.
const port = Number(process.env.PORT ?? 3000);

Bun.serve({ fetch: app.fetch, port });
console.log(`Server running on http://localhost:${port}`);
