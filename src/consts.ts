import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Irshath",
  EMAIL: "irshath700@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Irshath - Frontend Lead & Full Stack Developer passionate about building high-performance web experiences",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "A collection of articles on topics I am passionate about, including frontend development, web performance, and web design.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Twitter X",
    HREF: "https://x.com/irshathv2",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/irshathcodes",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/irshathcodes",
  },
];
