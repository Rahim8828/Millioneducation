---
inclusion: manual
---

# 🚀 SEO Guidelines - Million Education

## Overview
یہ document تمام pages کو SEO-friendly بنانے کے لیے guidelines فراہم کرتا ہے۔

---

## 📋 SEO Checklist - ہر Page کے لیے

### 1. **Metadata Setup**
```tsx
export const metadata: Metadata = {
  title: 'Page Title | Million Education', // 50-60 chars
  description: 'Descriptive summary...', // 120-160 chars
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  
  // Open Graph for Social Sharing
  openGraph: {
    type: 'website',
    title: 'Page Title',
    description: 'Description',
    url: 'https://www.millioneducation.com/path',
    siteName: 'Million Education',
    images: [{
      url: 'https://www.millioneducation.com/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Description',
    images: ['https://www.millioneducation.com/og-image.png'],
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://www.millioneducation.com/path',
  },
};
```

### 2. **Schema Markup (JSON-LD)**
```tsx
// Import from @/lib/schema
import { courseSchema, breadcrumbSchema, organizationSchema } from '@/lib/schema';

export default function Page() {
  const schemaData = courseSchema(
    'Course Title',
    'Course Description',
    'https://www.millioneducation.com/image.png',
    'https://www.millioneducation.com/course-url'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        suppressHydrationWarning
      />
      {/* Page Content */}
    </>
  );
}
```

### 3. **Heading Hierarchy**
```tsx
// ✅ Correct
<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>

// ❌ Wrong
<h1>Title 1</h1>
<h3>Skip h2</h3>
<h2>Skip back to h2</h2>
```

### 4. **Image Optimization**
```tsx
import Image from 'next/image';

// ✅ Use Next.js Image component
<Image
  src="/image.png"
  alt="Descriptive alt text"
  width={1200}
  height={630}
  priority // for above-the-fold images
/>

// ❌ Avoid
<img src="/image.png" />
```

### 5. **Internal Linking**
```tsx
// ✅ Good - Descriptive anchor text
<Link href="/courses/physics">
  Physics tutor course for NEET & JEE
</Link>

// ❌ Bad - Generic text
<Link href="/courses/physics">
  Click here
</Link>
```

### 6. **URL Structure**
```
✅ Good (Descriptive, Lowercase, Hyphenated)
- /courses/physics
- /courses/physics-syllabus
- /about-us
- /contact-tutor

❌ Bad
- /course?id=1
- /COURSES/PHYSICS
- /courses_physics
- /p
```

### 7. **Meta Description Best Practices**
- Length: 120-160 characters
- Include primary keyword naturally
- Call-to-action (CTA) included
- Unique for each page
- Write for humans, not bots

Example:
```
"Master Physics with expert IITian faculty. 1-on-1 tuition for Class 11, 12, NEET & JEE. 
NCERT coverage, PYQs, doubt solving & weekly tests in Mumbai."
```

### 8. **Keywords Strategy**

**Primary Keywords** (Main topic)
- Use in: Title, H1, First 100 words, Meta description
- 1-2 keywords per page

**Secondary Keywords** (Related topics)
- Use naturally throughout content
- Semantic variations and LSI keywords

**Long-tail Keywords** (Specific phrases)
- Natural language questions
- Location-based terms
- Example: "best physics tutor in Mumbai for NEET"

---

## 🎯 Course Pages Special Requirements

### Physics/Chemistry/Mathematics/Biology Pages
1. ✅ CourseSchema with provider information
2. ✅ AggregateRating schema with reviews
3. ✅ BreadcrumbList schema
4. ✅ EducationalOccupationalProgram schema
5. ✅ Rich snippets for course details
6. ✅ Structured data for:
   - Course name & description
   - Provider (Million Education)
   - Course mode (Online/Offline)
   - Instructor type
   - Rating & review count

---

## 📊 Page-Specific Keywords

