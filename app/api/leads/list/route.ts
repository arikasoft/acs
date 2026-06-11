import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const leads = await prisma.lead.findMany({
    include: {
      assignedTo: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json(leads);
}