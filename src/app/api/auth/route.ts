import { NextResponse, NextRequest } from "next/server";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { client } from "@/lib/db";
import { HttpError } from "@/lib/errors";

export async function POST(request: NextRequest) {
  try {
    await client.connect();

    const { email, password } = await request.json();
    if (!email || !password)
      throw new HttpError("Please enter the required details.", 400);

    const db = client.db("gyandors");
    const collection = db.collection("users");
    const user = await collection.findOne({ email });

    if (!user) throw new HttpError("User with this email not found.", 404);

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid)
      throw new HttpError("Please enter the valid password.", 401);

    const token = sign(user, process.env.SECRET_KEY!, { expiresIn: "7d" });

    return NextResponse.json({ data: token }, { status: 201 });
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