### Home Page
Primary: "online tuition Mumbai", "home tutor Mumbai", "NEET coaching"
Secondary: "JEE coaching", "11th 12th tuition", "physics chemistry math"

### Physics Page
Primary: "physics tutor Mumbai", "NEET physics"
Secondary: "JEE physics", "class 11 12 physics", "physics tuition online"

### Chemistry Page
Primary: "chemistry tutor Mumbai", "NEET chemistry"
Secondary: "JEE chemistry", "class 11 12 chemistry"

### Mathematics Page
Primary: "math tutor Mumbai", "mathematics coaching"
Secondary: "JEE maths", "NEET math", "algebra geometry"

### About Page
Primary: "about million education", "our team"
Secondary: "why choose us", "experienced tutors"

### Contact Page
Primary: "contact million education", "get in touch"
Secondary: "demo class", "free trial"

---

## 🔧 Technical SEO Checklist

- [ ] Sitemap.xml updated and submitted
- [ ] Robots.txt properly configured
- [ ] 404 page has proper metadata
- [ ] Mobile responsiveness tested
- [ ] Page speed optimized (Lighthouse > 90)
- [ ] SSL certificate installed (HTTPS)
- [ ] Canonical tags on all pages
- [ ] No broken links (internal & external)
- [ ] Proper redirects (301) for moved pages
- [ ] Search Console connected
- [ ] Analytics tracking enabled
- [ ] Structured data validated

---

## ⚡ Performance Optimization

### Image Optimization
- Use WebP format
- Compress before uploading
- Use appropriate dimensions
- Add alt text to all images
- Lazy load below-the-fold images

### Code Optimization
- Minify CSS/JS
- Remove unused dependencies
- Enable gzip compression
- Use CDN for static assets
- Implement caching strategies

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🔍 Testing & Validation

### Tools to Use
1. **Google Search Console** - Monitor indexing & queries
2. **Google PageSpeed Insights** - Performance metrics
3. **Schema.org Validator** - Check structured data
4. **Lighthouse** - Overall SEO score
5. **Screaming Frog** - Technical SEO audit
6. **MozBar** - Keyword metrics

---

## 📱 Mobile SEO

- Responsive design implemented
- Touch targets 48px minimum
- Font size 16px minimum
- Proper viewport meta tag
- No intrusive pop-ups
- Fast mobile loading

---

## 🚀 Monthly SEO Tasks

1. Monitor Google Search Console for new queries
2. Check Core Web Vitals scores
3. Update outdated content
4. Fix broken links
5. Add new content/blog posts
6. Monitor ranking positions
7. Check competitor keywords
8. Optimize underperforming pages

---

## 📝 Content Writing Guidelines

### Readability
- Short paragraphs (2-3 sentences)
- Subheadings every 300 words
- Bullet points for lists
- Active voice preferred
- Simple language (Flesch Reading Ease > 60)

### SEO Writing
- Primary keyword in first 100 words
- Natural keyword distribution (1-2%)
- Unique content on each page
- Answer user intent completely
- Include related keywords naturally
- Use transition words

---

## 🎯 Implementation Checklist

When creating a new page:
1. [ ] Add Metadata export
2. [ ] Add OpenGraph tags
3. [ ] Add Twitter card
4. [ ] Add Schema markup
5. [ ] Set canonical URL
6. [ ] Add to sitemap.ts
7. [ ] Create breadcrumb schema
8. [ ] Optimize all images with alt text
9. [ ] Add internal links
10. [ ] Test mobile responsiveness
11. [ ] Validate with Schema validator
12. [ ] Check Lighthouse score
13. [ ] Submit to Search Console

---

## 📞 Contact Information

For SEO-related questions or updates, maintain these pages:
- `/` - Homepage
- `/courses` - All courses listing
- `/courses/[subject]` - Individual course pages
- `/contact` - Contact information
- `/about` - About company
- `/privacy-policy`, `/terms-of-service`, `/refund-policy`

---

**Last Updated:** August 16, 2026
**Status:** ✅ Active
