export interface UserDetails {
  name: string;
  designation: string;
  bio: string;
  imageUrl: string;
  socials?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export const users: UserDetails[] = [
  {
    name: "Meet Makwana",
    designation: "Software Engineer - Expertise in React/Frontend Development",
    bio: "Award-winning product designer with 5+ years of experience creating innovative digital solutions. Passionate about user-centered design and accessibility.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    socials: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jaydev Jadav",
    designation: "Software Engineer - Expertise in Backend + AI Development",
    bio: "Tech enthusiast and problem solver with expertise in React and Node.js. Building scalable solutions that make a difference.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Parth Mistry",
    designation: "Software Engineer - Expertise in Backend + Devops",
    bio: "Bridging the gap between user needs and business goals. Conducted 100+ user interviews and usability testing sessions.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Krish Bhanderi",
    designation: "Software Engineer - Expertise in Backend + AI Development",
    bio: "Cloud architecture specialist focusing on AWS and Azure. Implementing CI/CD pipelines and infrastructure automation.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];
