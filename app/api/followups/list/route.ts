import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const followups =
    await prisma.followUp.findMany({
      include: {
        lead: true,
      },
      orderBy: {
        id: "desc",
      },
    });

  return NextResponse.json(followups);
}