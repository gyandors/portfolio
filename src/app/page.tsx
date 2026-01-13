import Header from "@/components/navigation/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Notes from "@/components/Notes";
import Contact from "@/components/Contact";
import Footer from "@/components/navigation/Footer";

export const revalidate = 3600;

export default async function Home() {
  let resume;

  try {
    const baseUrl = process.env.BASE_URL;

    const response = await fetch(`${baseUrl}/api`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    const data = result.data;

    resume = data.link;
  } catch (error) {
    console.error(error);
  }

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
