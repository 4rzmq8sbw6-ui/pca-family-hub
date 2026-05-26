import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const hubs = [
  {
    title: 'For Parents',
    subtitle: 'COMPLIANCE, FUNDS & COMMUNICATION',
    desc: 'Claim attendance, access funds, and connect through Parent Portal & ParentSquare.',
    icon: '👤',
    iconBg: '#e0f2fe',
    accent: '#0891b2',
    badgeText: 'COMPLIANCE & FUNDS',
    badgeBg: '#e0f2fe',
    badgeColor: '#0e7490',
    href: '/parents',
    external: false,
  },
  {
    title: 'For Students',
    subtitle: 'STUDENT TOOLS & LOGINS',
    desc: 'Log in to Clever, Schoology, Gmail, and StudentSquare — all in one place.',
    icon: '🎓',
    iconBg: '#fef3c7',
    accent: '#d97706',
    badgeText: 'TOOLS & TECH',
    badgeBg: '#fef3c7',
    badgeColor: '#92400e',
    href: '/students',
    external: false,
  },
]

export default function LandingPage() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', backgroundColor: '#fdf0e0' }}>

      {/* ── HERO ── */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fdf0e0',
        backgroundImage: [
          'linear-gradient(45deg, rgba(0,0,0,0.032) 1px, transparent 1px)',
          'linear-gradient(-45deg, rgba(0,0,0,0.032) 1px, transparent 1px)',
          'radial-gradient(ellipse at 8% 35%, rgba(251,191,36,0.42) 0%, transparent 55%)',
          'radial-gradient(ellipse at 52% 55%, rgba(20,184,166,0.18) 0%, transparent 50%)',
          'radial-gradient(ellipse at 92% 8%, rgba(251,113,133,0.32) 0%, transparent 46%)',
        ].join(', '),
        backgroundSize: '10px 10px, 10px 10px, 100% 100%, 100% 100%, 100% 100%',
      }}>

        {/* Scattered dots */}
        <div style={{ position: 'absolute', width: '7px', height: '7px', background: '#f87171', opacity: 0.65, top: '20%', left: '13%', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '5px', height: '5px', background: '#f87171', opacity: 0.55, top: '52%', left: '19%', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '6px', height: '6px', background: '#fb923c', opacity: 0.50, top: '22%', left: '72%', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '4px', height: '4px', background: '#2dd4bf', opacity: 0.65, top: '11%', left: '44%', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '4px', height: '4px', background: '#fbbf24', opacity: 0.55, top: '34%', left: '91%', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '5px', height: '5px', background: '#a78bfa', opacity: 0.40, top: '42%', left: '57%', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '4px', height: '4px', background: '#f87171', opacity: 0.45, top: '8%', left: '84%', borderRadius: '50%', pointerEvents: 'none' }} />

        {/* Sun glow — soft, subtle, right of buttons */}
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(253,220,100,0.60) 0%, rgba(251,191,36,0.28) 35%, rgba(249,115,22,0.08) 65%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 2,
          right: '18%',
          top: '58%',
        }} />

        {/* Official Navigator stamp */}
        <div style={{
          position: 'absolute', right: '48px', top: '76px', zIndex: 3,
          width: '88px', height: '88px', borderRadius: '50%',
          border: '1.5px dashed rgba(220,100,100,0.50)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        }}>
          <p style={{ color: '#e07070', fontSize: '8.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', lineHeight: 1.7, margin: 0 }}>
            Official<br />Navigator<br />2025
          </p>
        </div>

        {/* Navbar */}
        <nav style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', height: '64px', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img src="/pca-logo.png" alt="PCA" style={{ width: '38px', height: '38px', objectFit: 'cover' }} />
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a3a5c', margin: 0, lineHeight: 1.2 }}>Robson's Roster</p>
              <p style={{ fontSize: '10px', color: '#92400e', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Pacific Coast Academy</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <Link to="/" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 600, color: '#1a2e44', textDecoration: 'none' }}>Home</Link>
            <Link to="/parents" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 500, color: '#1a2e44', textDecoration: 'none' }}>For Parents</Link>
            <Link to="/students" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 500, color: '#1a2e44', textDecoration: 'none' }}>For Students</Link>
            <a href="https://pcatesting.lovable.app/" target="_blank" rel="noreferrer" style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 500, color: '#1a2e44', textDecoration: 'none' }}>Assessments ↗</a>
          </div>
        </nav>

        {/* Hero content */}
        <div style={{ position: 'relative', padding: '14px 28px 24px', maxWidth: '820px', zIndex: 3 }}>

          {/* Year badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '9999px', padding: '4px 14px', marginBottom: '20px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2025 — 2026 Academic Season</span>
          </div>

          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '54px', fontWeight: 700, color: '#1a2e44', lineHeight: 1.08, margin: '0 0 6px' }}>
            Your school year,
          </h1>
          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '54px', fontWeight: 700, lineHeight: 1.08, margin: '0 0 22px' }}>
            <span style={{ fontStyle: 'italic', backgroundImage: 'linear-gradient(135deg, #0e7490 0%, #d97706 55%, #e11d48 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>charted</span>
            <span style={{ color: '#1a2e44' }}> from shore to shore.</span>
          </h1>

          {/* Gradient rule */}
          <div style={{ width: '140px', height: '3px', backgroundImage: 'linear-gradient(90deg, #f59e0b, #0891b2)', borderRadius: '9999px', marginBottom: '26px' }} />

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#hub" style={{ background: '#e8870a', color: 'white', fontWeight: 700, padding: '13px 26px', borderRadius: '12px', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get Started →
            </a>
            <a href="#teacher" style={{ background: 'rgba(255,255,255,0.75)', color: '#1a2e44', fontWeight: 600, padding: '13px 26px', borderRadius: '12px', fontSize: '14px', border: '1px solid rgba(0,0,0,0.14)', textDecoration: 'none' }}>
              Meet Your Teacher
            </a>
          </div>
        </div>

        {/* Ocean waves — bottom cream fades into page */}
        <svg
          viewBox="0 0 1440 260"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', lineHeight: 0, position: 'relative', zIndex: 1, marginTop: '18px' }}
        >
          <defs>
            <radialGradient id="sunRiseWave" cx="72%" cy="0%" r="55%">
              <stop offset="0%" stopColor="#fde68a" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="260" fill="url(#sunRiseWave)" />
          <path d="M0,40 C220,98 440,8 680,50 C860,82 1060,8 1260,46 C1360,66 1420,36 1440,46 L1440,260 L0,260 Z" fill="rgba(185,215,210,0.28)" />
          <path d="M0,76 C260,16 540,138 800,76 C1020,26 1240,128 1440,80 L1440,260 L0,260 Z" fill="rgba(148,195,196,0.40)" />
          <path d="M0,110 C200,52 460,165 720,110 C980,55 1220,168 1440,110 L1440,260 L0,260 Z" fill="rgba(92,164,170,0.54)" />
          <path d="M0,148 C200,108 440,188 700,148 C960,108 1180,192 1420,148 L1440,146 L1440,260 L0,260 Z" fill="rgba(54,144,154,0.70)" />
          <path d="M0,186 C240,164 490,208 750,186 C1010,164 1230,210 1440,186 L1440,260 L0,260 Z" fill="#4aa8b2" />
          <path d="M0,218 C360,200 720,236 1080,218 C1280,209 1390,224 1440,218 L1440,260 L0,260 Z" fill="#3d9da8" />
          <path d="M0,245 C300,230 650,256 960,244 C1180,236 1340,252 1440,246 L1440,260 L0,260 Z" fill="#fdf0e0" />
        </svg>
      </div>

      {/* ── EXPLORE THE HUB ── */}
      <div id="hub" style={{
        background: '#fdf0e0',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.022) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        padding: '64px 28px',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: '#92400e', textTransform: 'uppercase', margin: '0 0 8px' }}>Explore the Hub</p>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '32px', fontWeight: 700, color: '#1a2e44', margin: '0 0 12px' }}>Find what you need, fast.</h2>
          <div style={{ width: '110px', height: '2px', backgroundImage: 'linear-gradient(90deg, #f59e0b, #0891b2)', borderRadius: '9999px', marginBottom: '36px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px' }}>
            {hubs.map((hub) => (
              <a
                key={hub.title}
                href={hub.href}
                style={{ background: 'white', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.08)', padding: '26px', display: 'flex', gap: '18px', alignItems: 'flex-start', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', textDecoration: 'none' }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: hub.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                  {hub.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3px' }}>
                    <h3 style={{ fontWeight: 700, color: '#1a2e44', fontSize: '16px', fontFamily: '"Playfair Display", Georgia, serif', margin: 0 }}>{hub.title}</h3>
                    <span style={{ fontSize: '10px', borderRadius: '9999px', padding: '3px 10px', fontWeight: 600, whiteSpace: 'nowrap', background: hub.badgeBg, color: hub.badgeColor, marginLeft: '10px' }}>{hub.badgeText}</span>
                  </div>
                  <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', fontWeight: 500, margin: '0 0 10px' }}>{hub.subtitle}</p>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.65, margin: '0 0 16px' }}>{hub.desc}</p>
                  <span style={{ fontWeight: 700, fontSize: '13px', color: hub.accent }}>Learn more ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MEET YOUR TEACHER ── */}
      <div id="teacher" style={{ background: '#fdf0e0', padding: '0 28px 64px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', background: 'white', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.08)', padding: '36px', display: 'flex', gap: '36px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <img
            src="/mr-robson.png"
            alt="Zach Robson"
            style={{ width: '150px', height: '180px', borderRadius: '14px', objectFit: 'cover', flexShrink: 0, boxShadow: '0 6px 20px rgba(0,0,0,0.10)' }}
          />
          <div style={{ flex: 1, minWidth: '260px' }}>
            <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: '#92400e', textTransform: 'uppercase', margin: '0 0 6px' }}>Meet Your Teacher</p>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', fontWeight: 700, color: '#1a2e44', margin: '0 0 4px' }}>Zach Robson, MS</h2>
            <p style={{ color: '#0891b2', fontWeight: 500, fontSize: '14px', margin: '0 0 16px' }}>MS / HS Homeschool Teacher · Pacific Coast Academy</p>
            <div style={{ width: '70px', height: '2px', backgroundImage: 'linear-gradient(90deg, #f59e0b, #0891b2)', borderRadius: '9999px', marginBottom: '16px' }} />
            <p style={{ color: '#4b5563', lineHeight: 1.75, fontSize: '14px', margin: '0 0 24px' }}>
              I built this navigator so families on my roster always know exactly where to go next — whether you're claiming attendance, ordering curriculum, prepping for an LP meeting, or scheduling a Star 360 session.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="mailto:zachariah.robson@pacificcoastacademy.org" style={{ background: '#1a3a5c', color: 'white', padding: '10px 20px', borderRadius: '10px', fontWeight: 500, fontSize: '13px', textDecoration: 'none' }}>
                Email Mr. Robson
              </a>
              <a href="tel:6199960729" style={{ border: '1px solid #d1d5db', color: '#374151', padding: '10px 20px', borderRadius: '10px', fontWeight: 500, fontSize: '13px', background: 'white', textDecoration: 'none' }}>
                (619) 996-0729
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0e7490', color: 'white', padding: '48px 28px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/pca-logo.png" alt="PCA" style={{ width: '34px', height: '34px', objectFit: 'cover' }} />
              </div>
              <p style={{ fontWeight: 700, fontSize: '15px', margin: 0 }}>Robson's Roster</p>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: '0 0 4px' }}>Zach Robson, MS · MS/HS Homeschool Teacher</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0 }}>Pacific Coast Academy</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: '0 0 6px' }}>zachariah.robson@pacificcoastacademy.org</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0 }}>(619) 996-0729</p>
          </div>
        </div>
        <div style={{ maxWidth: '860px', margin: '24px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', margin: 0 }}>© 2026 Robson's Roster · Pacific Coast Academy</p>
        </div>
      </footer>

    </div>
  )
}
