import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Reviews API is working",
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
  });
}
