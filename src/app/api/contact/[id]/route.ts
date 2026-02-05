import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { client } from "@/lib/db";
import { HttpError } from "@/lib/errors";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await client.connect();

    const { id } = await params;

    const db = client.db("gyandors");
    const collection = db.collection("contacts");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0)
      throw new HttpError("Contact message not found.", 404);

    return NextResponse.json(
      { message: "Contact message has been deleted successfully." },
      { status: 200 },
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
