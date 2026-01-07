export interface RobotsConfig {
  domain: string;
  disallow?: string[];
  allow?: string[];
}

export function generateRobotsTxt(config: RobotsConfig): string {
  const lines = ['User-agent: *'];

  if (config.disallow && config.disallow.length > 0) {
    config.disallow.forEach((path) => {
      lines.push(`Disallow: ${path}`);
    });
  } else {
    lines.push('Disallow:');
  }

  if (config.allow && config.allow.length > 0) {
    config.allow.forEach((path) => {
      lines.push(`Allow: ${path}`);
    });
  }

  lines.push('');
  lines.push(`Sitemap: https://${config.domain}/sitemap.xml`);

  return lines.join('\n');
}
