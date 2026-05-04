# Finance dashboard

[TanStack Start](https://tanstack.com/start) app (React 19, Vite 8, Nitro `node-server` preset) with Tailwind v4 and [Biome](https://biomejs.dev) for lint/format.

## Scripts

```bash
npm run dev      # vite dev (port 3000)
npm run build    # vite build + tsc; output in .output/
npm run start    # node .output/server/index.mjs (production)
npm run lint     # biome check
npm run lint:fix # biome check --write
```

## Docker / CI

The [Dockerfile](./Dockerfile) multi-stage build runs `npm ci` + `npm run build`, then starts **`node .output/server/index.mjs`** on port **3000** (same as before for Nginx → `finance-dashboard-current:3000`).

GitHub Actions [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) is unchanged: it still builds and pushes `ghcr.io/.../finance-dashboard:${SHORT_SHA}`.

## Routes

- `/` — home
- `/products` — SSR loader + DummyJSON
- `/about` — static placeholder page
