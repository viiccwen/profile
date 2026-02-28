/** Base type for experience, honor, education sections */
export type ExperienceType = {
  title: string;
  subtitle: string;
  period: string;
  logo: string;
  description?: (string | { text: string; link?: string })[];
};

/** Open source entry with optional repository info */
export type OpenSourceType = ExperienceType & {
  repository?: {
    owner: string;
    repo: string;
  };
};

/** Presentation with title text and link */
export type PresentationType = ExperienceType & {
  text: string;
  link: string;
};

/** Project with image and link */
export type ProjectType = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

/** Community entry with link text and URL */
export type CommunityType = ExperienceType & {
  text: string;
  link: string;
};

/** Single tech stack item */
export type TechStackItem = {
  name: string;
  logo: string;
};
