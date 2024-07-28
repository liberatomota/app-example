

import { NextRequest, NextResponse } from "next/server";
import { Payment } from "@/models/payments";
import getDatabase from '@/lib/mongoClient';
  
export async function GET(
    req: NextRequest,
) {
    const db = await getDatabase();
    const payments = db.collection<Payment>('payments');

    const result: Payment[] = await payments.find({}).toArray();
    return NextResponse.json({ result }, { status: 200 })
}

export async function POST(
    req: Request,
) {
    const payment : Payment = await req.json();
    console.log("saving new payment...")

    const db = await getDatabase();
    const payments = db.collection<Payment>('payments');

    const result = await payments.insertOne(payment);
    const newPayment: Payment | null = await payments.findOne(result.insertedId)
    console.log("newPayment", newPayment)
    
    return NextResponse.json({ result: newPayment }, { status: 201 })
}

