import Header from "@/components/navigation/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Notes from "@/components/Notes";
import Contact from "@/components/Contact";
import Footer from "@/components/navigation/Footer";
import { client } from "@/lib/db";

async function fetchData() {
  try {
    await client.connect();
    const db = client.db("gyandors");
    const collection = db.collection("resume");
    return await collection.findOne();
  } catch (error) {
    return {};
  } finally {
    await client.close();
  }
}

export default async function Home() {
  const data: { link?: string } | null = await fetchData();
  const resume = data?.link;

  return (
    <>
      <Header />
      <main className="min-h-screen text-white">
        <Hero resume={resume} />
        <Skills />
        <Projects />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
