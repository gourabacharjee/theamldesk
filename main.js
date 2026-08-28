/* ============================================================
   THE AML DESK — Main JavaScript
   Navigation, scroll animations, and shared functionality
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // -----------------------------------------------
  // 1. Mobile Navigation
  // -----------------------------------------------
  const toggle = document.querySelector('.navbar__toggle');
  const navLinks = document.querySelector('.navbar__links');
  const overlay = document.querySelector('.navbar__overlay');

  function openMenu() {
    toggle?.classList.add('active');
    navLinks?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle?.classList.remove('active');
    navLinks?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggle?.addEventListener('click', () => {
    if (navLinks?.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay?.addEventListener('click', closeMenu);

  // Close menu on link click (mobile)
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        closeMenu();
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });


  // -----------------------------------------------
  // 2. Navbar Scroll Effect
  // -----------------------------------------------
  const navbar = document.querySelector('.navbar');
  let lastScrollY = 0;

  function handleNavbarScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Run on load


  // -----------------------------------------------
  // 3. Active Navigation State
  // -----------------------------------------------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a, .navbar__dropdown-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });


  // -----------------------------------------------
  // 4. Scroll-Reveal Animations
  // -----------------------------------------------
  const revealElements = document.querySelectorAll('.reveal, .stagger');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }


  // -----------------------------------------------
  // 5. Smooth Scroll for Anchor Links
  // -----------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // -----------------------------------------------
  // 6. Animated Counters
  // -----------------------------------------------
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  function animateCounter(el) {
    const target = el.getAttribute('data-count');
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();

    // Parse target: could be "800B", "2T", "200+", etc.
    const numericPart = parseFloat(target.replace(/[^0-9.]/g, ''));
    const textPart = target.replace(/[0-9.]/g, '');

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(numericPart * eased);

      el.textContent = prefix + current + textPart + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(update);
  }


  // -----------------------------------------------
  // 7. Tabs Component
  // -----------------------------------------------
  document.querySelectorAll('.tabs').forEach(tabsContainer => {
    const buttons = tabsContainer.querySelectorAll('.tabs__btn');
    const panels = tabsContainer.querySelectorAll('.tabs__panel');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');

        // Deactivate all
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        // Activate clicked
        btn.classList.add('active');
        const targetPanel = tabsContainer.querySelector(`[data-tab-panel="${target}"]`);
        targetPanel?.classList.add('active');
      });
    });
  });


  // -----------------------------------------------
  // 8. Back to Top (if element exists)
  // -----------------------------------------------
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
