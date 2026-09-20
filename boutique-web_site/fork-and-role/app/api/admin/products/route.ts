import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthed, slugify } from "@/lib/admin-auth";
import { getProducts, saveProducts, type Product, type Category } from "@/lib/products";

export async function POST(request: Request) {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const category = body?.category as Category;
  const description = typeof body?.description === "string" ? body.description.trim() : "";
  const price = typeof body?.price === "string" ? body.price.trim() : "";
  const tiktokUrl = typeof body?.tiktokUrl === "string" ? body.tiktokUrl.trim() : "";

  if (!name || !description || !price || !tiktokUrl) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }
  if (category !== "discord" && category !== "github") {
    return NextResponse.json({ error: "Catégorie invalide." }, { status: 400 });
  }

  const products = await getProducts();
  const id = `${slugify(name)}-${Date.now().toString(36)}`;
  const newProduct: Product = { id, category, name, description, price, tiktokUrl };
  const updated = [...products, newProduct];

  await saveProducts(updated);
  revalidatePath("/");

  return NextResponse.json(updated);
}

export async function DELETE(request: Request) {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Identifiant manquant." }, { status: 400 });
  }

  const products = await getProducts();
  const updated = products.filter((p) => p.id !== id);

  await saveProducts(updated);
  revalidatePath("/");

  return NextResponse.json(updated);
}
