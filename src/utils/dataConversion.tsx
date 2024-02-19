// src/utils/dataConversionUtils.ts

import { IEducation, IExperience, EducationOrExperience } from '../types';

// Function to convert IEducation to ICommonFields (EducationOrExperience)
export function convertEducationToCommonFields(
  education: IEducation[],
): EducationOrExperience[] {
  return education.map((edu) => ({
    id: edu.id,
    title: edu.degree,
    organization: edu.school,
    name: edu.nickname,
    startYear: edu.startYear,
    endYear: edu.endYear,
    details: edu.location,
    skills: edu.skills,
  }));
}

// Function to convert IExperience to ICommonFields (EducationOrExperience)
export function convertExperienceToCommonFields(
  experience: IExperience[],
): EducationOrExperience[] {
  return experience.map((exp) => ({
    id: exp.id,
    title: exp.position,
    organization: exp.company,
    startYear: exp.startYear,
    endYear: exp.endYear,
    details: exp.description,
    skills: exp.skills,
  }));
}
