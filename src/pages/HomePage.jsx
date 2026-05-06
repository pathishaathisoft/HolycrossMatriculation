import Layout from '../components/layout/Layout.jsx'
import AnnouncementModal from '../components/home/AnnouncementModal.jsx'
import EventsGallery from '../components/home/EventsGallery.jsx'
import FeatureCardsGrid from '../components/home/FeatureCardsGrid.jsx'
import HeroSlider from '../components/home/HeroSlider.jsx'
import HighlightsSection from '../components/home/HighlightsSection.jsx'
import IntroductionSection from '../components/home/IntroductionSection.jsx'
import ContactSection from '../components/home/ContactSection.jsx'
import ProgramsSection from '../components/home/ProgramsSection.jsx'
import NewsInfoSection from '../components/home/NewsInfoSection.jsx'
import RecruitersSection from '../components/home/RecruitersSection.jsx'
import StatsSection from '../components/home/StatsSection.jsx'
import {
  announcementModal,
  eventsGallery,
  featureCards,
  heroSlides,
  highlightsSection,
  introductionSection,
  programsSection,
  newsInfoSection,
  recruitersSection,
  statsSection,
} from '../data/homeData.js'

function HomePage() {
  return (
    <Layout>
      <AnnouncementModal announcement={announcementModal} />
      <main className="relative overflow-hidden">
        <HeroSlider slides={heroSlides} />
        <NewsInfoSection section={newsInfoSection} />
        <IntroductionSection section={introductionSection} />
        <ProgramsSection section={programsSection} />
        <FeatureCardsGrid cards={featureCards} />
        <HighlightsSection section={highlightsSection} />
        <StatsSection section={statsSection} />
        <EventsGallery section={eventsGallery} />
        <RecruitersSection section={recruitersSection} />
        <ContactSection />
      </main>
    </Layout>
  )
}

export default HomePage
