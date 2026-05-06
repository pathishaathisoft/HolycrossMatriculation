export const siteConfig = {
  brand: {
    mark: 'IC',
    preTitle: 'Template Institution Identity',
    name: 'HOLY CROSS MATRICULATION HIGHER SECONDARY SCHOOL',
    description:
      'Autonomous-style academic template with structured sections for admissions, campus highlights, notices, events, and institutional trust signals.',
    tags: ['Admissions Open', 'Affiliated Institution', 'Quality-Focused Campus'],
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
        href: 'cell:+98653115089',
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
