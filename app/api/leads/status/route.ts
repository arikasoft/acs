import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const lead = await prisma.lead.update({
      where: {
        id: Number(body.leadId),
      },
      data: {
        status: body.status,
      },
    });

    return NextResponse.json({
      success: true,
      lead,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}