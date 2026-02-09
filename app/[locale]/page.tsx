import HeroSection from '@/components/HeroSection'
import ServicesPreview from '@/components/ServicesPreview'
import AboutPreview from '@/components/AboutPreview'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
    </div>
  )
}


