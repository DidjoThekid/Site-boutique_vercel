import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Hero />
      <ProductList products={products} />
      <footer className="mx-auto max-w-content px-6 pb-16 pt-10">
        <div className="border-t border-border pt-6">
          <p className="font-mono text-xs text-muted">
            Gérez le catalogue depuis{" "}
            <a href="/admin" className="text-amber hover:underline">
              /admin
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}
