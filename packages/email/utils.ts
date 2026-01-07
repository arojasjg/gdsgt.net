/**
 * Email Utilities
 */

import { EmailVariables } from './types';

/**
 * Replace template variables in content
 */
export function replaceVariables(
  content: string,
  variables: EmailVariables
): string {
  let result = content;
  
  for (const [key, value] of Object.entries(variables)) {
    if (value !== undefined) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      result = result.replace(regex, value);
    }
  }
  
  return result;
}

/**
 * Extract variables from template content
 */
export function extractVariables(content: string): string[] {
  const regex = /{{(\w+)}}/g;
  const matches = content.matchAll(regex);
  const variables = new Set<string>();
  
  for (const match of matches) {
    variables.add(match[1]);
  }
  
  return Array.from(variables);
}

/**
 * Validate that all required variables are provided
 */
export function validateVariables(
  requiredVariables: string[],
  providedVariables: EmailVariables
): { valid: boolean; missing: string[] } {
  const missing: string[] = [];
  
  for (const variable of requiredVariables) {
    if (providedVariables[variable] === undefined) {
      missing.push(variable);
    }
  }
  
  return {
    valid: missing.length === 0,
    missing
  };
}
