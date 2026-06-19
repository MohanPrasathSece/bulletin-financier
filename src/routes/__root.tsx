import { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <div className="eyebrow text-primary mb-4">Erreur 404</div>
          <h1 className="font-serif font-black text-7xl">Page introuvable.</h1>
          <p className="mt-4 text-muted-foreground">
            La page que vous recherchez a été déplacée ou n'a jamais été publiée.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block text-xs uppercase tracking-widest border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors"
          >
            Retour à la page d'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif font-black text-3xl">Cette page ne s'est pas chargée</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Un problème est survenu de notre côté. Vous pouvez essayer de rafraîchir ou retourner à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
          >
            Aller à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return <Outlet />;
}
