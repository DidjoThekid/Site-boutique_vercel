import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_auth";

export function isAuthed(): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const value = cookies().get(ADMIN_COOKIE)?.value;
  return value === password;
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}
