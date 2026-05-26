import { NextResponse, NextRequest } from "next/server";

import { client } from "@/lib/db";
import { HttpError } from "@/lib/errors";

export async function POST(request: NextRequest) {
  try {
    await client.connect();

    const { name, email, message } = await request.json();
    if (!name || !email || !message)
      throw new HttpError("Please enter the required details.", 400);

    const db = client.db("gyandors");
    const collection = db.collection("contacts");
    await collection.insertOne({ name, email, message });

    return NextResponse.json(
      { message: "Thank you, we have received your message." },
      { status: 201 },
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: error.message },
      { status: error.status },
    );
  } finally {
    await client.close();
  }
}
