import { createSceneMedia } from './createPlaceholderMedia.js'
import { mediaAssets } from './mediaAssets.js'

export const heroSlides = [
  {
    id: 'campus-excellence',
    eyebrow: 'Institutional Template',
    title: 'Best education for a future-ready academic journey.',
    description:
      'A bold homepage hero inspired by traditional college websites, designed to highlight admissions, achievements, and campus identity with flexible placeholder content.',
    image: mediaAssets.hero.campus,
    primaryAction: { label: 'Explore Programs', href: '#programs' },
    secondaryAction: { label: 'View Prospectus', href: '#prospectus' },
    stats: [
      { label: 'Departments', value: '12+' },
      { label: 'Clubs', value: '24' },
      { label: 'Placements', value: '92%' },
    ],
  },
  {
    id: 'student-community',
    eyebrow: 'Student Community',
    title: 'Build a homepage that balances trust, warmth, and academic credibility.',
    description:
      'This slide layout gives institutions space for student life, academic messaging, and clear calls to action without hardcoding any real client content.',
    image: mediaAssets.hero.activity,
    primaryAction: { label: 'Campus Life', href: '#campus-life' },
    secondaryAction: { label: 'See Events', href: '#events' },
    stats: [
      { label: 'Mentors', value: '80+' },
      { label: 'Labs', value: '16' },
      { label: 'Scholarships', value: '40+' },
    ],
  },
  {
    id: 'research-growth',
    eyebrow: 'Academic Progress',
    title: 'Highlight innovation, support systems, and institution-wide growth.',
    description:
      'The hero module is reusable across colleges, schools, and training institutes with centralized data for slide text, metrics, and action links.',
    image: mediaAssets.hero.cultural,
    primaryAction: { label: 'Research Cell', href: '#research' },
    secondaryAction: { label: 'Download Brochure', href: '#brochure' },
    stats: [
      { label: 'Journals', value: '120+' },
      { label: 'Projects', value: '35' },
      { label: 'MoUs', value: '18' },
    ],
  },
]

export const announcementModal = {
  active: true,
  eyebrow: 'Featured Update',
  title: 'Institution-wide achievement announcement',
  subtitle: 'Use this modal for circulars, admissions, accreditations, or celebration posters.',
  body: 'Designed as a reusable overlay with placeholder text and poster artwork so your future client content can be swapped in from one data file.',
  image: mediaAssets.posters.achievement,
  poster: {
    eyebrow: 'Holy Cross Higher Secondary School',
    title: 'Hearty Congratulations',
    image: mediaAssets.posters.achievement,
    alt: 'Holy Cross achievement poster',
    ribbon: '+2 Results',
    score: 'Outstanding Performance',
    caption: 'Academic Achievement',
    highlight: '2024 - 2025',
    stats: [
      { label: 'Top Score', value: '576/600' },
      { label: 'Students', value: '10+' },
      { label: 'Pass Rate', value: '100%' },
      { label: 'Awards', value: '3' },
    ],
  },
  cta: { label: 'Read Full Notice', href: '#announcements' },
}

export const newsInfoSection = {
  latestNews: [
    {
      title: 'Template notice for semester orientation and welcome programme',
      date: 'April 2026',
      tag: 'New',
    },
    {
      title: 'Placeholder circular for scholarship applications and financial aid',
      date: 'March 2026',
      tag: 'Update',
    },
    {
      title: 'Sample announcement for accreditation review and academic audit',
      date: 'February 2026',
      tag: 'Info',
    },
  ],
  visionMission: {
    heading: 'Institutional Development Plan',
    watermark: 'ACADEMIC TEMPLATE',
    vision: [
      'To present academic excellence through an adaptable digital identity.',
      'To support institutions with reusable content blocks for announcements, notices, and student resources.',
    ],
    mission: [
      'To keep homepage content modular, centralized, and easy to update.',
      'To provide a trustworthy visual system for education-focused organizations.',
    ],
  },
  quickLinks: [
    { label: 'Staff Login', href: '#staff-login', icon: 'user' },
    { label: 'Student Login', href: '#student-login', icon: 'graduation' },
    { label: 'NAAC / SSR', href: '#naac', icon: 'badge' },
    { label: 'IQAC', href: '#iqac', icon: 'clipboard' },
    { label: 'Academic Calendar', href: '#calendar', icon: 'calendar' },
    { label: 'Prospectus', href: '#prospectus', icon: 'book' },
  ],
  noticeColumns: [
    {
      title: 'Circulars & Notices',
      items: ['Campus drive invitation notice', 'Internal assessment schedule'],
    },
    {
      title: 'Announcements',
      items: ['New programme launch update', 'Template alumni meet notice'],
    },
    {
      title: 'Achievements',
      items: ['Department award placeholder', 'Academic rank update'],
    },
  ],
}

