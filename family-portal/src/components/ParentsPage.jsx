import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const sections = [
  {
    id: 'attendance',
    eyebrow: 'STEP 1',
    title: 'Claiming Attendance',
    accent: '#0891b2',
    accentBg: '#e0f2fe',
    icon: '📋',
    intro: 'Attendance must be claimed monthly through the Parent Portal. Missing a month can affect your family\'s funding.',
    links: [
      { label: 'Open Parent Portal', href: 'https://parentportal.pacificcoastacademy.org', badge: 'LOGIN REQUIRED' },
    ],
    tips: [
      'Claim by the last day of each month',
      'Log at least 1 day per week to stay compliant',
      'Contact Mr. Robson if you ever miss a window',
    ],
  },
  {
    id: 'funds',
    eyebrow: 'STEP 2',
    title: 'Education Funds (PSA / ISP)',
    accent: '#d97706',
    accentBg: '#fef3c7',
    icon: '💰',
    intro: 'Your family receives an annual education fund allocation. Funds can be used for curriculum, classes, supplies, and more — as long as they\'re pre-approved.',
    links: [
      { label: 'Open Parent Portal — Funds', href: 'https://parentportal.pacificcoastacademy.org', badge: 'LOGIN REQUIRED' },
    ],
    tips: [
      'Funds must be spent by the end of the school year',
      'Always get pre-approval before purchasing',
      'Keep receipts for all purchases',
    ],
  },
  {
    id: 'curriculum',
    eyebrow: 'CURRICULUM',
    title: 'Homeschool Hub & Ordering',
    accent: '#16a34a',
    accentBg: '#dcfce7',
    icon: '📖',
    intro: 'Your IGP (Individual Graduation Plan) lives in the Homeschool Hub. Use it to plan your student\'s year and order curriculum and online subscriptions.',
    links: [
      { label: 'Homeschool Hub', href: 'https://homeschoolhub.pacificcoastacademy.org', badge: 'LOGIN REQUIRED' },
    ],
    tips: [
      'Review and update your IGP each semester',
      'Order curriculum early — processing takes 1–2 weeks',
      'Online subscriptions (like Khan Academy) count toward your ISP',
    ],
  },
  {
    id: 'parentsquare',
    eyebrow: 'COMMUNICATION',
    title: 'ParentSquare',
    accent: '#7c3aed',
    accentBg: '#ede9fe',
    icon: '💬',
    intro: 'ParentSquare is the main communication platform for PCA. School announcements, LP meeting reminders, and messages from Mr. Robson all come through here.',
    links: [
      { label: 'Open ParentSquare', href: 'https://parentsquare.com', badge: 'EXTERNAL' },
      { label: 'Download the App', href: 'https://parentsquare.com/app', badge: 'IOS & ANDROID' },
    ],
    tips: [
      'Turn on notifications so you don\'t miss LP meeting requests',
      'You can message Mr. Robson directly through ParentSquare',
      'Check the school feed weekly for updates',
    ],
  },
]

