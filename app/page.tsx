import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Works } from "@/components/works";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BottomNav } from "@/components/bottom-nav";

export default function Home() {
  return (
    <main className="min-h-screen pb-16 md:pb-0 ">
      <Header />
      <Hero />
      <Works />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <BottomNav />
    </main>
  );
}
