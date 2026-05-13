import { mediaAssets } from './mediaAssets.js'

export const heroSlides = [
  {
    id: 'campus-excellence',
    eyebrow: 'Holy Cross Matriculation',
    title: 'Best education for a bright academic future.',
    description:
      'A caring school community in Alangudi with strong academics, campus activities, and student-focused guidance.',
    image: mediaAssets.hero.campus,
    primaryAction: { label: 'Explore Programs', href: '#programs' },
    secondaryAction: { label: 'View Prospectus', href: '#prospectus' },
    stats: [],
  },
  {
    id: 'student-community',
    eyebrow: 'Student Community',
    title: 'Learning spaces that build discipline, confidence, and creativity.',
    description:
      'Students grow through classroom learning, sports, cultural programs, and daily school activities.',
    image: mediaAssets.hero.activity,
    primaryAction: { label: 'Campus Life', href: '#campus-life' },
    secondaryAction: { label: 'See Events', href: '#events' },
    stats: [
      { label: 'Teachers', value: '80+' },
      { label: 'Labs', value: '16' },
      { label: 'Awards', value: '40+' },
    ],
  },
  {
    id: 'academic-growth',
    eyebrow: 'Academic Progress',
    title: 'Practical learning with strong guidance and student success.',
    description:
      'Our school environment supports students with labs, activities, mentoring, and regular academic support.',
    image: mediaAssets.hero.cultural,
    primaryAction: { label: 'Academic Activities', href: '#activities' },
    secondaryAction: { label: 'Download Brochure', href: '#brochure' },
    stats: [
      { label: 'Activities', value: '120+' },
      { label: 'Projects', value: '35+' },
      { label: 'Events', value: '18+' },
    ],
  },
  {
    id: 'campus-entrance',
    eyebrow: 'Campus Identity',
    title: 'A safe and vibrant campus for learning and growth.',
    description:
      'Real campus spaces, outdoor activities, and guided learning support every student.',
    image: mediaAssets.hero.entrance,
    primaryAction: { label: 'Visit Campus', href: '#contact' },
    secondaryAction: { label: 'View Gallery', href: '#gallery' },
    stats: [
      { label: 'Campus', value: 'Open' },
      { label: 'Transport', value: 'Available' },
      { label: 'Care', value: 'Daily' },
    ],
  },
]

export const announcementModal = {
  active: true,
  eyebrow: 'Featured Update',
  title: 'School-wide achievement announcement',
  subtitle:
    'Celebrating student achievements and school updates from Holy Cross Matriculation.',
  body:
    'This announcement section can be used for admissions, results, awards, circulars, and important school notices.',
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
      title: 'Orientation and welcome programme for students',
      date: 'April 2026',
      tag: 'New',
    },
    {
      title: 'Scholarship applications and student support updates',
      date: 'March 2026',
      tag: 'Update',
    },
    {
      title: 'School academic review and activity announcement',
      date: 'February 2026',
      tag: 'Info',
    },
  ],

  visionMission: {
    heading: 'Vision & Mission',
    watermark: 'HOLY CROSS',

    vision: [
      'To guide students with values, discipline, knowledge, and confidence.',
      'To create a safe school environment where every child can learn and grow.',
    ],

    mission: [
      'To provide quality education with practical exposure and personal care.',
      'To encourage academics, sports, cultural activities, and responsible citizenship.',
    ],
  },

  quickLinks: [
    { label: 'Staff Login', href: '#staff-login', icon: 'user' },
    { label: 'Student Login', href: '#student-login', icon: 'student' },
    { label: 'Academic Calendar', href: '#calendar', icon: 'calendar' },
    { label: 'Prospectus', href: '#prospectus', icon: 'book' },
  ],

  noticeColumns: [
    {
      title: 'Circulars & Notices',
      items: [
        'Admissions and school update notices',
        'Assessment and activity schedules',
      ],
    },
    {
      title: 'Announcements',
      items: [
        'Campus events and celebration updates',
        'Parent communication and school reminders',
      ],
    },
    {
      title: 'Achievements',
      items: [
        'Academic result highlights',
        'Student participation and award updates',
      ],
    },
  ],
}

export const introductionSection = {
  eyebrow: 'Introduction',

  title: 'Holy Cross Matriculation Higher Secondary School, Alangudi',

  paragraphs: [
    'Holy Cross Matriculation Higher Secondary School focuses on academics, discipline, activities, and student development.',

    'Our campus includes classrooms, playgrounds, transport, labs, and supportive teachers for confident learning.',
  ],

  image: mediaAssets.campus.entrance,
}

