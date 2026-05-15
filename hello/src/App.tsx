import { useState, useEffect } from 'react'
import './App.css'

/* ===== 데이터 ===== */
const quotes = [
  {
    text: "배움에는 왕도가 없다. 오직 끈기와 노력만이 성공의 열쇠이다.",
    author: "유클리드",
    source: "고대 그리스 수학자",
  },
  {
    text: "교육은 세상을 바꾸는 가장 강력한 무기이다.",
    author: "넬슨 만델라",
    source: "남아프리카공화국 전 대통령",
  },
  {
    text: "천 리 길도 한 걸음부터 시작된다.",
    author: "노자",
    source: "도덕경",
  },
  {
    text: "실패는 성공의 어머니이다. 포기하지 않는 한 실패란 없다.",
    author: "토마스 에디슨",
    source: "미국 발명가",
  },
  {
    text: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "벤저민 프랭클린",
    source: "미국 건국의 아버지",
  },
]

const sideIssues = [
  {
    title: "기말고사 일정 안내",
    desc: "6월 2주차 기말고사 시간표가 공개되었습니다.",
  },
  {
    title: "체육대회 반별 연습 시작",
    desc: "다음 주부터 체육대회 반별 연습이 시작됩니다.",
  },
  {
    title: "동아리 발표회 참가 신청",
    desc: "교내 동아리 발표회 참가 신청을 받고 있습니다.",
  },
]

