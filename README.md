# Hono API

A minimal REST API built with [Hono](https://hono.dev) and [Bun](https://bun.sh).

## Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | Landing page |
| `GET` | `/posts?page=1&limit=10` | Paginated posts |
| `GET` | `/posts/:id` | Single post by ID |

Response includes `X-Total-Count` header with the total number of posts.

## Running locally

```bash
bun install
bun run dev
```

Server starts on [http://localhost:3000](http://localhost:3000).

`bun run dev` uses `--watch` flag — restarts automatically on file changes.

## Deploying to Railway

1. Push this repo to GitHub
2. Create a new project on [Railway](https://railway.app)
3. Connect the GitHub repo
4. In the service settings set the start command to `bun start`
5. Railway injects `PORT` environment variable — the server reads it automatically
