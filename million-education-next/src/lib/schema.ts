// JSON-LD Schema Markup Utilities for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.millioneducation.com',
  name: 'Million Education',
  url: 'https://www.millioneducation.com',
  logo: 'https://www.millioneducation.com/logo.png',
  description:
    'Million Education provides 1-on-1 home tutoring and online coaching for Class 11, 12, NEET, and JEE exam preparation in Mumbai.',
  image: 'https://www.millioneducation.com/logo.png',
  telephone: '+91-XXXXXXXXXX', // Add actual number
  email: 'contact@millioneducation.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mumbai', // Add actual address
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400000', // Add actual postal code
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/MillionEducation',
    'https://www.instagram.com/MillionEducation',
    'https://twitter.com/MillionEducation',
    'https://www.linkedin.com/company/million-education',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Mumbai',
  },
  priceRange: '₹₹',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-XXXXXXXXXX',
    email: 'contact@millioneducation.com',
  },
};

export const courseSchema = (
  courseTitle: string,
  courseDescription: string,
  courseImage: string,
  courseUrl: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: courseTitle,
  description: courseDescription,
  image: courseImage,
  url: courseUrl,
  provider: {
    '@type': 'Organization',
    name: 'Million Education',
    url: 'https://www.millioneducation.com',
    logo: 'https://www.millioneducation.com/logo.png',
  },
  educationLevel: ['Class 11', 'Class 12', 'NEET', 'JEE'],
  inLanguage: 'en-IN',
  isAccessibleForFree: false,
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: ['Online', 'Onsite'],
    instructorType: 'Qualified Teacher',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '500', // Update with actual count
    bestRating: '5',
    worstRating: '1',
  },
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const breadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Million Education',
  url: 'https://www.millioneducation.com',
  logo: 'https://www.millioneducation.com/logo.png',
  description:
    'Million Education is a premier online and home tutoring platform providing expert coaching for NEET, JEE, and academic excellence.',
  image: 'https://www.millioneducation.com/logo.png',
  founded: '2020', // Update with actual founding year
  founders: [
    {
      '@type': 'Person',
      name: 'Founder Name', // Add actual name
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mumbai',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400000',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-XXXXXXXXXX',
    email: 'contact@millioneducation.com',
  },
  sameAs: [
    'https://www.facebook.com/MillionEducation',
    'https://www.instagram.com/MillionEducation',
    'https://twitter.com/MillionEducation',
  ],
};

export const educationalOccupationalProgramSchema = (programName: string, programDescription: string) => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOccupationalProgram',
  name: programName,
  description: programDescription,
  educationLevel: ['Secondary Education', 'Higher Secondary Education'],
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Million Education',
    url: 'https://www.millioneducation.com',
  },
  programType: 'Tutoring Program',
  occupationalCategory: 'Science Education',
});

export const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue: '4.8',
  ratingCount: '500', // Update with actual count
  bestRating: '5',
  worstRating: '1',
};
