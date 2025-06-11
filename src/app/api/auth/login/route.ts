
import { NextResponse } from "next/server";
import { users } from "@/lib/mock/users";

export async function POST(req: Request) {
  const { username } = await req.json();
  const user = users.find(u => u.username === username);

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ user });
}
