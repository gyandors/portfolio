import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI is not set");
}

const client = new MongoClient(uri);

export async function GET() {
  await client.connect();

  const db = client.db("gyandors");
  const collection = db.collection("skills");
  const collection2 = db.collection("projects");
  const collection3 = db.collection("notes");
  const collection4 = db.collection("resume");

  const skills = await collection.find({}).toArray();
  const projects = await collection2.find({}).toArray();
  const notes = await collection3.find({}).toArray();
  const resume = await collection4.find({}).toArray();

  await client.close();

  return NextResponse.json({ skills, projects, notes, resume });
}

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  await client.connect();

  const db = client.db("gyandors");
  const collection = db.collection("contacts");

  await collection.insertOne({ name, email, message });

  await client.close();

  return NextResponse.json({ message: "Contact form submitted" });
}
