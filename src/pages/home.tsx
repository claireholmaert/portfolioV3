// components
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";

export const Home = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};
