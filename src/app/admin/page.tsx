import Contacts from "@/components/admin/Contacts";
import { client } from "@/lib/db";

export interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
}

async function fetchData() {
  try {
    await client.connect();
    const db = client.db("gyandors");
    const collection = db.collection("contacts");
    return await collection.find().toArray();
  } catch (error) {
    return [];
  } finally {
    await client.close();
  }
}

export default async function Admin() {
  const data = await fetchData();

  const contacts: Message[] = data.map((c) => ({
    _id: c._id.toString(),
    name: c.name,
    email: c.email,
    message: c.message,
  }));

  return (
    <section className="pt-20">
      <Contacts contactMessages={contacts} />
    </section>
  );
}
