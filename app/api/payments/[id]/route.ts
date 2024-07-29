import { NextRequest, NextResponse } from "next/server";

type Params = {
    id: string
  }

export async function GET(
    req: NextRequest,
    context: { params: Params }
) {
    return NextResponse.json({ response: `GET OK id: ${context.params.id}` }, { status: 200 })
}

export async function PUT(req: NextRequest) {
    console.log("payments PUT")
    return NextResponse.json({ response: 'PUT OK' }, { status: 200 })
}