/* ===== 컴포넌트 ===== */
function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('인물소개')
  const [quoteIdx, setQuoteIdx] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 명언 자동 전환
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const navItems = ['인물소개', '학교평가', '급식평가', '구암 대전']

  const navCardData = [
    {
      icon: '👤',
      title: '인물소개',
      desc: '우리 학교의 자랑스러운 인물들을 만나보세요',
      iconClass: 'people',
    },
    {
      icon: '🏫',
      title: '학교평가',
      desc: '학생들이 직접 평가하는 우리 학교',
      iconClass: 'school',
    },
    {
      icon: '🍱',
      title: '급식평가',
      desc: '오늘의 급식은 몇 점? 솔직한 리뷰',
      iconClass: 'meal',
    },
    {
      icon: '⚔️',
      title: '구암 대전',
      desc: '학생들의 열정이 가득한 대결의 장',
      iconClass: 'battle',
    },
  ]

  const currentQuote = quotes[quoteIdx]

  const todayDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })

  return (
    <>
      {/* ===== 네비게이션 바 ===== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="nav-logo-icon">구</div>
            <div>
              <div className="nav-logo-text">구암고등학교</div>
              <div className="nav-logo-sub">Guam High School</div>
            </div>
          </div>

          <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item}
                className={`nav-link ${activeNav === item ? 'active' : ''}`}
                onClick={() => {
                  setActiveNav(item)
                  setMobileOpen(false)
                }}
                id={`nav-${item}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className={`nav-mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
            id="mobile-menu-toggle"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* ===== 히어로 섹션 ===== */}
      <section className="hero-section" id="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          2026학년도 구암고등학교
        </div>
        <h1 className="hero-title">
          꿈을 향해 함께<br />
          <span className="highlight">성장하는 구암</span>
        </h1>
        <p className="hero-subtitle">
          학생 중심의 열린 교육, 미래를 향한 도전.<br />
          구암고등학교의 모든 이야기를 만나보세요.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">1,200+</span>
            <span className="hero-stat-label">재학생</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">98%</span>
            <span className="hero-stat-label">진학률</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">50+</span>
            <span className="hero-stat-label">동아리</span>
          </div>
        </div>
      </section>

      {/* ===== 메뉴 카드 섹션 ===== */}
      <section className="section" id="menu-section">
        <div className="section-header">
          <div className="section-tag">Menu</div>
          <h2 className="section-title">바로가기</h2>
          <p className="section-desc">구암고등학교의 다양한 콘텐츠를 둘러보세요</p>
        </div>
        <div className="nav-cards">
          {navCardData.map((card, i) => (
            <div
              className="nav-card"
              key={card.title}
              onClick={() => setActiveNav(card.title)}
              style={{ animationDelay: `${i * 0.1}s`, animation: 'fadeInUp 0.6s ease-out both' }}
              id={`card-${card.title}`}
            >
              <div className={`nav-card-icon ${card.iconClass}`}>{card.icon}</div>
              <div className="nav-card-title">{card.title}</div>
              <div className="nav-card-desc">{card.desc}</div>
              <div className="nav-card-arrow">자세히 보기 →</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 오늘의 이슈 ===== */}
      <section className="section issue-section" id="today-issue">
        <div className="section-header">
          <div className="section-tag">Today's Issue</div>
          <h2 className="section-title">오늘의 이슈</h2>
          <p className="section-desc">구암고에서 지금 가장 핫한 소식</p>
        </div>

        <div className="issue-container">
          <div className="issue-main" id="main-issue">
            <div className="issue-image-wrapper">
              <div className="issue-image-placeholder">
                📢
                <span>구암고등학교 소식</span>
              </div>
              <div className="issue-badge">
                <span className="issue-badge-item hot">HOT</span>
                <span className="issue-badge-item">공지</span>
              </div>
            </div>
            <div className="issue-content">
              <div className="issue-date">
                📅 {todayDate}
              </div>
              <h3 className="issue-title">
                2학기 학생회 선거 후보 등록 시작! 🗳️
              </h3>
              <p className="issue-text">
                2학기 학생회장 및 부회장 선거를 위한 후보 등록이 시작되었습니다.
                출마를 희망하는 학생은 학생회실에서 등록 양식을 받아 제출해주세요.
                선거 연설은 다음 주 월요일 전교생 조회 시간에 진행될 예정입니다.
              </p>
              <div className="issue-tags">
                <span className="issue-tag">#학생회선거</span>
                <span className="issue-tag">#후보등록</span>
                <span className="issue-tag">#학교행사</span>
                <span className="issue-tag">#참여</span>
              </div>
            </div>
          </div>

          <div className="issue-grid">
            <div></div>
            <div className="issue-side">
              {sideIssues.map((issue, i) => (
                <div className="issue-side-card" key={i} id={`side-issue-${i}`}>
                  <div className="issue-side-num">0{i + 1}</div>
                  <div className="issue-side-content">
                    <h4>{issue.title}</h4>
                    <p>{issue.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 명언 글귀 ===== */}
      <section className="section quotes-section" id="quotes">
        <div className="section-header">
          <div className="section-tag">Daily Quote</div>
          <h2 className="section-title">오늘의 명언</h2>
          <p className="section-desc">하루를 시작하는 지혜로운 한마디</p>
        </div>

        <div className="quote-card" id="quote-card">
          <div className="quote-decoration">"</div>
          <p className="quote-text" key={quoteIdx}>
            {currentQuote.text}
          </p>
          <div className="quote-divider"></div>
          <div className="quote-author">{currentQuote.author}</div>
          <div className="quote-source">{currentQuote.source}</div>

          <div className="quote-nav">
            <button
              className="quote-nav-btn"
              onClick={() => setQuoteIdx((prev) => (prev - 1 + quotes.length) % quotes.length)}
              aria-label="이전 명언"
              id="quote-prev"
            >
              ←
            </button>
            <div className="quote-dots">
              {quotes.map((_, i) => (
                <span
                  key={i}
                  className={`quote-dot ${i === quoteIdx ? 'active' : ''}`}
                  onClick={() => setQuoteIdx(i)}
                />
              ))}
            </div>
            <button
              className="quote-nav-btn"
              onClick={() => setQuoteIdx((prev) => (prev + 1) % quotes.length)}
              aria-label="다음 명언"
              id="quote-next"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ===== 푸터 ===== */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-logo">구암고등학교</div>
          <div className="footer-text">
            대전광역시 · 구암고등학교<br />
            학생들의 꿈과 미래를 응원합니다
          </div>
          <div className="footer-divider"></div>
          <div className="footer-copy">
            © 2026 구암고등학교. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
