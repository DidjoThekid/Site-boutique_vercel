import { put, list } from "@vercel/blob";
import { products as seedProducts, type Product, type Category } from "@/data/products";

export type { Product, Category };

const BLOB_PATHNAME = "fork-and-role/products.json";

async function findBlobUrl(): Promise<string | null> {
  const { blobs } = await list({ prefix: BLOB_PATHNAME });
  const match = blobs.find((b) => b.pathname === BLOB_PATHNAME);
  return match?.url ?? null;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const url = await findBlobUrl();
    if (!url) {
      await saveProducts(seedProducts);
      return seedProducts;
    }
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return seedProducts;
    const data = (await res.json()) as Product[];
    return Array.isArray(data) ? data : seedProducts;
  } catch {
    return seedProducts;
  }
}

export async function saveProducts(products: Product[]): Promise<void> {
  await put(BLOB_PATHNAME, JSON.stringify(products, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}
