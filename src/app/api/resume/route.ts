import { NextResponse } from "next/server";

import { client } from "@/lib/db";
import { HttpError } from "@/lib/errors";

export async function GET() {
  try {
    await client.connect();

    const db = client.db("gyandors");
    const resume = await db.collection("resume").findOne();

    if (!resume) throw new HttpError("Resume not found.", 404);

    return NextResponse.json({ data: resume }, { status: 200 });
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
