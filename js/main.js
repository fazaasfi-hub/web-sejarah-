/**
 * CULTUURSTELSEL — DIGITAL HISTORICAL ARCHIVE
 * Main Client Logic: 3D Coverflow Carousel, Decadal Economic Timeline, Figures,
 * Responsive Mobile Navigation & Interactive Archival Stamps
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
  initSplashScreen();
  initMobileMenu();
  initCoverflow();
  initDecadalTimeline();
  initHistoricalFigures();
  initArchivalStamps();
  initScrollEffects();
  initScrollReveal();
});

window.addEventListener('load', () => {
  if (!window.location.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const masthead = document.querySelector('.archival-masthead');
    if (masthead) masthead.style.transform = 'translateY(0)';
  }
});

/* ==========================================================================
   MUSEUM ARCHIVAL SPLASH SCREEN
   ========================================================================== */
function initSplashScreen() {
  const splash = document.getElementById('archival-splash');
  const root = document.documentElement;
  if (!splash) {
    root.classList.remove('splash-pending');
    return;
  }

  if (window.location.hash || !root.classList.contains('splash-pending')) {
    root.classList.remove('splash-pending');
    splash.setAttribute('aria-hidden', 'true');
    return;
  }

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let dismissed = false;
  let autoTimer = null;
  let cleanupTimer = null;

  function dismissSplash() {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(autoTimer);

    splash.classList.add('is-exiting');
    splash.setAttribute('aria-hidden', 'true');

    const exitDuration = prefersReduced ? 260 : 650;
    cleanupTimer = setTimeout(() => {
      root.classList.remove('splash-pending');
      splash.classList.remove('is-exiting');
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, exitDuration);
  }

  // Auto-dismiss cleanly after all letters finish revealing
  autoTimer = setTimeout(dismissSplash, prefersReduced ? 900 : 2450);

  splash.addEventListener('click', dismissSplash, { once: true });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !dismissed) {
      dismissSplash();
    }
  }, { once: true });

  window.addEventListener('pageshow', () => {
    if (!dismissed && cleanupTimer === null) {
      setTimeout(dismissSplash, 2800);
    }
  }, { once: true });
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.toggle('is-open');
    toggleBtn.classList.toggle('is-active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close when clicking nav links
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   3D COVERFLOW CAROUSEL (RESPONSIVE & TOUCH OPTIMIZED)
   ========================================================================== */
function initCoverflow() {
  const stage = document.getElementById('coverflow-stage');
  const track = document.getElementById('coverflow-track');
  const dotsContainer = document.getElementById('coverflow-dots');

  if (!track || !window.CHAPTERS_DATA) return;

  const chapters = window.CHAPTERS_DATA;
  let activeIndex = 0;
  let isDragging = false;
  let startX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let touchDeltaY = 0;
  let mouseDeltaX = 0;
  let isHorizontalSwipe = false;
  let hasDraggedSignificantly = false;

  // Build Cards
  track.innerHTML = '';
  dotsContainer.innerHTML = '';

  chapters.forEach((chap, idx) => {
    const card = document.createElement('div');
    card.className = 'coverflow-card';
    card.dataset.index = idx;

    card.innerHTML = `
      <div class="coverflow-card-image-wrap">
        <img class="coverflow-card-img" src="${chap.heroImage}" alt="${chap.title}" loading="lazy" />
        <div class="card-image-top-bar">
          <span class="card-number-badge">${chap.roman}</span>
          <span class="card-period-badge">${chap.period}</span>
        </div>
      </div>
      <div class="coverflow-card-content">
        <div class="coverflow-card-body">
          <span class="card-roman-label">BAB ${chap.number} · ARSIP SEJARAH</span>
          <h3 class="card-title">${chap.title}</h3>
          <p class="card-description">${chap.summary}</p>
        </div>
        <div class="card-action-bar">
          <span class="read-chapter-label">BACA BAB →</span>
          <span class="card-read-time">${chap.readingTime}</span>
        </div>
      </div>
    `;

    // Click handler with swipe guard
    card.addEventListener('click', (e) => {
      if (hasDraggedSignificantly) {
        e.preventDefault();
        return;
      }
      if (idx === activeIndex) {
        window.location.href = `bab.html?id=${chap.id}`;
      } else {
        goToIndex(idx);
      }
    });

    track.appendChild(card);

    // Create Dot
    const dot = document.createElement('div');
    dot.className = `coverflow-dot ${idx === 0 ? 'is-active' : ''}`;
    dot.setAttribute('aria-label', `Buka Bab ${chap.number}`);
    dot.addEventListener('click', () => goToIndex(idx));
    dotsContainer.appendChild(dot);
  });

  const cards = track.querySelectorAll('.coverflow-card');
  const dots = dotsContainer.querySelectorAll('.coverflow-dot');

  function updateCoverflow() {
    const screenWidth = window.innerWidth;
    let spacingX = 240;
    let translateZFactor = -140;
    let rotateYDeg = 38;

    if (screenWidth <= 360) {
      spacingX = 75;
      translateZFactor = -45;
      rotateYDeg = 20;
    } else if (screenWidth <= 480) {
      spacingX = 100;
      translateZFactor = -65;
      rotateYDeg = 26;
    } else if (screenWidth <= 768) {
      spacingX = 160;
      translateZFactor = -95;
      rotateYDeg = 32;
    }

    cards.forEach((card, idx) => {
      const offset = idx - activeIndex;
      const absOffset = Math.abs(offset);

      // Hide distant cards completely on mobile/tablet to prevent 3D overflow and unnecessary rendering
      if ((screenWidth <= 640 && absOffset > 1) || (screenWidth <= 1024 && absOffset > 2)) {
        card.style.visibility = 'hidden';
        card.style.pointerEvents = 'none';
        card.style.opacity = '0';
      } else {
        card.style.visibility = 'visible';
        card.style.pointerEvents = 'auto';
      }

      if (offset === 0) {
        // Active Center Card
        card.style.transform = `translateX(0px) translateZ(0px) rotateY(0deg) scale(1)`;
        card.style.opacity = '1';
        card.style.filter = 'brightness(1) contrast(1)';
        card.style.zIndex = '15';
        card.classList.add('is-active');
      } else if (offset > 0) {
        // Cards to the Right
        const posX = offset * spacingX;
        const posZ = absOffset * translateZFactor;
        const rotY = -rotateYDeg;
        const scale = Math.max(0.65, 1 - absOffset * 0.12);
        const opacity = Math.max(0, 0.9 - absOffset * 0.28);
        const brightness = Math.max(0.35, 0.7 - absOffset * 0.15);

        card.style.transform = `translateX(${posX}px) translateZ(${posZ}px) rotateY(${rotY}deg) scale(${scale})`;
        if (card.style.visibility !== 'hidden') {
          card.style.opacity = opacity.toString();
        }
        card.style.filter = `brightness(${brightness}) contrast(0.95)`;
        card.style.zIndex = (15 - absOffset).toString();
        card.classList.remove('is-active');
      } else {
        // Cards to the Left
        const posX = offset * spacingX;
        const posZ = absOffset * translateZFactor;
        const rotY = rotateYDeg;
        const scale = Math.max(0.65, 1 - absOffset * 0.12);
        const opacity = Math.max(0, 0.9 - absOffset * 0.28);
        const brightness = Math.max(0.35, 0.7 - absOffset * 0.15);

        card.style.transform = `translateX(${posX}px) translateZ(${posZ}px) rotateY(${rotY}deg) scale(${scale})`;
        if (card.style.visibility !== 'hidden') {
          card.style.opacity = opacity.toString();
        }
        card.style.filter = `brightness(${brightness}) contrast(0.95)`;
        card.style.zIndex = (15 - absOffset).toString();
        card.classList.remove('is-active');
      }
    });

    // Update Dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === activeIndex);
    });
  }

  function goToIndex(idx) {
    if (idx < 0) idx = 0;
    if (idx >= chapters.length) idx = chapters.length - 1;
    activeIndex = idx;
    updateCoverflow();
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    const rect = stage.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowLeft') {
        goToIndex(activeIndex - 1);
      } else if (e.key === 'ArrowRight') {
        goToIndex(activeIndex + 1);
      }
    }
  });

  // Touch Swipe for Mobile & Tablet with Axis Distinction
  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) return;
    startX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchDeltaX = 0;
    touchDeltaY = 0;
    isHorizontalSwipe = false;
    hasDraggedSignificantly = false;
    isDragging = true;
  }, { passive: true });

  stage.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    touchDeltaX = e.touches[0].clientX - startX;
    touchDeltaY = e.touches[0].clientY - touchStartY;

    if (Math.abs(touchDeltaX) > 12) {
      hasDraggedSignificantly = true;
    }

    if (!isHorizontalSwipe && Math.abs(touchDeltaX) > 8 && Math.abs(touchDeltaX) > Math.abs(touchDeltaY)) {
      isHorizontalSwipe = true;
    }
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    if (isHorizontalSwipe && Math.abs(touchDeltaX) > 30) {
      if (touchDeltaX < 0) {
        goToIndex(activeIndex + 1);
      } else {
        goToIndex(activeIndex - 1);
      }
    }
    touchDeltaX = 0;
    touchDeltaY = 0;
    isHorizontalSwipe = false;
    setTimeout(() => { hasDraggedSignificantly = false; }, 100);
  });

  // Mouse Drag to Slide for Desktop
  stage.style.cursor = 'grab';
  stage.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
    mouseDeltaX = 0;
    hasDraggedSignificantly = false;
    stage.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    mouseDeltaX = e.clientX - startX;
    if (Math.abs(mouseDeltaX) > 12) {
      hasDraggedSignificantly = true;
    }
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    stage.style.cursor = 'grab';
    if (Math.abs(mouseDeltaX) > 35) {
      if (mouseDeltaX < 0) {
        goToIndex(activeIndex + 1);
      } else {
        goToIndex(activeIndex - 1);
      }
    }
    setTimeout(() => { 
      mouseDeltaX = 0; 
      hasDraggedSignificantly = false;
    }, 100);
  });

  // Trackpad / Horizontal Wheel Slide
  let wheelLock = false;
  stage.addEventListener('wheel', (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
    if (Math.abs(delta) > 20) {
      e.preventDefault();
      if (!wheelLock) {
        wheelLock = true;
        if (delta > 0) {
          goToIndex(activeIndex + 1);
        } else {
          goToIndex(activeIndex - 1);
        }
        setTimeout(() => { wheelLock = false; }, 320);
      }
    }
  }, { passive: false });

  window.addEventListener('resize', updateCoverflow);
  updateCoverflow();
}