export const introductionSection = {
  eyebrow: 'Introduction',
  title: 'A reusable institutional template for colleges and schools',
  paragraphs: [
    'This section mirrors the classic introduction area seen on many academic websites: a strong image block on the left and a confident summary on the right.',
    'All copy remains placeholder-based so the eventual institution can replace history, mission, and campus details without touching component structure.',
  ],
  image: createSceneMedia({
    title: 'Introduction Block',
    subtitle: 'Image Placeholder',
    width: 900,
    height: 1100,
    background: ['#8db8df', '#46688f'],
    accent: '#ecd58f',
    glow: '#eef8ff',
  }),
}

export const programsSection = {
  eyebrow: 'Programs',
  title: 'Explore academic programs built for growth and confidence',
  description:
    'A curated set of school programs, departments, and learning tracks presented with a premium visual system for easy scanning on desktop and mobile.',
  categories: ['All', 'Academic', 'Sports', 'Arts', 'STEM'],
  featured: {
    title: 'Academic Excellence Track',
    category: 'Academic',
    description:
      'A flagship learning path focused on structured academics, assessment support, and result-driven mentoring.',
    badge: 'Featured Program',
    image: createSceneMedia({
      title: 'Academic Track',
      subtitle: 'Featured Program',
      width: 1200,
      height: 900,
      background: ['#1f3e73', '#0e1831'],
      accent: '#f0bf4c',
      glow: '#f8f0c8',
    }),
    stats: [
      { label: 'Classes', value: 'VI-XII' },
      { label: 'Support', value: 'Mentorship' },
      { label: 'Outcome', value: 'Strong Results' },
    ],
    cta: { label: 'Apply Now', href: '#contact' },
  },
  programs: [
    {
      title: 'Science & STEM',
      category: 'STEM',
      description: 'Hands-on science labs, computer exposure, and a future-ready technology track.',
      icon: 'science',
      image: mediaAssets.programs.scienceStem,
      cta: { label: 'Learn More', href: '#contact' },
    },
    {
      title: 'Sports Development',
      category: 'Sports',
      description: 'Training, discipline, and physical development through indoor and outdoor sports.',
      icon: 'sports',
      image: mediaAssets.programs.sportsDevelopment,
      cta: { label: 'Learn More', href: '#contact' },
    },
    {
      title: 'Arts & Culture',
      category: 'Arts',
      description: 'Music, drawing, performance, and cultural activities that build expression and confidence.',
      icon: 'palette',
      image: mediaAssets.programs.artsCulture,
      cta: { label: 'Learn More', href: '#contact' },
    },
    {
      title: 'Mathematics Lab',
      category: 'Academic',
      description: 'Problem-solving, logical reasoning, and performance-focused math coaching.',
      icon: 'calculator',
      image: createSceneMedia({
        title: 'Math Track',
        subtitle: 'Academic Program',
        width: 900,
        height: 700,
        background: ['#173f5f', '#0d1b33'],
        accent: '#f2c14e',
        glow: '#f9f1c1',
      }),
      cta: { label: 'Apply Now', href: '#contact' },
    },
  ],
  cta: {
    title: 'Admissions are open for the next academic cycle.',
    description:
      'Connect with our team to discuss the right program, curriculum path, and admission steps for your child.',
    actions: [
      { label: 'Admissions Open', href: '#admissions', variant: 'primary' },
      { label: 'Contact Us', href: '#contact', variant: 'outline' },
    ],
  },
}

