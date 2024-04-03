import { SvgIconProps } from '@mui/material';

// Define a type for the icon components map
export interface IconMap {
  [key: string]: React.ReactElement<SvgIconProps>;
}

export interface IEducation {
  id: string;
  startMonth?: string; // Optional since some entries might not have it
  startYear: string;
  endMonth?: string; // Optional for the same reason  
  endYear: string;
  school: string;
  nickname?: string;
  degree: string;
  location: string;
  website?: string;
  skills?: string[];
}

export interface IExperience {
  id: string;
  startMonth?: string; // Optional since some entries might not have it
  startYear: string;
  endMonth?: string; // Optional for the same reason  
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
  // name: ReactNode;
  // id: string;
  // title: string; // For education, this could be the degree; for experience, the job title
  // organization: string; // For education, this could be the school; for experience, the company name
  // name?: string;
  // startMonth?: string; // Optional since some entries might not have it
  // startYear: string;
  // endMonth?: string; // Optional for the same reason
  // endYear: string;
  // details?: string; // A field for additional details or description
  // skills?: string[];
  id: string;
  organization: string; // Name of the organization or company
  title: string; // Position or degree title
  startYear: string; // Year the position or degree started
  // Include any other fields that are used in the UI that displays the data entries
  // For example, if you use start and end months, or details about the position/degree:
  startMonth?: string; // Optional: Month the position or degree started
  endMonth?: string; // Optional: Month the position or degree ended
  endYear?: string; // Optional: Year the position or degree ended
  details?: string; // Optional: Description or details about the position/degree
  skills?: string[]; // Optional: Array of skills related to the position/degree
}
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

// export interface DataEntry {
//   id: string;
//   startMonth?: string; // Optional since some entries might not have it
//   startYear: string;
//   endMonth?: string; // Optional for the same reason
//   endYear: string;
//   company: string;
//   position: string;
//   location: string;
//   skills: string[]; // Assuming skills is an array of strings
// }
