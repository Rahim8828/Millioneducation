import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | My Tutor',
    default: 'My Tutor — Find the Right Home Tutor Made Easy',
  },
  description:
    'My Tutor connects students with the best home tutors near you. Find verified tutors for every subject, class and exam board across India.',
  keywords: [
    'home tutor',
    'home tuition',
    'tutor near me',
    'online tutor',
    'private tutor India',
    'CBSE tutor',
    'maths tutor',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
