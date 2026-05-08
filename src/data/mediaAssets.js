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

export const mediaAssets = {
  campus: {
    mainCover: mainCoverImage,
    activity: campusActivityImage,
  },
  hero: {
    campus: mainCoverImage,
    activity: campusActivityImage,
    cultural: culturalEventImage,
  },
  events: {
    culturalDay: culturalDayImage,
    academicShowcase: academicShowcaseImage,
    campusRally: campusRallyImage,
  },
  posters: {
    admission: admissionPosterImage,
    achievement: achievementPosterImage,
    results: resultPosterImage,
  },
  programs: {
    scienceStem: stemActivityImage,
    sportsDevelopment: sportsEventImage,
    artsCulture: culturalEventImage,
  },
}
