import { SvgIconProps } from '@mui/material';

// Define a type for the icon components map
export interface IconMap {
  [key: string]: React.ReactElement<SvgIconProps>;
}

export interface IEducation {
  id: string;
  startYear: string;
  endYear: string;
  school: string;
  nickname?: string;
  degree: string;
  location: string;
  website?: string;
  skills?: string[];
}

export interface IExperience {
  id:string;
  startYear: string;
  endYear: string;
  company: string;
  nickname?: string;
  position: string;
  location: string;
  description?: string;
  website?: string;
  skills?: string[];
}

export interface ICommonFields {
  name: ReactNode;
  id: string;
  title: string; // For education, this could be the degree; for experience, the job title
  organization: string; // For education, this could be the school; for experience, the company name
  name?: string;
  startYear: string;
  endYear: string;
  details?: string; // A field for additional details or description
  skills?: string[];
}

export type EducationOrExperience = ICommonFields;

export interface CardProps {
  data: EducationOrExperience[];
}

export interface Skill {
  name: string;
  icon: string; // This will match keys in your icon map
}

export interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLayer: any[];
}
