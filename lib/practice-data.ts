// This file contains the practice data that you can customize for each client

// Define types for the data structure
interface OpeningHours {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface Service {
  name: string;
  description: string;
  // Add other properties if needed
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  // Add other properties if needed
}

interface HeroContent {
  heading: string;
  subheading: string;
  // Add other properties if needed
}

interface AboutContent {
  heading: string;
  description: string;
  image: string;
  mission: string;
  vision: string; // Added
}

interface PracticeData {
  practiceName: string;
  shortDescription: string;
  longDescription: string;
  address: string;
  phone: string;
  email: string;
  openingHours: OpeningHours;
  socialLinks: SocialLinks;
  services: Service[];
  teamMembers: TeamMember[];
  heroContent: HeroContent;
  aboutContent: AboutContent;
}

export const practiceData: PracticeData = {
  practiceName: "Your Practice Name",
  shortDescription: "A trusted medical practice providing quality care.",
  longDescription: `We are a dedicated team of healthcare professionals committed to providing comprehensive medical services to our community. Our mission is to ensure the well-being of our patients through compassionate care and advanced medical practices.`,
  address: "123 Health St, City, State, ZIP",
  phone: "(123) 555-7890",
  email: "contact@yourpractice.com",
  openingHours: {
    Monday: "8:00 - 18:00",
    Tuesday: "8:00 - 18:00",
    Wednesday: "8:00 - 18:00",
    Thursday: "8:00 - 18:00",
    Friday: "8:00 - 18:00",
    Saturday: "9:00 - 14:00",
    Sunday: "Closed",
  },
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  services: [
    { name: "General Checkups", description: "Routine health examinations for all ages." },
    { name: "Cardiology", description: "Specialized care for heart-related conditions." },
    { name: "Pediatrics", description: "Comprehensive healthcare for children." },
    { name: "Dermatology", description: "Treatment for skin conditions." },
    { name: "Orthopedics", description: "Care for bones and joints." },
    { name: "Neurology", description: "Diagnosis and treatment of neurological disorders." },
  ],
  teamMembers: [
    { name: "Dr. John Doe", role: "Chief Physician", image: "/doctors/doctor1.jpg" },
    { name: "Dr. Jane Smith", role: "Cardiologist", image: "/doctors/doctor2.jpg" },
  ],
  heroContent: {
    heading: "Quality Healthcare for Your Family",
    subheading: "Providing compassionate care for all.",
  },
  aboutContent: {
    heading: "About Our Practice",
    description: "We are committed to delivering exceptional healthcare services with a patient-centered approach.",
    image: "/about/team.jpg",
    mission: "To provide compassionate, high-quality healthcare to our community, ensuring the well-being of every patient.",
    vision: "To be the leading medical practice in our region, known for innovation and patient care excellence.", // Added
  },
};
