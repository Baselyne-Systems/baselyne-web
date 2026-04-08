/**
 * Site mode configuration.
 *
 * Set to true to orient the entire site around Physical AI infrastructure.
 * Set to false to show the generic AI infrastructure consulting site.
 *
 * When true:
 *   - Homepage shows Physical AI content
 *   - Nav: Home | Blog | About | Contact
 *   - Blog defaults to Physical AI tab
 *   - Services pages still accessible via direct URL (SEO) but not in nav
 *
 * When false:
 *   - Homepage shows generic ML/AI infrastructure content
 *   - Nav: Home | Physical AI | Services | Blog | About | Contact
 *   - Blog defaults to All tab
 */
export const PHYSICAL_AI_MODE = true;
