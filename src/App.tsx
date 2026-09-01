import { useEffect, useRef, useState } from 'react'
import engineeringExecutionIcon from '../assets/icons/engineering-execution-collaboration.svg'
import failureInvestigationIcon from '../assets/icons/failure-investigation.svg'
import reliabilityValidationIcon from '../assets/icons/reliability-validation.svg'
import testPlanningIcon from '../assets/icons/test-planning-assessment.svg'
import owlFrontBrand from '../assets/brand/logos/owl-front-logo.png'

const cases = [
  {
    number: '01',
    mode: 'Investigate',
    title: 'Multilayer Module Failure Localization & Root Cause Investigation',
    titleLines: ['Multilayer Module', 'Failure Localization', '& Root Cause Investigation'],
    result: '~90%',
    resultLabel: 'suspect region narrowed',
    href: 'cases/heat-soak.html',
  },
  {
    number: '02',
    mode: 'Coordinate',
    title: 'Cross-functional Coordination for NAND Test Equipment Deployment',
    titleLines: ['Cross-functional Coordination', 'for NAND Test Equipment', 'Deployment'],
    result: '3',
    resultLabel: 'months to stable',
    href: 'cases/nand.html',
  },
  {
    number: '03',
    mode: 'Validate',
    title: 'MLCC Design Engineering & Reliability Validation',
    titleLines: ['MLCC Design Engineering', '& Reliability Validation'],
    result: '3',
    resultLabel: 'products moved to MP',
    href: 'cases/mlcc.html',
  },
]

const journey = [
  {
    stage: 'B.S. Materials Science',
    period: '2016–2020',
    heading: 'Build the material foundation',
    body: 'Built a foundation in material structure, properties, and processing, learning to connect material behavior with manufacturing conditions and engineering performance.',
  },
  {
    stage: 'M.S. Chemistry',
    period: '2020–2023',
    heading: 'Explore materials through research',
    body: 'Used characterization and controlled experiments to examine how composition and structure influence material behavior, strengthening experimental design and evidence-based interpretation.',
  },
  {
    stage: 'MLCC Development',
    period: '2023–2024',
    heading: 'Develop products',
    body: 'Turned capacitance targets into MLCC structure and process trials, then used electrical, reliability, and failure-analysis results to refine design choices, improve process stability, and move new products toward production readiness.',
  },
  {
    stage: 'Failure Analysis',
    period: '2024–2026',
    heading: 'Investigate failures',
    body: 'Connected functional symptoms with physical evidence across semiconductor and electronic assemblies, using progressive localization and structural analysis to narrow failure regions, evaluate potential mechanisms, and translate findings into clear engineering decisions and follow-up actions.',
  },
]

const capabilityCards = [
  {
    icon: failureInvestigationIcon,
    group: 'Failure Investigation',
    points: [
      'Plan investigation steps based on available evidence',
      'Narrow down failures from system level to local area',
      'Correlate functional symptoms with physical observations',
    ],
  },
  {
    icon: reliabilityValidationIcon,
    group: 'Reliability & Validation',
    points: [
      'Interpret failure behavior after reliability stress testing',
      'Evaluate product performance against validation requirements',
      'Identify reliability risks from test results and evidence',
    ],
  },
  {
    icon: testPlanningIcon,
    group: 'Test Planning & Data-driven Assessment',
    points: [
      'Design practical experiments around key variables',
      'Analyze test variation and process capability',
      'Define clear pass-fail criteria for engineering decisions',
    ],
  },
  {
    icon: engineeringExecutionIcon,
    group: 'Engineering Execution & Collaboration',
    points: [
      'Track technical issues, actions, and investigation progress',
      'Coordinate troubleshooting with vendors and engineering teams',
      'Follow up cross-functional actions through technical closure',
    ],
  },
]

const toolKitGroups = [
  ['Localization', 'OM, CSAM, LIT, EMMI, OBIRCH'],
  ['Material Analysis', 'SEM/EDS, FIB, FTIR, XRD'],
  ['Reliability', 'TC, HALT, DPA'],
  ['Data & Statistics', 'DOE, Cp/Cpk, Minitab'],
  ['Engineering Execution', 'Issue tracking, vendor coordination, SOP'],
]

