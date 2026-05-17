import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LoadingScreen } from "@/components/LoadingScreen";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold">
          Reaction not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The molecule you searched for doesn't exist in our database.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-3 text-sm font-medium text-background transition hover:scale-105"
          >
            Back to lab
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold">Reaction failed</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something destabilized on our end.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-5 py-2 text-sm font-medium text-background"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full glass px-5 py-2 text-sm font-medium"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "SFS Chemistry — Molecular Magazine" },
        {
          name: "description",
          content:
            "A futuristic digital magazine from the Department of Chemistry at SFS, showcasing student poster presentations, research and laboratories.",
        },
        { name: "Tharun N E", content: "SFS Department of Chemistry" },
        {
          property: "og:title",
          content: "SFS Chemistry — Molecular Magazine",
        },
        {
          property: "og:description",
          content:
            "Explore poster presentations and research from the SFS Chemistry Department.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:title", content: "SFS Chemistry — Molecular Magazine" },
        { name: "twitter:title", content: "SFS Chemistry — Molecular Magazine" },
        { name: "description", content: "Lumina Chemistry is a futuristic digital magazine showcasing SFS Chemistry Department research and details." },
        { property: "og:description", content: "Lumina Chemistry is a futuristic digital magazine showcasing SFS Chemistry Department research and details." },
        { name: "twitter:description", content: "Lumina Chemistry is a futuristic digital magazine showcasing SFS Chemistry Department research and details." },
        { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/db07370e-c051-475f-bd81-c3dfd6cf0fb1/id-preview-ea5e081a--08f4d523-066c-448b-b70c-70b940f9a523.lovable.app-1779003137003.png" },
        { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/db07370e-c051-475f-bd81-c3dfd6cf0fb1/id-preview-ea5e081a--08f4d523-066c-448b-b70c-70b940f9a523.lovable.app-1779003137003.png" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative pt-20">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