export const featureCards = [
  {
    title: 'Qualified Faculty',
    description: 'Highlight experienced mentors, academic leadership, and teaching quality.',
    icon: 'users',
    featured: true,
  },
  {
    title: 'Our Courses',
    description: 'Use this card to list programmes, departments, or specializations.',
    icon: 'book-open',
  },
  {
    title: 'University Rank',
    description: 'Showcase rank holders, achievements, awards, or accreditations.',
    icon: 'landmark',
  },
  {
    title: 'Computer Lab',
    description: 'Describe digital infrastructure, internet access, and technology support.',
    icon: 'monitor',
  },
  {
    title: 'Library System',
    description: 'Present books, journals, learning tools, and knowledge resources.',
    icon: 'library',
  },
  {
    title: 'Abundant Labs',
    description: 'Reserve this space for science labs, studios, workshops, or research units.',
    icon: 'flask',
  },
]

export const highlightsSection = {
  image: mediaAssets.posters.results,
  title: 'Why this template works for education websites',
  description:
    'The dark blue and gold presentation echoes traditional institutional branding while the component system keeps the codebase modern, maintainable, and ready for future data integration.',
  items: [
    {
      title: 'About Courses',
      description: 'Explain programme eligibility, duration, and curriculum structure.',
      icon: 'chart',
    },
    {
      title: 'Books & Library',
      description: 'Summarize library access, reference materials, digital catalogues, and journals.',
      icon: 'books',
    },
    {
      title: 'Certified Teachers',
      description: 'Showcase faculty strength, certifications, and mentoring support.',
      icon: 'teacher',
    },
  ],
}

export const statsSection = {
  background: createSceneMedia({
    title: 'Institution Snapshot',
    subtitle: 'Numbers and Milestones',
    width: 1600,
    height: 900,
    background: ['#1e487b', '#0d1e3f'],
    accent: '#f0bf4c',
    glow: '#f9f0c0',
  }),
  stats: [
    { label: 'Students', value: '1228', icon: 'users' },
    { label: 'Our Staffs', value: '106', icon: 'teacher' },
    { label: 'Events', value: '924', icon: 'badge' },
    { label: 'Our Courses', value: '27', icon: 'book-open' },
  ],
}

export const eventsGallery = {
  title: 'Our Events',
  items: [
    {
      title: 'Cultural Day',
      image: mediaAssets.events.culturalDay,
      alt: 'Cultural day celebration at Holy Cross school',
    },
    {
      title: 'Academic Showcase',
      image: mediaAssets.events.academicShowcase,
      alt: 'Academic showcase and student achievement poster',
    },
    {
      title: 'Campus Rally',
      image: mediaAssets.events.campusRally,
      alt: 'Campus rally and school announcement poster',
    },
  ],
}

export const recruitersSection = {
  eyebrow: 'Upload Photos',
  title: 'Project Detailed Photos',
  description:
    'Your original image is featured first as the main large cover photo. Additional uploaded photos appear below as gallery thumbnails and can be viewed in the same display area.',
  photos: [
    {
      id: 'main-cover',
      title: 'Main Campus Cover',
      description: 'Primary detailed photo shown in large introduction-style layout.',
      image: mediaAssets.campus.mainCover,
    },
    {
      id: 'poster-1',
      title: 'Admission Notice',
      description: 'Uploaded supporting image shown as part of the gallery.',
      image: mediaAssets.posters.admission,
    },
    {
      id: 'poster-2',
      title: 'Academic Achievement Poster',
      description: 'Uploaded supporting image shown as part of the gallery.',
      image: mediaAssets.posters.results,
    },
  ],
}

export const footerData = {
  background: mediaAssets.campus.mainCover,
  contact: {
    name: 'Holy Cross Matriculation Higher Secondary School',
    address: 'KVS Street Alngudi, Pudukkottai, Tamil Nadu 622301',
    phone: '+00 1234 567 890 / +00 1234 567 891',
    email: 'holycross@gmail.com',
  },
  quickLinks: ['RTI', 'Undertaking', 'Campus Life', 'Alumni', 'Telephone Directory'],
  usefulLinks: ['ICC', 'Research', 'Student Grievance', 'Finance Committee', 'Academic Council'],
  map: {
    title: 'Location',
    description: 'Holy Cross higher secondary School is a reputed Institutional.',
  },
  bottomText: {
    copyright: 'Copyright 2026 Template Education Group.',
    credit: 'Learn to serve serve to people.',
  },
}