const navItems = [
  ['overview', 'Overview'],
  ['cases', 'Case Studies'],
  ['capabilities', 'Capabilities'],
  ['journey', 'Career Journey'],
  ['contact', 'Contact'],
]

const mobilePrimaryNavItems = navItems.slice(0, 1)
const mobileMoreNavItems = navItems

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const [isMoreNavOpen, setIsMoreNavOpen] = useState(false)
  const moreNavRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hash = window.location.hash.slice(1)

    if (!hash) {
      return
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(hash)

      if (!target) {
        return
      }

      window.scrollTo({
        top: Math.max(target.offsetTop, 0),
        behavior: 'smooth',
      })
    })
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0.1, 0.3, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMoreNavOpen) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!moreNavRef.current?.contains(event.target as Node)) {
        setIsMoreNavOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMoreNavOpen(false)
      }
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMoreNavOpen])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-nav">
        <div className="nav-inner">
          <a className="brand" href="#overview" aria-label="Kaia home">
            <img className="brand-image" src={owlFrontBrand} alt="" aria-hidden="true" />
          </a>
          <nav className="primary-nav" aria-label="Primary navigation">
            {navItems.map(([id, label]) => (
              <a
                className={activeSection === id ? 'is-active' : undefined}
                href={`#${id}`}
                aria-current={activeSection === id ? 'page' : undefined}
                key={id}
              >
                {label}
              </a>
            ))}
          </nav>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {mobilePrimaryNavItems.map(([id, label]) => (
              <a
                className={activeSection === id ? 'is-active' : undefined}
                href={`#${id}`}
                aria-current={activeSection === id ? 'page' : undefined}
                key={id}
              >
                {label}
              </a>
            ))}
            <div className="mobile-more-nav" ref={moreNavRef}>
              <button
                className={isMoreNavOpen ? 'mobile-more-button is-open' : 'mobile-more-button'}
                type="button"
                aria-expanded={isMoreNavOpen}
                aria-controls="mobile-more-menu"
                aria-label={isMoreNavOpen ? 'Close navigation' : 'Open navigation'}
                onClick={() => setIsMoreNavOpen((current) => !current)}
              >
                {isMoreNavOpen ? 'Close' : 'Menu'}
              </button>
              <div
                className={isMoreNavOpen ? 'mobile-more-menu is-open' : 'mobile-more-menu'}
                id="mobile-more-menu"
              >
                {mobileMoreNavItems.map(([id, label]) => (
                  <a
                    className={activeSection === id ? 'is-active' : undefined}
                    href={`#${id}`}
                    aria-current={activeSection === id ? 'page' : undefined}
                    key={id}
                    onClick={() => setIsMoreNavOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="overview" className="section hero-section">
          <div className="section-inner hero-grid">
            <div className="hero-copy hero-minimal-copy">
              <p className="identity-line">Hi, I’m Jia</p>
              <p className="hero-role">
                <span>Engineer, specializing in</span>
                <span>failure analysis, reliability,</span>
                <span>and material characterization</span>
              </p>
              <div className="hero-phrases" aria-label="Role fit">
                <p>I identify failure modes, validate reliability, and interpret material evidence to inform engineering decisions.</p>
                <p>When an issue arises, I start by understanding the underlying cause. I define the scope before diving into details, and cross-check evidence before concluding.</p>
              </div>
              <a className="view-case-badge" href="#cases">View cases <span aria-hidden="true">→</span></a>
            </div>

          </div>
        </section>

        <section id="cases" className="section cases-section">
          <div className="section-inner">
            <div className="case-product-grid" aria-label="Selected case studies">
              {cases.map((item) => (
                <a className="case-product" href={item.href} key={item.number}>
                  <div className="case-topline">
                    <span>Case {item.number}</span>
                    <span>{item.mode}</span>
                  </div>
                  <h3 aria-label={item.title}>
                    {item.titleLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </h3>
                  <div className="case-footer">
                    <div className="case-result">
                      <strong>{item.result}</strong>
                      <span>{item.resultLabel}</span>
                    </div>
                    <span className="case-link" aria-hidden="true">→</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="case-section-footer">
              <a href="#overview">Back to top ↑</a>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section capability-section">
          <div className="section-inner">
            <header className="capability-header">
              <span>Capabilities</span>
              <h2>From Evidence to Decision</h2>
            </header>
            <div className="capability-system">
              <div className="capability-bento" aria-label="Engineering capability areas">
                {capabilityCards.map((item) => (
                  <article className="capability-card" key={item.group}>
                    <img
                      className="capability-icon"
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                    />
                    <h3>{item.group}</h3>
                    <div className="capability-points" role="list">
                      {item.points.map((point) => (
                        <span key={point} role="listitem">{point}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              <aside className="toolkit-panel" aria-label="Tool kit">
                <div className="toolkit-heading">
                  <h3>Tool Kit</h3>
                </div>
                <div className="toolkit-list">
                  {toolKitGroups.map(([group, tools], index) => (
                    <div className="toolkit-group" key={group}>
                      <small>{String(index + 1).padStart(2, '0')}</small>
                      <div>
                        <span>{group}</span>
                        <p>{tools}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="section-inner">
            <header className="journey-header">
              <span>Career Journey</span>
              <h2>Shaped by Materials, Research, and Practice</h2>
            </header>

            <div className="journey-map" role="group" aria-label="Career milestones from materials science to failure analysis">
              <svg
                className="journey-path"
                viewBox="0 0 1400 330"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <marker
                    id="journey-arrow"
                    markerWidth="12"
                    markerHeight="12"
                    refX="10"
                    refY="6"
                    orient="auto"
                    markerUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 2 2 L 10 6 L 2 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </marker>
                </defs>
                <path
                  className="journey-path-line"
                  d="M 38 284 C 82 282 116 278 150 272 C 228 258 308 249 390 248 C 432 247 457 235 490 228 C 567 216 639 219 710 211 C 762 205 791 194 825 190 C 899 180 965 179 1030 166 C 1071 158 1095 149 1120 145 C 1192 136 1262 108 1350 73"
                  markerEnd="url(#journey-arrow)"
                />
              </svg>

              <ol className="journey-milestones">
                {journey.map((item) => (
                  <li className="journey-milestone" key={item.stage}>
                    <div className="journey-milestone-copy">
                      <h3>{item.stage}</h3>
                      <p>{item.period}</p>
                    </div>
                    <svg className="journey-pin" viewBox="0 0 50 64" aria-hidden="true">
                      <path d="M25 62 C22 55 7 39 7 25 C7 15 15 7 25 7 C35 7 43 15 43 25 C43 39 28 55 25 62 Z" />
                      <circle cx="25" cy="25" r="6" />
                    </svg>
                  </li>
                ))}
              </ol>

              <span className="journey-forward">Looking Forward</span>
            </div>

            <ol className="journey-story-grid">
              {journey.map((item) => (
                <li className="journey-story" key={item.heading}>
                  <svg className="journey-story-pin" viewBox="0 0 50 64" aria-hidden="true">
                    <path d="M25 62 C22 55 7 39 7 25 C7 15 15 7 25 7 C35 7 43 15 43 25 C43 39 28 55 25 62 Z" />
                    <circle cx="25" cy="25" r="6" />
                  </svg>
                  <div className="journey-story-meta">
                    <span>{item.stage}</span>
                    <small>{item.period}</small>
                  </div>
                  <h3>{item.heading}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
              <li className="journey-mobile-forward">Looking Forward</li>
            </ol>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-inner contact-grid">
            <footer className="contact-footer" aria-label="Contact">
              <div className="footer-contact-content">
                <div className="footer-contact-row" aria-label="Contact options">
                  <div className="footer-contact-actions">
                    <a className="footer-action footer-action-email" href="mailto:jiayi_office@163.com">
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M4.75 6.75h14.5v10.5H4.75z" />
                        <path d="M5.25 7.25 12 12.4l6.75-5.15" />
                      </svg>
                      <span>jiayi_office@163.com</span>
                    </a>
                    <a className="footer-action footer-action-resume" href="./resume.html">
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M7.25 3.75h7.1l2.4 2.45v14.05H7.25z" />
                        <path d="M14.25 3.95v3.3h3.2" />
                        <path d="M9.75 11h4.5M9.75 14h4.5" />
                      </svg>
                      <span>View Resume</span>
                    </a>
                  </div>
                </div>

              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
