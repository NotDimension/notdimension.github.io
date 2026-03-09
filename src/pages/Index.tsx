import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RolesSection from "@/components/RolesSection";
import SkillsSection from "@/components/SkillsSection";
import LearningSection from "@/components/LearningSection";
import ConnectSection from "@/components/ConnectSection";

const Index = () => {
  return (
    <div className="relative noise-overlay">
      <HeroSection />
      <AboutSection />
      <RolesSection />
      <SkillsSection />
      <LearningSection />
      <ConnectSection />
    </div>
  );
};

export default Index;
