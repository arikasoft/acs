import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const password = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.create({
    data: {
      name: "Super Admin",
      email: "admin@acs.com",
      password,
      role: "admin",
    },
  });

  return NextResponse.json(admin);
}