import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/admin-auth";

export async function GET() {
  return NextResponse.json({ authenticated: isAuthed() });
}
