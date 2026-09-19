export interface SiteLink { label: string; href: string; }
export interface FeatureService extends SiteLink { description: string; image: string; }
export interface ServiceItem extends SiteLink { image: string; slug: string; }
export interface StatItem { value: string; label: string; }
