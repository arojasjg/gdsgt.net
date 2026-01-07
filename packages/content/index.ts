// Spanish content
export { modules as modulesEs } from './es/erp/modules';
export { integrations as integrationsEs } from './es/erp/integrations';
export { securityTopics as securityTopicsEs } from './es/erp/security';
export { industries as industriesEs, getIndustryBySlug, getAllIndustries, getIndustriesByICP } from './es/erp/industries';
export { capabilities as capabilitiesEs, getCapabilityBySlug, getAllCapabilities, getCapabilitiesByIndustry, getCapabilitiesByModule } from './es/erp/capabilities';
export { comparisons as comparisonsEs, getComparisonBySlug, getAllComparisons } from './es/comparisons';
export { caseStudies as caseStudiesEs, getCaseStudyBySlug, getAllCaseStudies, getCaseStudiesByIndustry } from './es/case-studies';
export { blogPosts as blogPostsEs, getBlogPostBySlug, getAllBlogPosts, getBlogPostsByCategory, getBlogPostsByTag, getRelatedBlogPosts } from './es/blog';
export { glossaryTerms as glossaryTermsEs } from './es/resources/glossary';
export { resources as resourcesEs, getResourceBySlug, getAllResources, getResourcesByCategory, getResourcesByType } from './es/resources/guides';
export { 
  pricingTiers as pricingTiersEs, 
  getPricingTier, 
  getAllPricingTiers, 
  getPricingTiersForICP,
  implementationPackages,
  services,
  multicompanyFees,
  valueProps
} from './es/pricing';

// Client logos / social proof
export { clientLogosEs } from './es/clients';
export { clientLogosEn } from './en/clients';

// AI content
export { aiFeatures as aiFeatures_es, aiUseCases as aiUseCases_es, aiStats as aiStats_es, aiCompetitors as aiCompetitors_es, aiFAQ as aiFAQ_es } from './es/ia';
export { aiFeatures as aiFeatures_en, aiUseCases as aiUseCases_en, aiStats as aiStats_en, aiCompetitors as aiCompetitors_en, aiFAQ as aiFAQ_en } from './en/ia';

// English content (import when created)
// export { modules as modulesEn } from './en/erp/modules';
// export { integrations as integrationsEn } from './en/erp/integrations';
// export { securityTopics as securityTopicsEn } from './en/erp/security';
// export { glossaryTerms as glossaryTermsEn } from './en/resources/glossary';

export * from './types';

// Helper to get content by language
export function getContent<T>(esContent: T, enContent: T, lang: 'es' | 'en'): T {
  return lang === 'es' ? esContent : enContent;
}
