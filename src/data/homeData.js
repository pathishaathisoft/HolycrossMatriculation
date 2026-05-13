import { mediaAssets } from './mediaAssets.js'

export const heroSlides = [
  {
    id: 'campus-excellence',
    eyebrow: 'Holy Cross Matriculation',
    title: 'Best education for a future-ready academic journey.',
    description:
      'A caring school community in Alangudi with strong academics, campus activities, and student-focused guidance.',
    image: mediaAssets.hero.campus,
    primaryAction: { label: 'Explore Programs', href: '#programs' },
    secondaryAction: { label: 'View Prospectus', href: '#prospectus' },
    stats: [
      
    ],
  },
  {
    id: 'student-community',
    eyebrow: 'Student Community',
    title: 'Learning spaces that balance discipline, confidence, and joyful participation.',
    description:
      'Students grow through classroom learning, sports, cultural programs, and daily school routines built around care.',
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
    title: 'Practical learning, strong mentoring, and steady academic progress.',
    description:
      'Our academic environment supports students with labs, activities, result-focused mentoring, and regular communication.',
    image: mediaAssets.hero.cultural,
    primaryAction: { label: 'Research Cell', href: '#research' },
    secondaryAction: { label: 'Download Brochure', href: '#brochure' },
    stats: [
      { label: 'Journals', value: '120+' },
      { label: 'Projects', value: '35' },
      { label: 'MoUs', value: '18' },
    ],
  },
  {
    id: 'campus-entrance',
    eyebrow: 'Campus Identity',
    title: 'A safe, vibrant campus for academics, play, and character building.',
    description:
      'Real campus spaces, outdoor activities, and guided learning come together to support every student.',
    image: mediaAssets.hero.entrance,
    primaryAction: { label: 'Visit Campus', href: '#contact' },
    secondaryAction: { label: 'View Gallery', href: '#gallery' },
    stats: [
      { label: 'Campus', value: 'Open' },
      { label: 'Transport', value: 'Active' },
      { label: 'Care', value: 'Daily' },
    ],
  },
]

export const announcementModal = {
  active: true,
  eyebrow: 'Featured Update',
  title: 'Institution-wide achievement announcement',
  subtitle: 'Celebrating student achievement and school updates from Holy Cross Matriculation.',
  body: 'This announcement area can be used for admissions, results, awards, circulars, and important school notices.',
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
    heading: 'Vision & Mission',
    watermark: 'HOLY CROSS',
    vision: [
      'To guide students with values, discipline, knowledge, and confidence for future opportunities.',
      'To create a safe school environment where every child can learn, participate, and grow.',
    ],
    mission: [
      'To provide strong classroom teaching, practical exposure, and personal care for each learner.',
      'To encourage academic progress, sports, cultural activity, service, and responsible citizenship.',
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
      items: ['Admissions and school update notices', 'Assessment and activity schedules'],
    },
    {
      title: 'Announcements',
      items: ['Campus events and celebration updates', 'Parent communication and school reminders'],
    },
    {
      title: 'Achievements',
      items: ['Academic result highlights', 'Student participation and award updates'],
    },
  ],
}

export const introductionSection = {
  eyebrow: 'Introduction',
  title: 'Holy Cross Matriculation Higher Secondary School, Alangudi',
  paragraphs: [
    'Holy Cross Matriculation Higher Secondary School serves students with a balanced focus on academics, discipline, activities, and personal growth.',
    'Our campus brings together classrooms, transport, play areas, lab learning, and supportive staff so children can learn with confidence every day.',
  ],
  image: mediaAssets.campus.entrance,
}

export const programsSection = {
  eyebrow: 'Programs',
  title: 'Explore learning programs built for growth and confidence',
  description:
    'A clear view of academics, STEM learning, sports, arts, and activity-based development at Holy Cross.',
  categories: ['All', 'Academic', 'Sports', 'Arts', 'STEM'],
  featured: {
    title: 'Academic Excellence Track',
    category: 'Academic',
    description:
      'A focused academic path with classroom discipline, lab exposure, assessment support, and mentoring.',
    badge: 'Featured Program',
    image: mediaAssets.programs.featuredAcademic,
    stats: [
      { label: 'Classes', value: 'VI-XII' },
      { label: 'Support', value: 'Mentorship' },
      { label: 'Outcome', value: 'Strong Results' },
    ],
    cta: { label: 'Apply Now', href: '#contact' },
  },
  programs: [
    {
      title: 'Science Laboratory',
      category: 'LAB',
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
      title: 'Plantinng Trees & Green Activity',
      category: 'STEM',
      description: 'Problem-solving, logical reasoning, and performance-focused math coaching.',
      icon: 'calculator',
      image: mediaAssets.programs.mathematics,
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
  image: mediaAssets.facilities.playgroundClose,
  title: 'Why families choose Holy Cross',
  description:
    'The school combines academic care, active campus life, practical facilities, and values-based guidance for students.',
  items: [
    {
      title: 'About Groups & Clubs',
      description: 'Structured learning support across school levels with regular academic guidance.',
      icon: 'chart',
    },
    {
      title: 'Books & Library',
      description: 'Learning resources and reading habits that strengthen classroom understanding.',
      icon: 'books',
    },
    {
      title: 'Certified Teachers',
      description: 'Experienced staff guide students with discipline, care, and mentoring support.',
      icon: 'teacher',
    },
  ],
}

export const statsSection = {
  background: mediaAssets.campus.front,
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
      title: 'Annual Day',
      image: mediaAssets.events.annualDay,
      alt: 'Annual day celebration at Holy Cross school',
    },
    {
      title: 'Academic Showcase',
      image: mediaAssets.events.greenActivity,
      alt: 'Students and staff in a campus learning activity',
    },
    {
      title: 'Campus Rally',
      image: mediaAssets.events.sportsDay,
      alt: 'Students playing volleyball on campus',
    },
    {
      title: 'Transport Facility',
      image: mediaAssets.events.transportLineup,
      alt: 'School buses lined up on campus',
    },
  ],
}

export const recruitersSection = {
  eyebrow: 'Upload Photos',
  title: 'Project Detailed Photos',
  description:
    'Your original image is featured first as the main large cover photo. Additional uploaded photos appear below as gallery thumbnails and can be viewed in the same display area.',
  photos: mediaAssets.allPhotos,
}

export const footerData = {
  background: mediaAssets.campus.front,
  contact: {
    name: 'Holy Cross Matriculation Higher Secondary School',
    address: 'KVS Street Alngudi, Pudukkottai, Tamil Nadu 622301',
    phone: '+91 94436 36251',
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
