import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
      <footer className="mx-auto max-w-content px-6 pb-16 pt-10">
        <div className="border-t border-border pt-6">
          <p className="font-mono text-xs text-muted">
            Contenu de démonstration — remplacez le catalogue dans
            data/products.ts et les liens TikTok Shop avant mise en ligne.
          </p>
        </div>
      </footer>
    </main>
  );
}
