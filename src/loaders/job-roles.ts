import rawJobRoles from '../data/job-roles.json';
import { JobRole } from '../types';

const jobRoles = rawJobRoles as JobRole[];

export function getAllJobRoles(): JobRole[] {
  return jobRoles;
}

export function getJobRoleBySlug(slug: string): JobRole | undefined {
  return jobRoles.find((role) => role.slug === slug);
}

export function getJobRolesByCategorySlug(categorySlug: string): JobRole[] {
  return jobRoles.filter((role) => role.categorySlug === categorySlug);
}
