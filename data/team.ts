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
    name: "Jaydev Jadav",
    designation: "Software Engineer - Expertise in Backend + AI Development",
    bio: "Tech enthusiast and problem solver with expertise in React and Node.js. Building scalable solutions that make a difference.",
    imageUrl: "/photos/jaydev.jpeg",
    socials: {
      github: "https://github.com/thejaydev",
      linkedin: "https://www.linkedin.com/in/jaydev-b-jadav-76a59921a/",
    },
  },
  {
    name: "Meet Makwana",
    designation: "Software Engineer - Expertise in React/Frontend Development",
    bio: "Award-winning product designer with 5+ years of experience creating innovative digital solutions. Passionate about user-centered design and accessibility.",
    imageUrl: "/photos/meet.png",
    socials: {
      // twitter: "https://twitter.com/meetmakwna",
      github: "https://github.com/meetmakwana7396",
      linkedin: "https://www.linkedin.com/in/meetmakwana7396",
    },
  },

  {
    name: "Parth Mistry",
    designation: "Software Engineer - Expertise in Backend + Devops",
    bio: "Bridging the gap between user needs and business goals. Conducted 100+ user interviews and usability testing sessions.",
    imageUrl: "/photos/parth.jpeg",
    socials: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/parth-mistri-a265bb1b4/",
      github: "https://github.com/meetmakwana7396",

    },
  },
  {
    name: "Krish Bhanderi",
    designation: "Software Engineer - Expertise in Backend + AI Development",
    bio: "Cloud architecture specialist focusing on AWS and Azure. Implementing CI/CD pipelines and infrastructure automation.",
    imageUrl: "/photos/krish.jpeg",
    socials: {
      github: "https://github.com/krishbhanderiii",
      linkedin: "https://www.linkedin.com/in/krishbhanderi/",
      // twitter: "https://twitter.com",
    },
  },
];
