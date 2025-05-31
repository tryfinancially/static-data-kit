import rawIndustries from '../data/industries.json';
import { Industry } from '../types';

const industries = rawIndustries as Industry[];

export function getAllIndustries(): Industry[] {
  return industries;
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
