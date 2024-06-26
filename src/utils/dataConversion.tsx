// src/utils/dataConversionUtils.ts

import {
  IEducation,
  IExperience,
  ICommonFields,
} from '../types';

// Function to convert IEducation to ICommonFields (EducationOrExperience)
export function convertEducationToCommonFields(
  education: IEducation[],
): ICommonFields[] {
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
): ICommonFields[] {
  return experience.map((exp) => ({
    id: exp.id,
    title: exp.position,
    organization: exp.company,
    startMonth: exp.startMonth,
    startYear: exp.startYear,
    endMonth: exp.endMonth,
    endYear: exp.endYear,
    details: exp.description,
    skills: exp.skills,
  }));
}