export const programsSection = {
  eyebrow: 'Programs',

  title: 'Curriculum and Student Enrichment',

  description:
    'Our academic and extracurricular programs support a balanced education with strong values, science, arts, and sports.',

  categories: ['All', 'Science', 'Sports', 'Arts', 'Academic'],

  featured: {
    badge: 'Featured Program',
    category: 'Academic Excellence',
    title: 'Holistic Curriculum with Activity-Based Learning',
    description:
      'Students benefit from a curriculum that blends academics, practical labs, and co-curricular activities for deeper understanding.',
    image: mediaAssets.programs.featuredAcademic,
    stats: [
      { label: 'Labs', value: '16' },
      { label: 'Activities', value: '120+' },
      { label: 'Awards', value: '40+' },
    ],
    cta: { label: 'Apply Now', href: '#admissions' },
  },

  programs: [
    {
      title: 'Science and STEM Learning',
      description:
        'Hands-on science, lab experiments, and STEM projects inspire critical thinking and innovation.',
      icon: 'science',
      category: 'Science',
      image: mediaAssets.programs.scienceStem,
      cta: { label: 'View Details', href: '#contact' },
    },
    {
      title: 'Sports and Physical Education',
      description:
        'Structured physical education and sports coaching promote fitness, teamwork, and discipline.',
      icon: 'sports',
      category: 'Sports',
      image: mediaAssets.programs.sportsDevelopment,
      cta: { label: 'Join Sports', href: '#contact' },
    },
    {
      title: 'Arts, Culture & Creativity',
      description:
        'Creative arts, music, and cultural activities enhance student expression and confidence.',
      icon: 'palette',
      category: 'Arts',
      image: mediaAssets.programs.artsCulture,
      cta: { label: 'Explore Arts', href: '#contact' },
    },
    {
      title: 'Maths and Academic Support',
      description:
        'Strong academic coaching and mentoring help every student reach their potential.',
      icon: 'calculator',
      category: 'Academic',
      image: mediaAssets.programs.mathematics,
      cta: { label: 'Learn More', href: '#contact' },
    },
  ],

  cta: {
    title: 'Admissions are open for the new academic year',
    description:
      'Register your child for a learning environment that emphasizes academic achievement, values, and personal growth.',
    actions: [
      { label: 'Apply Online', href: '#admissions' },
      { label: 'Download Prospectus', href: '#prospectus', variant: 'outline' },
    ],
  },
}

export const featureCards = [
  {
    title: 'Strong academics',
    description: 'Experienced faculty and standards-based teaching help students achieve top academic results.',
    icon: 'graduation',
    featured: true,
  },
  {
    title: 'Safe campus',
    description: 'A disciplined and supportive school environment keeps students safe and focused on learning.',
    icon: 'shield',
  },
  {
    title: 'Active student life',
    description: 'Sports, culture, and campus clubs give students opportunities to grow beyond the classroom.',
    icon: 'users',
  },
]

export const highlightsSection = {
  title: 'What makes Holy Cross special',
  description:
    'A blend of supportive teaching, modern facilities, and student-led activities creates the ideal atmosphere for growth.',
  image: mediaAssets.facilities.playgroundWide,
  items: [
    {
      title: 'Expert teaching teams',
      description: 'Teachers guide academic learning with personalized support and strong classroom engagement.',
      icon: 'teacher',
    },
    {
      title: 'Modern science labs',
      description: 'Fully equipped labs make science lessons practical, safe, and inspiring.',
      icon: 'flask',
    },
    {
      title: 'Sport and wellness',
      description: 'Sports programs and physical education build health, discipline, and team spirit.',
      icon: 'users',
    },
  ],
}

export const statsSection = {
  background: mediaAssets.campus.overview,
  stats: [
    { icon: 'teacher', label: 'Dedicated Teachers', value: '80+' },
    { icon: 'users', label: 'Active Students', value: '900+' },
    { icon: 'book-open', label: 'Groups & Labs', value: '16' },
    { icon: 'shield', label: 'Safe Campus', value: '24/7' },
  ],
}

export const eventsGallery = {
  title: 'Campus Events & Activities',
  items: [
    {
      title: 'Cultural Celebration',
      image: mediaAssets.events.culturalDay,
      alt: 'Students celebrating a cultural event',
    },
    {
      title: 'Academic Showcase',
      image: mediaAssets.events.academicShowcase,
      alt: 'Academic showcase presentation for students',
    },
    {
      title: 'Sports Day Rally',
      image: mediaAssets.events.campusRally,
      alt: 'Students participating in a school sports day',
    },
  ],
}

export const recruitersSection = {
  eyebrow: 'School Gallery',

  title: 'School Campus Photos',

  description:
    'School campus images, student activities, celebrations, and events are displayed in this gallery section.',

  photos: mediaAssets.allPhotos,
}

export const footerData = {
  background: mediaAssets.campus.front,

  contact: {
    name: 'Holy Cross Matriculation Higher Secondary School',
    address: 'KVS Street Alangudi, Pudukkottai, Tamil Nadu 622301',
    phone: '+91 94436 36251',
    email: 'holycross@gmail.com',
  },

  quickLinks: [
    'Admissions',
    'Campus Life',
    'School Events',
    'Gallery',
    'Contact',
  ],

  usefulLinks: [
    'Parent Committee',
    'Student Support',
    'Academic Activities',
    'School Committee',
    'School Calendar',
  ],

  map: {
    title: 'Location',

    description:
      'Holy Cross Higher Secondary School is a trusted school focused on academic excellence and student development.',
  },

  bottomText: {
    copyright: 'Copyright 2026 Holy Cross School.',

    credit: 'Learn to serve, serve to people.',
  },
}