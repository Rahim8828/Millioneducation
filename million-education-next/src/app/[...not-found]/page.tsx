import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <div style={{
          fontSize: '8rem',
          fontWeight: 800,
          color: 'var(--primary)',
          lineHeight: 1,
          marginBottom: '16px',
          textShadow: '0 4px 20px rgba(249,115,22,0.3)'
        }}>
          404
        </div>
        
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          color: 'var(--white)',
          marginBottom: '16px'
        }}>
          Page Not Found
        </h1>
        
        <p style={{
          color: 'var(--gray-400)',
          fontSize: '1.1rem',
          marginBottom: '32px',
          lineHeight: 1.6
        }}>
          Sorry, the page you're looking for doesn't exist or has been moved. 
          Let's get you back on track with your education journey.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'var(--primary)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              transition: 'var(--transition)'
            }}
          >
            <Home size={18} />
            Back to Home
          </Link>
          
          <Link 
            href="/courses"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'transparent',
              color: 'var(--white)',
              border: '2px solid var(--gray-600)',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              transition: 'var(--transition)'
            }}
          >
            <Search size={18} />
            Browse Courses
          </Link>
        </div>

        <div style={{
          marginTop: '48px',
          padding: '24px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{
            color: 'var(--gray-400)',
            fontSize: '0.9rem',
            marginBottom: '16px'
          }}>
            Looking for something specific?
          </p>
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[
              { label: '11th & 12th Science', href: '/courses' },
              { label: 'NEET Preparation', href: '/courses/biology' },
              { label: 'JEE Preparation', href: '/courses/physics' },
              { label: 'Join as Faculty', href: '/join-faculty' },
            ].map((link, i) => (
              <Link 
                key={i}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--primary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  padding: '8px 16px',
                  background: 'var(--primary-light)',
                  borderRadius: '100px',
                  transition: 'var(--transition)'
                }}
              >
                <ArrowLeft size={14} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}