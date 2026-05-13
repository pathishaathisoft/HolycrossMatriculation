import { mediaAssets } from './mediaAssets.js'

export const siteConfig = {
  brand: {
    logo: mediaAssets.logo,
    mark: 'IC',
    preTitle: 'Learn to serve, serve to people',
    name: 'HOLY CROSS MATRICULATION HIGHER SECONDARY SCHOOL',
    description:
      'A reputed school at KVS Street, Alangudi, focused on disciplined learning, campus care, and all-round student growth.',
    tags: ['Admissions Open', 'Recognized by Government of Tamilnadu', 'Quality-Focused Campus'],
  },
  topBar: {
    contactItems: [
      {
        type: 'email',
        label: 'holycross@gmail.com',
        href: 'mailto:holycross@gmail.com',
      },
      {
        type: 'phone',
        label: '+9443636251',
        href: 'tel:+919443636251',
      },
      {
        type: 'location',
        label: 'KVS Street, Alangudi, Pudukkottai - 622201',
        href: '#contact',
      },
    ],
    quickActions: [
      { label: 'Gallery', href: '#events' },
      { label: 'Admissions', href: '#contact' },
      { label: 'Search', href: '#contact' },
    ],
  },
  accreditationBadges: [
    { shortLabel: 'UG', label: 'Recognition' },
    { shortLabel: 'NA', label: 'Accreditation' },
    { shortLabel: 'RF', label: 'Research' },
  ],
  navbarCta: {
    label: 'Apply Now',
    href: '#contact',
  },
  homepageSectionOrder: [
    'TopBar',
    'MainHeader',
    'Navbar',
    'HeroSlider',
    'AnnouncementModal',
    'NewsInfoSection',
    'IntroductionSection',
    'FeatureCardsGrid',
    'HighlightsSection',
    'StatsSection',
    'EventsGallery',
    'RecruitersSection',
    'Footer',
  ],
}
