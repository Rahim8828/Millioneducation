/* =========================================
   MILLION EDUCATION — JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile Menu Toggle ----
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ---- Navbar Scroll Shadow ----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
      }
    });
  }

  // ---- FAQ Accordion ----
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');

        // Close all
        faqItems.forEach(function (i) {
          i.classList.remove('open');
          const q = i.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        });

        // Open clicked if it was closed
        if (!isOpen) {
          item.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ---- Scroll Animations ----
  const animateEls = document.querySelectorAll('[data-animate]');

  function checkVisible() {
    animateEls.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  checkVisible();
  window.addEventListener('scroll', checkVisible, { passive: true });

  // ---- Tag Selection (Hero) ----
  const tags = document.querySelectorAll('.tag');
  tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      // Only toggle within same group
      const parent = tag.closest('.hero-tags');
      if (parent) {
        parent.querySelectorAll('.tag').forEach(function (t) { t.classList.remove('active'); });
      }
      tag.classList.add('active');
    });
  });

  // ---- Tutor Form Submission ----
  const tutorForm = document.getElementById('tutor-form');
  const submitBtn = document.getElementById('submit-btn');

  if (tutorForm && submitBtn) {
    tutorForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullName = document.getElementById('full-name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const city = document.getElementById('city').value.trim();
      const location = document.getElementById('location').value;
      const qualification = document.getElementById('qualification').value;
      const fees = document.getElementById('fees').value;

      if (!fullName || !phone || !city || !location || !qualification || !fees) {
        showToast('Please fill all required fields!', 'error');
        return;
      }

      if (!/^[6-9]\d{9}$/.test(phone.replace(/\s|\+91/g, ''))) {
        showToast('Please enter a valid 10-digit phone number!', 'error');
        return;
      }

      // Simulate submission
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      setTimeout(function () {
        submitBtn.textContent = '✅ Application Submitted!';
        submitBtn.style.background = '#22c55e';
        tutorForm.reset();
        showToast('🎉 Welcome to Million Education! Our team will call you within 24 hours.', 'success');
        setTimeout(function () {
          submitBtn.textContent = 'Join as a Tutor 🚀';
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 4000);
      }, 1500);
    });
  }

  // ---- Smooth Scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Counter Animation ----
  function animateCounter(el, target, suffix) {
    const duration = 2000;
    const start = performance.now();
    const startVal = 0;

    function update(timestamp) {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + (target - startVal) * eased);
      el.textContent = current.toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // Trigger counters when stats bar enters viewport
  const statsBar = document.querySelector('.stats-bar');
  let countersAnimated = false;

  if (statsBar) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          const statNums = statsBar.querySelectorAll('.stat-num');
          statNums.forEach(function (el) {
            const text = el.textContent.trim();
            const match = text.match(/^([\d,]+)/);
            if (match) {
              const num = parseInt(match[1].replace(/,/g, ''));
              const suffix = text.replace(match[1], '');
              el.textContent = '0' + suffix;
              animateCounter(el, num, suffix);
            }
          });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsBar);
  }
});

// ---- Toast Notification ----
function showToast(message, type = 'success') {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '28px',
    right: '28px',
    zIndex: '9999',
    padding: '14px 24px',
    borderRadius: '12px',
    background: type === 'success' ? '#22c55e' : '#ef4444',
    color: '#fff',
    fontWeight: '600',
    fontSize: '.95rem',
    boxShadow: '0 8px 24px rgba(0,0,0,.2)',
    maxWidth: '380px',
    lineHeight: '1.5',
    transition: 'all .3s ease',
    opacity: '0',
    transform: 'translateY(20px)',
    fontFamily: "'Inter', sans-serif"
  });

  document.body.appendChild(toast);

  requestAnimationFrame(function () {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  setTimeout(function () {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(function () { toast.remove(); }, 300);
  }, 4000);
}

// ---- Course Tab & View Switching ----
function switchCourseTab(cls) {
  const tab11 = document.getElementById('tab-class11');
  const tab12 = document.getElementById('tab-class12');
  const banner = document.getElementById('course-banner');

  if (cls === 'class11') {
    if (tab11) tab11.classList.add('active');
    if (tab12) tab12.classList.remove('active');
    if (banner) {
      banner.innerHTML = '<h3>📘 CLASS 11 — Physics, Chemistry & Mathematics</h3><p>Uniform structured tenure modules for Class 11th Science board & foundational preparation. Core concepts, problem solving, and chapter tests.</p>';
    }
  } else {
    if (tab12) tab12.classList.add('active');
    if (tab11) tab11.classList.remove('active');
    if (banner) {
      banner.innerHTML = '<h3>📗 CLASS 12 — Physics, Chemistry & Biology</h3><p>Board-focused excellence curriculum designed for maximum board scoring. (Same subject structure — Board-focused academic rigor).</p>';
    }
  }
}

function toggleCourseView(mode) {
  const cardsView = document.getElementById('course-cards-view');
  const tableView = document.getElementById('course-table-view');
  const cardsBtn = document.getElementById('view-cards-btn');
  const tableBtn = document.getElementById('view-table-btn');

  if (mode === 'cards') {
    if (cardsView) cardsView.style.display = 'grid';
    if (tableView) tableView.style.display = 'none';
    if (cardsBtn) cardsBtn.classList.add('active');
    if (tableBtn) tableBtn.classList.remove('active');
  } else {
    if (cardsView) cardsView.style.display = 'none';
    if (tableView) tableView.style.display = 'block';
    if (tableBtn) tableBtn.classList.add('active');
    if (cardsBtn) cardsBtn.classList.remove('active');
  }
}

