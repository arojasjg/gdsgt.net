/**
 * Email Templates Index
 */

import { NurtureSequence } from '../types';
import { defaultNurtureSequence } from './nurture-default';
import { highIntentNurtureSequence } from './nurture-high-intent';

export const nurtureSequences: Record<string, NurtureSequence> = {
  'nurture-default': defaultNurtureSequence,
  'nurture-high-intent': highIntentNurtureSequence
};

export function getNurtureSequence(id: string): NurtureSequence | undefined {
  return nurtureSequences[id];
}

export function getAllNurtureSequences(): NurtureSequence[] {
  return Object.values(nurtureSequences);
}
