/**
 * Re-exports from content module to keep existing import paths working.
 * Edit content and types in @/lib/content or the section files.
 */
export {
  about_content,
  skill_list,
  experience_list,
  education_list,
  open_source_list,
  project_list,
  honor_list,
  techstack_list,
  community_list,
  presentation_list,
} from "./content";

export type {
  ExperienceType,
  OpenSourceType,
  PresentationType,
  ProjectType,
  CommunityType,
  TechStackItem,
} from "./content";
