import type { Product, Category } from "@/data/products";
import ProductRow from "./ProductRow";

const sections: { category: Category; title: string; note: string }[] = [
  {
    category: "discord",
    title: "Rôles Discord",
    note: "Facturation récurrente, gérée sur TikTok Shop.",
  },
  {
    category: "github",
    title: "Accès GitHub",
    note: "Paiement unique, accès transmis après achat.",
  },
];

export default function ProductList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <section className="mx-auto max-w-content px-6 pb-24">
        <p className="text-sm text-muted">
          Aucun article disponible pour le moment.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-content px-6 pb-24">
      {sections.map(({ category, title, note }) => {
        const items = products.filter((p) => p.category === category);
        if (items.length === 0) return null;

        return (
          <div key={category} className="mb-14 last:mb-0">
            <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
              <h2 className="font-mono text-lg font-medium text-ink">{title}</h2>
              <p className="text-xs text-muted">{note}</p>
            </div>
            <ul className="border-l border-border pl-0">
              {items.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
