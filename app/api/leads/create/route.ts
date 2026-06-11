import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const lead = await prisma.lead.create({
      data: {
        leadNo: `ACS-${Date.now()}`,
        name: body.name,
        mobile: body.mobile,
        email: body.email,
        city: body.city,
        service: body.service,
        source: body.source || "Website",
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