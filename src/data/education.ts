export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    id: 'neu-ms',
    degree: 'Master of Science in Software Engineering Systems',
    school: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Dec 2025'
  },
  {
    id: 'gitam-bs',
    degree: 'Bachelor of Science and Technology in Computer Science Engineering',
    school: 'GITAM University',
    location: 'Visakhapatnam, AP',
    period: 'May 2023'
  }
];
