import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const existing = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists",
        },
        { status: 400 }
      );
    }

    const password = await bcrypt.hash(
      body.password,
      10
    );

    const staff = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        mobile: body.mobile,
        password,
        role: body.role || "staff",
      },
    });

    return NextResponse.json({
      success: true,
      staff,
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