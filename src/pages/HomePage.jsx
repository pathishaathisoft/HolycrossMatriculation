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

function AnchorTargets({ ids = [] }) {
  return (
    <>
      {ids.map((id) => (
        <span key={id} id={id} className="block scroll-mt-32" aria-hidden="true" />
      ))}
    </>
  )
}

function HomePage() {
  return (
    <Layout>
      <AnnouncementModal announcement={announcementModal} />
      <main className="relative overflow-hidden">
        <HeroSlider slides={heroSlides} />
        <AnchorTargets
          ids={[
            'about',
            'overview',
            'announcements',
            'all-notices',
            'staff-login',
            'student-login',
            
             
            'calendar',
            'prospectus',
          ]}
        />
        <NewsInfoSection section={newsInfoSection} />
        <AnchorTargets ids={['introduction']} />
        <IntroductionSection section={introductionSection} />
        <AnchorTargets ids={['academics', 'departments']} />
        <ProgramsSection section={programsSection} />
        <AnchorTargets ids={['facilities']} />
        <FeatureCardsGrid cards={featureCards} />
        <AnchorTargets ids={['leadership', 'administration']} />
        <HighlightsSection section={highlightsSection} />
        <AnchorTargets ids={['stats']} />
        <StatsSection section={statsSection} />
        <AnchorTargets ids={['activities', 'events', 'gallery', 'campus-life', 'research']} />
        <EventsGallery section={eventsGallery} />
        <AnchorTargets ids={['brochure']} />
        <RecruitersSection section={recruitersSection} />
        <AnchorTargets ids={['admissions', 'how-to-apply', 'scholarships', 'feedback', 'help-desk']} />
        <ContactSection />
        <AnchorTargets ids={['committees']} />
      </main>
    </Layout>
  )
}

export default HomePage
