"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Product, Category } from "@/data/products";

const emptyForm = {
  name: "",
  category: "discord" as Category,
  description: "",
  price: "",
  tiktokUrl: "",
};

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch("/api/admin/check")
      .then((r) => r.json())
      .then((d) => setAuthed(Boolean(d.authenticated)))
      .catch(() => setAuthed(false));
  }, []);

  useEffect(() => {
    if (authed) loadProducts();
  }, [authed]);

  async function loadProducts() {
    const res = await fetch("/api/products", { cache: "no-store" });
    setProducts(await res.json());
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setPassword("");
      setAuthed(true);
    } else {
      const data = await res.json().catch(() => ({}));
      setLoginError(data.error ?? "Connexion impossible.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setProducts([]);
  }

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    setBusy(true);
    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setBusy(false);
    if (res.ok) {
      setProducts(await res.json());
      setForm(emptyForm);
    } else {
      const data = await res.json().catch(() => ({}));
      setFormError(data.error ?? "Erreur lors de l'ajout.");
    }
  }

  async function handleDelete(id: string) {
    setBusy(true);
    const res = await fetch(`/api/admin/products?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    setBusy(false);
    if (res.ok) setProducts(await res.json());
  }

  if (authed === null) {
    return (
      <main className="mx-auto max-w-content px-6 py-20">
        <p className="font-mono text-sm text-muted">Chargement…</p>
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="mx-auto max-w-content px-6 py-20">
        <h1 className="font-mono text-2xl text-ink">Administration</h1>
        <p className="mt-2 text-sm text-muted">
          Connectez-vous pour gérer le catalogue.
        </p>
        <form onSubmit={handleLogin} className="mt-8 max-w-sm space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm text-muted">Mot de passe</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-sm border border-border bg-surface px-3 py-2 text-ink outline-none focus:border-amber"
              autoFocus
            />
          </label>
          {loginError && <p className="text-sm text-red-400">{loginError}</p>}
          <button
            type="submit"
            className="rounded-sm bg-amber px-4 py-2 text-sm font-medium text-bg"
          >
            Se connecter
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <div className="flex items-center justify-between">
        <h1 className="font-mono text-2xl text-ink">Administration</h1>
        <button onClick={handleLogout} className="text-sm text-muted underline">
          Se déconnecter
        </button>
      </div>

      <section className="mt-10">
        <h2 className="mb-4 font-mono text-lg text-ink">Ajouter un article</h2>
        <form onSubmit={handleAdd} className="grid max-w-lg gap-3">
          <input
            placeholder="Nom du produit"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-sm border border-border bg-surface px-3 py-2 text-ink outline-none focus:border-amber"
            required
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
            className="rounded-sm border border-border bg-surface px-3 py-2 text-ink outline-none focus:border-amber"
          >
            <option value="discord">Rôle Discord</option>
            <option value="github">Accès GitHub</option>
          </select>
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="rounded-sm border border-border bg-surface px-3 py-2 text-ink outline-none focus:border-amber"
            rows={3}
            required
          />
          <input
            placeholder="Prix (ex : 4,99 € / mois)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="rounded-sm border border-border bg-surface px-3 py-2 text-ink outline-none focus:border-amber"
            required
          />
          <input
            placeholder="Lien TikTok Shop"
            value={form.tiktokUrl}
            onChange={(e) => setForm({ ...form, tiktokUrl: e.target.value })}
            className="rounded-sm border border-border bg-surface px-3 py-2 text-ink outline-none focus:border-amber"
            required
          />
          {formError && <p className="text-sm text-red-400">{formError}</p>}
          <button
            type="submit"
            disabled={busy}
            className="justify-self-start rounded-sm bg-amber px-4 py-2 text-sm font-medium text-bg disabled:opacity-50"
          >
            Ajouter
          </button>
        </form>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 font-mono text-lg text-ink">Articles actuels</h2>
        <ul className="divide-y divide-border rounded-sm border border-border">
          {products.map((p) => (
            <li key={p.id} className="flex items-center justify-between gap-4 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate font-mono text-sm text-ink">{p.name}</p>
                <p className="text-xs text-muted">{p.price}</p>
              </div>
              <button
                onClick={() => handleDelete(p.id)}
                disabled={busy}
                className="shrink-0 text-sm text-red-400 underline disabled:opacity-50"
              >
                Supprimer
              </button>
            </li>
          ))}
          {products.length === 0 && (
            <li className="px-4 py-3 text-sm text-muted">Aucun article pour le moment.</li>
          )}
        </ul>
      </section>
    </main>
  );
}
