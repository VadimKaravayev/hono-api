# Hono API

A minimal REST API built with [Hono](https://hono.dev) and Node.js.

## Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `GET` | `/posts?page=1&limit=10` | Paginated posts |
| `GET` | `/posts/:id` | Single post by ID |

Response includes `X-Total-Count` header with the total number of posts.

## Running locally

```bash
npm install
npm run dev
```

Server starts on [http://localhost:3000](http://localhost:3000).

`npm run dev` uses `--watch` flag — restarts automatically on file changes.

## Deploying to Railway

1. Push this repo to GitHub
2. Create a new project on [Railway](https://railway.app)
3. Connect the GitHub repo — Railway detects Node.js and deploys automatically
4. Railway injects `PORT` environment variable — the server reads it automatically
