export interface QualityCheckConfig {
  minWordCount?: number;
  requireTitle?: boolean;
  requireDescription?: boolean;
  requireH1?: boolean;
  customChecks?: Array<{
    name: string;
    check: () => boolean;
    message: string;
  }>;
}

export interface QualityCheckResult {
  passed: boolean;
  shouldIndex: boolean;
  issues: string[];
}

export function checkContentQuality(
  content: {
    title?: string;
    description?: string;
    wordCount?: number;
    hasH1?: boolean;
  },
  config: QualityCheckConfig = {}
): QualityCheckResult {
  const issues: string[] = [];
  const minWordCount = config.minWordCount || 300;

  if (config.requireTitle !== false && !content.title) {
    issues.push('Missing title');
  }

  if (config.requireDescription !== false && !content.description) {
    issues.push('Missing description');
  }

  if (config.requireH1 !== false && !content.hasH1) {
    issues.push('Missing H1 heading');
  }

  if (content.wordCount !== undefined && content.wordCount < minWordCount) {
    issues.push(`Content too short (${content.wordCount} words, minimum ${minWordCount})`);
  }

  if (config.customChecks) {
    config.customChecks.forEach((customCheck) => {
      if (!customCheck.check()) {
        issues.push(customCheck.message);
      }
    });
  }

  const passed = issues.length === 0;
  const shouldIndex = passed;

  return {
    passed,
    shouldIndex,
    issues,
  };
}

export function shouldIndexPage(checks: QualityCheckResult): boolean {
  return checks.shouldIndex;
}
