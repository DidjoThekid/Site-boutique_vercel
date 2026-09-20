import type { Product } from "@/data/products";

const categoryStyles = {
  discord: {
    dot: "bg-periwinkle",
    label: "Rôle Discord",
    labelColor: "text-periwinkle",
  },
  github: {
    dot: "bg-amber",
    label: "Accès GitHub",
    labelColor: "text-amber",
  },
} as const;

export default function ProductRow({ product }: { product: Product }) {
  const style = categoryStyles[product.category];

  return (
    <li className="relative py-6 pl-6 first:pt-0 last:pb-0">
      <span
        aria-hidden
        className={`absolute -left-[5px] top-[30px] h-[9px] w-[9px] rounded-full border-2 border-bg ${style.dot}`}
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <p className={`font-mono text-xs ${style.labelColor}`}>{style.label}</p>
          <h3 className="mt-1 font-mono text-base font-medium text-ink sm:text-[17px]">
            {product.name}
          </h3>
          <p className="mt-1.5 max-w-[48ch] text-[14px] leading-relaxed text-muted sm:text-[15px]">
            {product.description}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <p className="font-mono text-sm text-ink">{product.price}</p>
          <a
            href={product.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-sm border border-border bg-surfaceRaised px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-amber hover:text-amber"
          >
            Acheter sur TikTok Shop
          </a>
        </div>
      </div>
    </li>
  );
}
