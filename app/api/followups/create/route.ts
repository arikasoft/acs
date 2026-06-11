import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const followup = await prisma.followUp.create({
      data: {
        leadId: Number(body.leadId),
        note: body.note,
        status: body.status,
        nextCall: body.nextCall
          ? new Date(body.nextCall)
          : null,
      },
    });

    return NextResponse.json({
      success: true,
      followup,
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