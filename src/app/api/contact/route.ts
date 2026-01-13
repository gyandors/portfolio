import { NextResponse, NextRequest } from "next/server";

import { client } from "@/utils/mongodb";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  await client.connect();

  const db = client.db("gyandors");
  const collection = db.collection("contacts");

  await collection.insertOne({ name, email, message });

  await client.close();

  return NextResponse.json(
    { message: "Thank you, we have received your message." },
    { status: 201 }
  );
}
