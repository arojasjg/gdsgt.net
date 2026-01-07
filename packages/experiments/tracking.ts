/**
 * Experiment Tracking
 * 
 * Track experiment exposure and conversions
 */

import { track } from '@gds/analytics';

/**
 * Track when a user is exposed to an experiment
 */
export function trackExperimentExposure(
  experimentId: string,
  variantId: string,
  metadata?: Record<string, any>
): void {
  track('experiment_exposure', {
    experiment_id: experimentId,
    variant_id: variantId,
    ...metadata
  });
}

/**
 * Track when a user converts in an experiment
 */
export function trackExperimentConversion(
  experimentId: string,
  variantId: string,
  metric: string,
  metadata?: Record<string, any>
): void {
  track('experiment_conversion', {
    experiment_id: experimentId,
    variant_id: variantId,
    metric: metric,
    ...metadata
  });
}

/**
 * Track experiment-specific event
 */
export function trackExperimentEvent(
  experimentId: string,
  variantId: string,
  eventName: string,
  metadata?: Record<string, any>
): void {
  track(eventName, {
    experiment_id: experimentId,
    variant_id: variantId,
    ...metadata
  });
}
