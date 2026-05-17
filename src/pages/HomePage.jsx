import { useCallback, useEffect, useRef, useState } from 'react'
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
import StaffLoginModal from '../components/home/StaffLoginModal.jsx'
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

const staffLoginHash = '#staff-login'
const getCurrentUrl = () =>
  `${window.location.pathname}${window.location.search}${window.location.hash}`
const getBaseUrl = () => `${window.location.pathname}${window.location.search}`

function HomePage() {
  const previousLocationRef = useRef(getCurrentUrl())
  const [isStaffLoginOpen, setIsStaffLoginOpen] = useState(
    () => window.location.hash === staffLoginHash,
  )

  useEffect(() => {
    const syncStaffLoginModal = () => {
      if (window.location.hash !== staffLoginHash) {
        previousLocationRef.current = getCurrentUrl()
      }

      setIsStaffLoginOpen(window.location.hash === staffLoginHash)
    }

    window.addEventListener('hashchange', syncStaffLoginModal)

    return () => {
      window.removeEventListener('hashchange', syncStaffLoginModal)
    }
  }, [])

  const openStaffLogin = useCallback(() => {
    if (window.location.hash !== staffLoginHash) {
      previousLocationRef.current = getCurrentUrl()
    }

    setIsStaffLoginOpen(true)
    window.history.pushState(null, '', staffLoginHash)
  }, [])

  const closeStaffLogin = useCallback(() => {
    setIsStaffLoginOpen(false)
    const nextUrl =
      previousLocationRef.current && previousLocationRef.current !== staffLoginHash
        ? previousLocationRef.current
        : getBaseUrl()

    window.history.replaceState(null, '', nextUrl)
  }, [])

  return (
    <Layout>
      <AnnouncementModal announcement={announcementModal} />
      <StaffLoginModal isOpen={isStaffLoginOpen} onClose={closeStaffLogin} />
      <main className="relative overflow-hidden">
        <HeroSlider slides={heroSlides} />
        <AnchorTargets
          ids={[
            'about',
            'overview',
            'announcements',
            'all-notices',
            'student-login',
            'calendar',
            'prospectus',
          ]}
        />
        <NewsInfoSection section={newsInfoSection} onStaffLoginClick={openStaffLogin} />
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
