import { NextResponse } from "next/server";

import { client } from "@/utils/mongodb";

export async function GET() {
  try {
    await client.connect();

    const db = client.db("gyandors");
    const resume = await db.collection("resume").findOne();

    await client.close();

    if (!resume) throw new Error("Something went wrong.");

    return NextResponse.json({ data: resume }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
