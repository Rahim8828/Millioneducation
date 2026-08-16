// SEO Configuration for Million Education

export const siteConfig = {
  baseUrl: 'https://www.millioneducation.com',
  siteName: 'Million Education',
  description:
    'Million Education connects Science stream students in Mumbai with verified 1-on-1 home tutors and live online mentors for Class 11, 12, NEET UG, and JEE Main & Advanced.',
  locale: 'en_IN',
  language: 'en',
  
  // Contact Information
  contact: {
    phone: '+91-XXXXXXXXXX', // Update with actual number
    email: 'contact@millioneducation.com',
    whatsapp: '+919004826378',
  },

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/MillionEducation',
    instagram: 'https://www.instagram.com/MillionEducation',
    twitter: 'https://twitter.com/MillionEducation',
    linkedin: 'https://www.linkedin.com/company/million-education',
    youtube: 'https://www.youtube.com/@MillionEducation', // Add actual channel
  },

  // Keywords by Category
  keywords: {
    main: [
      'home tutor Mumbai',
      'online tuition Mumbai',
      'NEET coaching Mumbai',
      'JEE coaching Mumbai',
      '11th physics tutor',
      '12th chemistry tutor',
      'private tutor Mumbai',
      'math tutor Mumbai',
    ],
    courses: {
      physics: [
        'Physics tutor Mumbai',
        'Physics coaching online',
        'NEET Physics',
        'JEE Physics',
        'Class 11 Physics tuition',
        'Class 12 Physics tuition',
      ],
      chemistry: [
        'Chemistry tutor Mumbai',
        'Chemistry coaching online',
        'NEET Chemistry',
        'JEE Chemistry',
        'Class 11 Chemistry tuition',
        'Class 12 Chemistry tuition',
      ],
      mathematics: [
        'Math tutor Mumbai',
        'Mathematics coaching online',
        'JEE Mathematics',
        'NEET Mathematics',
        'Class 11 Math tuition',
        'Class 12 Math tuition',
      ],
      biology: [
        'Biology tutor Mumbai',
        'Biology coaching online',
        'NEET Biology',
        'Class 11 Biology tuition',
        'Class 12 Biology tuition',
      ],
    },
  },

  // Image Dimensions for Open Graph
  imageOptimization: {
    og: {
      width: 1200,
      height: 630,
    },
    twitter: {
      width: 1200,
      height: 675,
    },
  },

  // Sitemap Configuration
  sitemap: {
    baseUrl: 'https://www.millioneducation.com',
    pages: [
      { url: '/', priority: 1.0, changeFrequency: 'weekly' },
      { url: '/courses', priority: 0.9, changeFrequency: 'weekly' },
      { url: '/courses/physics', priority: 0.8, changeFrequency: 'monthly' },
      { url: '/courses/chemistry', priority: 0.8, changeFrequency: 'monthly' },
      { url: '/courses/mathematics', priority: 0.8, changeFrequency: 'monthly' },
      { url: '/courses/biology', priority: 0.8, changeFrequency: 'monthly' },
      { url: '/courses/pcm', priority: 0.8, changeFrequency: 'monthly' },
      { url: '/courses/pcb', priority: 0.8, changeFrequency: 'monthly' },
      { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
      { url: '/contact', priority: 0.7, changeFrequency: 'monthly' },
      { url: '/for-tutors', priority: 0.7, changeFrequency: 'monthly' },
      { url: '/join-faculty', priority: 0.7, changeFrequency: 'monthly' },
      { url: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
      { url: '/terms-of-service', priority: 0.5, changeFrequency: 'yearly' },
      { url: '/refund-policy', priority: 0.5, changeFrequency: 'yearly' },
    ],
  },

  // Analytics Configuration (Google Analytics, etc.)
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX', // Update with actual ID
    googleSearchConsoleId: 'your-domain-verification-id', // Update if needed
  },

  // Robots.txt Configuration
  robots: {
    userAgent: '*',
    allow: '/',
    disallow: ['/private/', '/admin/', '/api/'],
    crawlDelay: 1,
    sitemap: 'https://www.millioneducation.com/sitemap.xml',
  },

  // Structured Data Configuration
  structuredData: {
    organization: {
      name: 'Million Education',
      logo: 'https://www.millioneducation.com/logo.png',
      url: 'https://www.millioneducation.com',
      sameAs: [
        'https://www.facebook.com/MillionEducation',
        'https://www.instagram.com/MillionEducation',
        'https://twitter.com/MillionEducation',
      ],
    },
    location: {
      streetAddress: 'Mumbai', // Update with actual address
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400000',
      addressCountry: 'IN',
    },
  },

  // SEO Best Practices
  bestPractices: {
    // Minimum title length: 30 characters
    // Maximum title length: 60 characters
    // Minimum description length: 120 characters
    // Maximum description length: 160 characters
    // Aim for 1-3 primary keywords per page
    // Use secondary keywords naturally
    // Maintain keyword density 1-2%
    // Use descriptive meta descriptions
    // Implement proper heading hierarchy (H1 → H2 → H3)
    // Include internal links with anchor text
    // Optimize images with alt text
    // Create mobile-friendly designs
    // Ensure fast page load times
  },

  // Header Tags Configuration
  headers: {
    cacheControl: 'public, max-age=31536000, immutable',
    securityHeaders: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    },
  },
};

// Helper function to generate meta tags
export function generateMetaTags(
  title: string,
  description: string,
  keywords?: string[],
  ogImage?: string
) {
  return {
    title: `${title} | ${siteConfig.siteName}`,
    description,
    keywords: keywords?.join(', ') || '',
    openGraph: {
      type: 'website',
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
      url: siteConfig.baseUrl,
      siteName: siteConfig.siteName,
    },
  };
}

// Helper function to generate canonical URL
export function generateCanonicalUrl(path: string): string {
  return `${siteConfig.baseUrl}${path}`;
}
