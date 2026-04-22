import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ResearchSection } from "@/components/sections/research";
import { SkillsSection } from "@/components/sections/skills";
import { CompaniesSection } from "@/components/sections/companies";
import { AchievementsSection } from "@/components/sections/achievements";
import { HobbiesSection } from "@/components/sections/hobbies";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ResearchSection />
      <SkillsSection />
      <CompaniesSection />
      <AchievementsSection />
      <HobbiesSection />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Efaj Hossain. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
