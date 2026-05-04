import { createFileRoute, Link } from '@tanstack/react-router';

import { LayoutDashboard } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[80vh] p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-lg">
        <div className="flex items-center gap-3 text-foreground">
          <LayoutDashboard aria-hidden className="size-12 shrink-0" strokeWidth={1.5} />
          <h1 className="text-2xl font-semibold tracking-tight">Finance dashboard</h1>
        </div>
        <p className="text-muted-foreground text-sm text-center sm:text-left">
          This app now runs on{' '}
          <a
            className="underline font-medium"
            href="https://tanstack.com/start"
            target="_blank"
            rel="noopener noreferrer"
          >
            TanStack Start
          </a>{' '}
          behind your existing Nginx proxy on port 3000.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link
            to="/products"
            className="rounded-full border border-transparent bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90"
          >
            View products
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-black/10 dark:border-white/15 px-5 py-2 text-sm font-medium hover:bg-muted"
          >
            About (dummy)
          </Link>
        </div>
      </main>
    </div>
  );
}
