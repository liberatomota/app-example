import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    const date = new Date();
    const seconds = date.getSeconds().toString().padStart(2, '0');
    console.log("Current seconds on server time:", seconds)
    return NextResponse.json({ seconds }, { status: 200 })
  }
}
