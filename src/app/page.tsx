import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Notes from "@/components/Notes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default async function Home() {
  let skills = [];
  let projects = [];
  let notes = [];

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    ({ skills, projects, notes } = data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen text-white">
        <Hero />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Notes notes={notes} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
