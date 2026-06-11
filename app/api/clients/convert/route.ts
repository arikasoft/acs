import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const lead = await prisma.lead.findUnique({
      where: {
        id: Number(body.leadId),
      },
    });

    if (!lead) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead not found",
        },
        { status: 404 }
      );
    }

    const client = await prisma.client.create({
      data: {
        name: lead.name,
        mobile: lead.mobile,
        email: lead.email,
        service: lead.service,
      },
    });

    await prisma.lead.update({
      where: {
        id: lead.id,
      },
      data: {
        status: "Converted",
      },
    });

    return NextResponse.json({
      success: true,
      client,
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