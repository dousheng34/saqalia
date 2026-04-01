import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import StatsSection from '@/components/sections/StatsSection/StatsSection';
import FeaturesSection from '@/components/sections/FeaturesSection/FeaturesSection';
import CoursesPreview from '@/components/sections/CoursesPreview/CoursesPreview';
import ToolsPreview from '@/components/sections/ToolsPreview/ToolsPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection/PricingSection';
import CtaSection from '@/components/sections/CtaSection/CtaSection';

export async function generateMetadata() {
  return {
    title: 'Saqalia — AI Platform for Teachers | ИИ Платформа для Учителей',
    description: 'Создавайте уроки, игры, презентации и видео с помощью ИИ. Экономьте 20+ часов в неделю. Платформа Saqalia для учителей Казахстана.',
    keywords: 'AI, учителя, Казахстан, ИИ, уроки, игры, презентации, вайбкодинг',
    openGraph: {
      title: 'Saqalia — AI Platform for Teachers',
      description: 'Next-gen AI platform for teachers. Create lessons, games, and videos with AI.',
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CoursesPreview />
        <ToolsPreview />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
