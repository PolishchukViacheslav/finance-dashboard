import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="p-8 max-w-prose space-y-4">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="text-muted-foreground text-sm">
        Dummy page for routing and navigation smoke tests. Deployed as the same Docker image; Nginx still
        forwards to this app on port 3000.
      </p>
      <Link to="/" className="text-primary underline text-sm">
        Back home
      </Link>
    </div>
  );
}
