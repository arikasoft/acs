import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const staff = await prisma.user.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json(staff);
}