/* ==========================================================================
   INTERACTIVE DECADAL ECONOMIC TIMELINE
   ========================================================================== */
function initDecadalTimeline() {
  const tabsContainer = document.getElementById('decade-selector-tabs');
  const displayBox = document.getElementById('decade-display-box');

  if (!tabsContainer || !displayBox || !window.DECADAL_ECONOMIC_DATA) return;

  const decades = window.DECADAL_ECONOMIC_DATA;
  let currentDecadeIndex = 1; // Default to 1840-1849 (Puncak Eksploitasi)

  // Render Tabs
  tabsContainer.innerHTML = '';
  decades.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.className = `decade-btn ${idx === currentDecadeIndex ? 'is-active' : ''}`;
    btn.textContent = item.decade;
    btn.addEventListener('click', () => {
      currentDecadeIndex = idx;
      tabsContainer.querySelectorAll('.decade-btn').forEach((b, i) => {
        b.classList.toggle('is-active', i === idx);
      });
      renderDecadeContent(idx);
    });
    tabsContainer.appendChild(btn);
  });

  function renderDecadeContent(idx) {
    const data = decades[idx];
    const batigPercent = Math.min(100, Math.round((data.batigSlotNum / 300) * 100));
    const burdenPercent = data.peasantBurdenIndex;

    displayBox.innerHTML = `
      <div class="decade-title-row">
        <div class="decade-title-left">
          <span class="editorial-kicker">ANALISIS HISTORIS PER DEKADE</span>
          <h3>${data.title}</h3>
        </div>
        <span class="decade-period-tag">${data.decade} · HINDIA BELANDA</span>
      </div>

      <div class="decade-metrics-grid">
        <div class="decade-metric-card reveal-on-scroll is-revealed" style="--i: 0;">
          <div class="metric-label">Surplus Belanda (Batig Slot)</div>
          <div class="metric-val highlight-gold">${data.stats.batigSlot}</div>
        </div>
        <div class="decade-metric-card reveal-on-scroll is-revealed" style="--i: 1;">
          <div class="metric-label">Beban Kerja Rodi Petani</div>
          <div class="metric-val highlight-red">${data.stats.laborDays}</div>
        </div>
        <div class="decade-metric-card reveal-on-scroll is-revealed" style="--i: 2;">
          <div class="metric-label">Lahan Sawah Disita</div>
          <div class="metric-val">${data.stats.landSeized}</div>
        </div>
        <div class="decade-metric-card reveal-on-scroll is-revealed" style="--i: 3;">
          <div class="metric-label">Status Ketahanan Pangan</div>
          <div class="metric-val" style="font-size: 1.2rem;">${data.stats.riceImpact}</div>
        </div>
      </div>

      <div class="decade-contrast-chart">
        <div class="chart-header-row">
          <h4>Visualisasi Kontras: Keuntungan Kas Kolonial vs Penderitaan Rakyat</h4>
          <div class="chart-legend">
            <div class="legend-item"><span class="legend-box gold"></span> Akumulasi Surplus Belanda</div>
            <div class="legend-item"><span class="legend-box red"></span> Indeks Beban &amp; Tekanan Petani</div>
          </div>
        </div>

        <div class="chart-bar-group">
          <div class="bar-label-row">
            <span>Surplus Kas Kerajaan Belanda (Gulden)</span>
            <span class="font-mono">${data.stats.batigSlot} (${batigPercent}%)</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill gold" style="width: ${batigPercent}%;"></div>
          </div>
        </div>

        <div class="chart-bar-group">
          <div class="bar-label-row">
            <span>Tingkat Tekanan Kerja, Penyitaan Lahan &amp; Defisit Beras</span>
            <span class="font-mono">${burdenPercent}/100 Poin Tekanan</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill red" style="width: ${burdenPercent}%;"></div>
          </div>
        </div>
      </div>

      <div class="decade-narrative-split">
        <div class="decade-summary-text">
          <p>${data.summary}</p>
          <p style="margin-top: 0.75rem; color: var(--text-secondary);">${data.details}</p>
        </div>
        <div class="decade-major-event-box">
          <span class="event-label">Peristiwa Kunci Dekade Ini</span>
          <p class="event-text">${data.majorEvent}</p>
        </div>
      </div>
    `;
  }

  renderDecadeContent(currentDecadeIndex);
}