export default function ParentsPage() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', backgroundColor: '#fdf0e0' }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(253,240,224,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 28px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img src="/pca-logo.png" alt="PCA" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a3a5c', margin: 0, lineHeight: 1.2 }}>Robson's Roster</p>
              <p style={{ fontSize: '10px', color: '#92400e', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Pacific Coast Academy</p>
            </div>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <Link to="/" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 500, color: '#1a2e44', textDecoration: 'none' }}>Home</Link>
            <Link to="/parents" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 700, color: '#0891b2', textDecoration: 'none' }}>For Parents</Link>
            <Link to="/students" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 500, color: '#1a2e44', textDecoration: 'none' }}>For Students</Link>
            <a href="https://pcatesting.lovable.app/" target="_blank" rel="noreferrer" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 500, color: '#1a2e44', textDecoration: 'none' }}>Assessments ↗</a>
          </div>
        </div>
      </nav>

      {/* ── PAGE HEADER ── */}
      <div style={{
        background: '#fdf0e0',
        backgroundImage: [
          'linear-gradient(45deg, rgba(0,0,0,0.028) 1px, transparent 1px)',
          'linear-gradient(-45deg, rgba(0,0,0,0.028) 1px, transparent 1px)',
          'radial-gradient(ellipse at 10% 60%, rgba(8,145,178,0.22) 0%, transparent 55%)',
          'radial-gradient(ellipse at 90% 20%, rgba(251,191,36,0.28) 0%, transparent 50%)',
        ].join(', '),
        backgroundSize: '10px 10px, 10px 10px, 100% 100%, 100% 100%',
        padding: '56px 28px 48px',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '9999px', padding: '4px 14px', marginBottom: '20px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#0891b2', display: 'inline-block' }} />
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#0e7490', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Parent Resources</span>
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '44px', fontWeight: 700, color: '#1a2e44', lineHeight: 1.1, margin: '0 0 16px' }}>
            For Parents
          </h1>
          <div style={{ width: '120px', height: '3px', backgroundImage: 'linear-gradient(90deg, #0891b2, #f59e0b)', borderRadius: '9999px', marginBottom: '20px' }} />
          <p style={{ fontSize: '16px', color: '#4b5563', maxWidth: '560px', lineHeight: 1.75, margin: 0 }}>
            Everything you need to stay compliant, access your education funds, and keep communication open with Pacific Coast Academy.
          </p>
        </div>
      </div>

      {/* ── CONTENT SECTIONS ── */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 28px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {sections.map((section) => (
            <div
              key={section.id}
              style={{ background: 'white', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
            >
              {/* Card header bar */}
              <div style={{ height: '4px', backgroundImage: 'linear-gradient(90deg, ' + section.accent + ', ' + section.accent + '88)' }} />
              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

                  {/* Icon */}
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: section.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>
                    {section.icon}
                  </div>

                  {/* Body */}
                  <div style={{ flex: 1, minWidth: '260px' }}>
                    <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: section.accent, textTransform: 'uppercase', margin: '0 0 4px' }}>{section.eyebrow}</p>
                    <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#1a2e44', margin: '0 0 12px' }}>{section.title}</h2>
                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, margin: '0 0 20px' }}>{section.intro}</p>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                      {section.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: section.accentBg, color: section.accent, fontWeight: 600, fontSize: '13px', padding: '9px 16px', borderRadius: '10px', textDecoration: 'none' }}
                        >
                          {link.label}
                          <span style={{ fontSize: '10px', background: 'rgba(0,0,0,0.08)', padding: '2px 7px', borderRadius: '9999px', fontWeight: 600, letterSpacing: '0.05em' }}>{link.badge}</span>
                        </a>
                      ))}
                    </div>

                    {/* Tips */}
                    <div style={{ background: '#fafafa', borderRadius: '12px', padding: '16px 20px' }}>
                      <p style={{ fontSize: '11px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>Quick tips</p>
                      <ul style={{ margin: 0, paddingLeft: '18px' }}>
                        {section.tips.map((tip) => (
                          <li key={tip} style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.7, marginBottom: '4px' }}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Mr. Robson strip */}
        <div style={{ marginTop: '40px', background: '#1a3a5c', borderRadius: '20px', padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, margin: '0 0 6px' }}>Need help?</p>
            <p style={{ color: 'white', fontSize: '18px', fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, margin: 0 }}>Contact Mr. Robson directly</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="mailto:zachariah.robson@pacificcoastacademy.org" style={{ background: '#0891b2', color: 'white', padding: '11px 22px', borderRadius: '12px', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
              Email Mr. Robson
            </a>
            <a href="tel:6199960729" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', padding: '11px 22px', borderRadius: '12px', fontWeight: 600, fontSize: '14px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              (619) 996-0729
            </a>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0e7490', color: 'white', padding: '40px 28px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden' }}>
              <img src="/pca-logo.png" alt="PCA" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
            </div>
            <p style={{ fontWeight: 700, fontSize: '14px', margin: 0 }}>Robson's Roster · Pacific Coast Academy</p>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', margin: 0 }}>© 2026 Robson's Roster · Pacific Coast Academy</p>
        </div>
      </footer>

    </div>
  )
}
