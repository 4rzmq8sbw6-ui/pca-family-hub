import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const sections = [
  {
    id: 'clever',
    eyebrow: 'STEP 1',
    title: 'Logging in to Clever',
    accent: '#0891b2',
    accentBg: '#e0f2fe',
    icon: '🔐',
    intro: 'Clever is your student dashboard — it gives you one-click access to Schoology, Khan Academy, and all your other school apps without needing separate passwords.',
    links: [
      { label: 'Clever Login Instructions', href: 'https://docs.google.com/document/d/1tZ7dcZPv0vkeYwcw943xHIxYYcT0bXs8nwn7rlTQZr4/edit?tab=t.0', badge: 'GOOGLE DOC' },
      { label: 'Open Clever', href: 'https://clever.com/in/pca', badge: 'EXTERNAL' },
    ],
    tips: [
      'Use your school Google account to sign in — not a personal Gmail',
      'If Clever is not working, try clearing your browser cache first',
      'All your class apps will appear on your Clever dashboard automatically',
    ],
  },
  {
    id: 'email',
    eyebrow: 'STEP 2',
    title: 'School Email & Password',
    accent: '#d97706',
    accentBg: '#fef3c7',
    icon: '📧',
    intro: 'Your PCA school email is your main login for Google Classroom, Schoology, and communication with Mr. Robson. This guide walks you through setting it up and resetting your password.',
    links: [
      { label: 'Email & Password Guide', href: 'https://docs.google.com/document/d/1U4gXbJKVHWxwbnd0tJy04w12R2dsMlWF2M-enyUXjbQ/edit?tab=t.0', badge: 'GOOGLE DOC' },
    ],
    tips: [
      'Your school email ends in @pacificcoastacademy.org',
      'Never share your password with anyone',
      'If you get locked out, contact Mr. Robson to reset it',
    ],
  },
  {
    id: 'tech',
    eyebrow: 'TOOLS',
    title: 'Tech Catalog',
    accent: '#7c3aed',
    accentBg: '#ede9fe',
    icon: '💻',
    intro: 'The PCA Tech Catalog lists all the approved apps, platforms, and devices available to students. Use it to see what tools are available and how to access them.',
    links: [
      { label: 'Browse the Tech Catalog', href: 'https://sites.google.com/pacificcoastacademy.org/techcatalog/home', badge: 'EXTERNAL' },
    ],
    tips: [
      'Check here before downloading any new app for school',
      'All listed tools are approved for student use',
      'Ask Mr. Robson if you need a tool that isn\'t listed',
    ],
  },
  {
    id: 'lp',
    eyebrow: 'MEETINGS',
    title: 'LP Meeting Template',
    accent: '#db2777',
    accentBg: '#fce7f3',
    icon: '📅',
    intro: 'LP (Learning Plan) meetings happen regularly between you, your parent, and Mr. Robson. Use this template to prepare your goals and talking points ahead of each meeting.',
    links: [
      { label: 'LP Meeting Template', href: 'https://docs.google.com/document/d/1mrW4u0O1stLfROeu7l4bxs4_paPAMIZzFZMs2X2EvKM/edit?usp=sharing', badge: 'GOOGLE DOC' },
    ],
    tips: [
      'Fill out the template before your meeting — not during',
      'Bring a list of what you\'ve been working on each subject',
      'LP meetings are a great time to request new curriculum or resources',
    ],
  },
  {
    id: 'curriculum',
    eyebrow: 'CURRICULUM',
    title: 'Homeschool Hub & Your IGP',
    accent: '#16a34a',
    accentBg: '#dcfce7',
    icon: '📖',
    intro: 'Your IGP (Individual Graduation Plan) lives in the Homeschool Hub. It tracks your coursework, credits, and learning goals for the year. Review it with your parent before each LP meeting.',
    links: [
      { label: 'Homeschool Hub', href: 'https://homeschoolhub.pacificcoastacademy.org', badge: 'LOGIN REQUIRED' },
    ],
    tips: [
      'Check your IGP at the start of each month to stay on track',
      'Your parent can order curriculum and subscriptions through the Hub',
      'Talk to Mr. Robson if you want to change a course or add something new',
    ],
  },
]

export default function StudentsPage() {
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
            <Link to="/parents" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 500, color: '#1a2e44', textDecoration: 'none' }}>For Parents</Link>
            <Link to="/students" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 700, color: '#d97706', textDecoration: 'none' }}>For Students</Link>
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
          'radial-gradient(ellipse at 10% 60%, rgba(217,119,6,0.20) 0%, transparent 55%)',
          'radial-gradient(ellipse at 90% 20%, rgba(251,191,36,0.30) 0%, transparent 50%)',
        ].join(', '),
        backgroundSize: '10px 10px, 10px 10px, 100% 100%, 100% 100%',
        padding: '56px 28px 48px',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '9999px', padding: '4px 14px', marginBottom: '20px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#d97706', display: 'inline-block' }} />
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Student Resources</span>
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '44px', fontWeight: 700, color: '#1a2e44', lineHeight: 1.1, margin: '0 0 16px' }}>
            For Students
          </h1>
          <div style={{ width: '120px', height: '3px', backgroundImage: 'linear-gradient(90deg, #d97706, #0891b2)', borderRadius: '9999px', marginBottom: '20px' }} />
          <p style={{ fontSize: '16px', color: '#4b5563', maxWidth: '560px', lineHeight: 1.75, margin: 0 }}>
            Everything you need to log in, get organized, and stay on top of your school year — all in one place.
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
              <div style={{ height: '4px', backgroundImage: 'linear-gradient(90deg, ' + section.accent + ', ' + section.accent + '88)' }} />
              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: section.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>
                    {section.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: '260px' }}>
                    <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: section.accent, textTransform: 'uppercase', margin: '0 0 4px' }}>{section.eyebrow}</p>
                    <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#1a2e44', margin: '0 0 12px' }}>{section.title}</h2>
                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, margin: '0 0 20px' }}>{section.intro}</p>

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

        {/* Contact strip */}
        <div style={{ marginTop: '40px', background: '#1a3a5c', borderRadius: '20px', padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, margin: '0 0 6px' }}>Need help?</p>
            <p style={{ color: 'white', fontSize: '18px', fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, margin: 0 }}>Contact Mr. Robson directly</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="mailto:zachariah.robson@pacificcoastacademy.org" style={{ background: '#d97706', color: 'white', padding: '11px 22px', borderRadius: '12px', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
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