/* ==========================================================================
   HISTORICAL FIGURES GALLERY
   ========================================================================== */
function initHistoricalFigures() {
  const container = document.getElementById('historical-figures-container');
  if (!container || !window.HISTORICAL_FIGURES_DATA) return;

  const figures = window.HISTORICAL_FIGURES_DATA;
  container.innerHTML = '';

  figures.forEach((fig, idx) => {
    const card = document.createElement('div');
    card.className = 'figure-card reveal-on-scroll';
    card.style.setProperty('--i', (idx % 4).toString());

    card.innerHTML = `
      <div class="figure-card-img-wrap">
        <img class="figure-card-img" src="${fig.image}" alt="${fig.name}" loading="lazy" />
      </div>
      <div class="figure-card-content">
        <span class="figure-stance-badge">${fig.stance}</span>
        <h3 class="figure-name">${fig.name}</h3>
        <span class="figure-years">${fig.years}</span>
        <div class="figure-role">${fig.role}</div>
        <p class="figure-bio">${fig.bio}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ==========================================================================
   INTERACTIVE ARCHIVAL WAX & INK STAMPS
   ========================================================================== */
function initArchivalStamps() {
  const stamps = document.querySelectorAll('.archival-seal-stamp');
  stamps.forEach(stamp => {
    stamp.setAttribute('tabindex', '0');
    stamp.setAttribute('role', 'button');
    stamp.setAttribute('aria-label', 'Stempel Terverifikasi Arsip Nasional Republik Indonesia 1834');

    stamp.addEventListener('click', () => {
      // Audio-visual feedback
      stamp.style.transform = 'scale(0.95) rotate(-5deg)';
      setTimeout(() => {
        stamp.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
          stamp.style.transform = '';
        }, 300);
      }, 150);
    });
  });
}

/* ==========================================================================
   SCROLL EFFECTS
   ========================================================================== */
function initScrollEffects() {
  const masthead = document.querySelector('.archival-masthead');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (masthead) {
      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        masthead.style.transform = 'translateY(-100%)';
      } else {
        masthead.style.transform = 'translateY(0)';
      }
    }
    lastScrollY = currentScrollY;
  }, { passive: true });
}

/* ==========================================================================
   SCROLL REVEAL LAZY ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  // 1. Tag key editorial blocks for scroll-reveal
  const revealSelectors = [
    '.intro-text-column > .editorial-kicker',
    '.intro-text-column > .intro-heading',
    '.intro-text-column > .intro-prose',
    '.intro-text-column > .vintage-quote-plate',
    '.intro-visual-column',
    '.coverflow-header-wrapper',
    '.coverflow-controls-row',
    '.timeline-header-block',
    '.decade-selector-tabs',
    '.decade-display-box',
    '.section-special-components .archive-container > div:first-child',
    '.flowchart-editorial-container',
    '.figures-grid'
  ];

  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('reveal-on-scroll');
    });
  });

  // 2. Assign staggered delays to child items in collections
  const staggerGroups = [
    { container: '.intro-points-grid', items: '.intro-point-item' },
    { container: '.flowchart-editorial-container', items: '.flow-step-card' },
    { container: '.figures-grid', items: '.figure-card' }
  ];

  staggerGroups.forEach(grp => {
    const parent = document.querySelector(grp.container);
    if (parent) {
      const items = parent.querySelectorAll(grp.items);
      items.forEach((item, idx) => {
        item.classList.add('reveal-on-scroll');
        item.style.setProperty('--i', (idx % 6).toString());
      });
    }
  });

  // 3. Create observer with smooth threshold and bottom margin
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}
