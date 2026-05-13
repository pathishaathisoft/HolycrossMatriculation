import mainCoverImage from '../assets/project-photos/main-cover.png'
import culturalDayImage from '../assets/project-photos/cultural-day.jpg'
import academicShowcaseImage from '../assets/project-photos/academic-showcase.jpg'
import campusRallyImage from '../assets/project-photos/campus-rally.jpg'
import admissionPosterImage from '../assets/project-photos/photo-2.jpg'
import achievementPosterImage from '../assets/project-photos/announcement-poster.jpg'
import resultPosterImage from '../assets/project-photos/photo-3.jpg'
import sportsEventImage from '../assets/project-photos/Pasted image (4).png'
import culturalEventImage from '../assets/project-photos/Pasted image.png'
import stemActivityImage from '../assets/project-photos/Pasted image (2).png'
import campusActivityImage from '../assets/project-photos/Pasted image (3).png'
import transportImage from '../assets/project-photos/Pasted image (5).png'
import playAreaWideImage from '../assets/project-photos/Pasted image (6).png'
import entranceImage from '../assets/project-photos/Pasted image (7).png'
import playgroundWideImage from '../assets/project-photos/Pasted image (8).png'
import playAreaCloseImage from '../assets/project-photos/Pasted image (9).png'
import labActivityImage from '../assets/project-photos/Pasted image (10).png'
import campusDuskImage from '../assets/project-photos/Pasted image (11).png'
import campusFrontImage from '../assets/project-photos/Pasted image (12).png'
import volleyballImage from '../assets/project-photos/Pasted image (13).png'
import campusPhotoWebp from '../assets/project-photos/photos.webp'
import logoImage from '../assets/project-photos/photo-4 (2).jpeg'

export const mediaAssets = {
  logo: logoImage,
  campus: {
    mainCover: mainCoverImage,
    activity: campusActivityImage,
    entrance: entranceImage,
    front: campusFrontImage,
    dusk: campusDuskImage,
    overview: campusPhotoWebp,
  },
  hero: {
    campus: campusFrontImage,
    activity: volleyballImage,
    cultural: culturalEventImage,
    entrance: entranceImage,
  },
  events: {
    culturalDay: culturalDayImage,
    academicShowcase: academicShowcaseImage,
    campusRally: campusRallyImage,
    sportsDay: volleyballImage,
    transportLineup: transportImage,
    greenActivity: stemActivityImage,
  },
  posters: {
    admission: admissionPosterImage,
    achievement: achievementPosterImage,
    results: resultPosterImage,
  },
  programs: {
    featuredAcademic: labActivityImage,
    scienceStem: labActivityImage,
    sportsDevelopment: volleyballImage,
    artsCulture: culturalEventImage,
    mathematics: stemActivityImage,
    playground: playAreaCloseImage,
  },
  facilities: {
    playgroundWide: playgroundWideImage,
    playgroundClose: playAreaCloseImage,
    transport: transportImage,
    lab: labActivityImage,
  },
  allPhotos: [
    { id: 'campus-main', title: 'Campus Front View', description: 'A broad view of the Holy Cross school campus and open ground.', image: campusFrontImage },
    { id: 'campus-overview', title: 'Campus Overview', description: 'A bright campus overview photo for school identity sections.', image: campusPhotoWebp },
    { id: 'campus-cover', title: 'School Cover Photo', description: 'Primary school cover image used across the website.', image: mainCoverImage },
    { id: 'campus-entrance', title: 'School Entrance', description: 'Main entrance and school name board.', image: entranceImage },
    { id: 'campus-dusk', title: 'Evening Campus View', description: 'Campus building and grounds in soft evening light.', image: campusDuskImage },
    { id: 'transport', title: 'Transport Facility', description: 'School buses and campus transport area.', image: transportImage },
    { id: 'play-area-wide', title: 'Play Area', description: 'Outdoor play area with safe activity equipment.', image: playAreaWideImage },
    { id: 'play-area-close', title: 'Playground Equipment', description: 'Colorful playground equipment for young learners.', image: playAreaCloseImage },
    { id: 'sports-volleyball', title: 'Sports Activity', description: 'Students participating in outdoor sports on campus.', image: volleyballImage },
    { id: 'lab-activity', title: 'Science Lab Activity', description: 'Students learning through practical laboratory sessions.', image: labActivityImage },
    { id: 'green-activity', title: 'Campus Activity', description: 'Students and staff taking part in a campus activity.', image: stemActivityImage },
    { id: 'cultural-event', title: 'Cultural Celebration', description: 'School cultural and celebration photo.', image: culturalEventImage },
    { id: 'assembly', title: 'School Assembly', description: 'Students gathered for a school event on the campus ground.', image: sportsEventImage },
    { id: 'award-moment', title: 'Achievement Moment', description: 'Students and staff during an achievement celebration.', image: campusActivityImage },
    { id: 'cultural-card', title: 'Cultural Day Card', description: 'Cultural day image used in event highlights.', image: culturalDayImage },
    { id: 'academic-showcase-card', title: 'Academic Showcase Poster', description: 'Academic showcase poster for achievements and notices.', image: academicShowcaseImage },
    { id: 'campus-rally-card', title: 'Campus Rally Poster', description: 'Campus rally and activity poster.', image: campusRallyImage },
    { id: 'admission-poster', title: 'Admission Notice', description: 'Admission and school information poster.', image: admissionPosterImage },
    { id: 'achievement-poster', title: 'Achievement Poster', description: 'Achievement poster used in the homepage announcement modal.', image: achievementPosterImage },
    { id: 'result-poster', title: 'Academic Results', description: 'Academic results and student achievement poster.', image: resultPosterImage },
    { id: 'school-logo', title: 'School Logo', description: 'Holy Cross Matriculation school logo.', image: logoImage },
  ],
}
