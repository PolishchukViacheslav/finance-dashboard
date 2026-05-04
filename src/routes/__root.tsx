/// <reference types="vite/client" />
import { createRootRoute, HeadContent, Link, Scripts } from '@tanstack/react-router';
import type * as React from 'react';

import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';
import { NotFound } from '@/components/NotFound';

import { seo } from '@/utils/seo';

import appCss from '@/styles/globals.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({
        title: 'Finance Dashboard',
        description: 'Finance dashboard (TanStack Start)',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '512x512' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <nav className="border-b bg-background px-4 py-3 flex gap-4 text-sm">
          <Link to="/" activeProps={{ className: 'font-semibold' }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/products" activeProps={{ className: 'font-semibold' }}>
            Products
          </Link>
          <Link to="/about" activeProps={{ className: 'font-semibold' }}>
            About
          </Link>
        </nav>
        <main className="min-h-[calc(100vh-3.5rem)]">{children}</main>
        {import.meta.env.DEV ? <TanStackRouterDevtools position="bottom-right" /> : null}
        <Scripts />
      </body>
    </html>
  );
}
