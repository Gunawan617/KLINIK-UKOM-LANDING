import { NextResponse } from "next/server";

export async function GET() {
  // 🔹 ambil dari Laravel
  const res = await fetch("http://localhost:8000/api/public/team-members", {
    cache: "no-store",
  });
  const data = await res.json();

  return NextResponse.json(data);
}
