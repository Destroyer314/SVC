import { Hero } from "@/components/Hero";
import { ProgramDetails } from "@/components/ProgramDetails";
import { Partners } from "@/components/Partners";
import { GoalsMetrics } from "@/components/GoalsMetrics";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProgramDetails />
      <GoalsMetrics />
      <Partners />
    </main>
  );
}
