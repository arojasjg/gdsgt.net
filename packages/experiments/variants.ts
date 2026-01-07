/**
 * Variant Assignment Logic
 * 
 * Consistent user bucketing for A/B tests
 */

import { Experiment } from './types';

/**
 * Simple hash function for consistent bucketing
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Get variant for a user in an experiment
 * Uses consistent hashing to ensure same user always gets same variant
 */
export function getExperimentVariant(
  experimentId: string,
  userId: string,
  experiment: Experiment
): string {
  if (experiment.status !== 'running') {
    return 'control';
  }
  
  // Hash user ID + experiment ID for consistent bucketing
  const hash = simpleHash(userId + experimentId);
  const bucket = hash % 100;
  
  // Assign to variant based on weight
  let cumulative = 0;
  for (const variant of experiment.variants) {
    cumulative += variant.weight;
    if (bucket < cumulative) {
      return variant.id;
    }
  }
  
  return 'control';
}

/**
 * Get user ID from cookie or generate new one
 */
export function getUserId(): string {
  if (typeof window === 'undefined') {
    return 'server';
  }
  
  const cookieName = 'gds_user_id';
  const cookies = document.cookie.split(';');
  
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === cookieName) {
      return value;
    }
  }
  
  // Generate new user ID
  const newUserId = Math.random().toString(36).substring(2, 15);
  
  // Set cookie (1 year expiry)
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);
  document.cookie = `${cookieName}=${newUserId}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
  
  return newUserId;
}

/**
 * Store experiment assignment in cookie
 */
export function storeExperimentAssignment(
  experimentId: string,
  variantId: string,
  durationDays: number = 30
): void {
  if (typeof window === 'undefined') return;
  
  const cookieName = `gds_exp_${experimentId}`;
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + durationDays);
  
  document.cookie = `${cookieName}=${variantId}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
}

/**
 * Get stored experiment assignment from cookie
 */
export function getStoredExperimentAssignment(experimentId: string): string | null {
  if (typeof window === 'undefined') return null;
  
  const cookieName = `gds_exp_${experimentId}`;
  const cookies = document.cookie.split(';');
  
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === cookieName) {
      return value;
    }
  }
  
  return null;
}
