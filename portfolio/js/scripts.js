// Placeholder for custom JS

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! (Form handling to be implemented)');
      form.reset();
    });
  }
  if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
      strings: [
        'Aspiring Data Professional'
      ],
      typeSpeed: 90,
      backSpeed: 40,
      backDelay: 1200,
      startDelay: 1000,
      loop: false
    });
  }

  // Handle navbar transparency
  const navbar = document.querySelector('.navbar');
  const handleNavbarTransparency = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarTransparency);
  handleNavbarTransparency(); // Initial check

  setupCopyLinkButtons();
  setupProjectsSectionFadeIn();

  // Instantly reveal Projects section on navbar click
  document.querySelectorAll('a.nav-link[href="#projects"]').forEach(link => {
    link.addEventListener('click', function() {
      const section = document.querySelector('.projects-section');
      if (section && !section.classList.contains('visible')) {
        section.classList.add('visible');
      }
    });
  });

  // Resume download feedback
  const downloadBtn = document.querySelector('.resume-download-btn');
  const feedback = document.querySelector('.download-feedback');
  if (downloadBtn && feedback) {
    downloadBtn.addEventListener('click', function () {
      feedback.classList.add('active');
      feedback.style.display = 'block';
      setTimeout(() => {
        feedback.classList.remove('active');
        feedback.style.display = 'none';
      }, 1200);
    });
  }

  // Copy email button logic
  const copyEmailBtn = document.querySelector('.btn-copy-email');
  const copyEmailTooltip = document.querySelector('.copy-email-tooltip');
  if (copyEmailBtn && copyEmailTooltip) {
    copyEmailBtn.addEventListener('click', function () {
      const email = copyEmailBtn.getAttribute('data-email');
      if (email) {
        navigator.clipboard.writeText(email);
        copyEmailTooltip.classList.add('active');
        copyEmailTooltip.style.display = 'block';
        setTimeout(() => {
          copyEmailTooltip.classList.remove('active');
          copyEmailTooltip.style.display = 'none';
        }, 1200);
      }
    });
  }

  // Enable Bootstrap tooltips for social links
  if (window.bootstrap && window.bootstrap.Tooltip) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
      new bootstrap.Tooltip(el);
    });
  }
});

// Greeting based on time
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}
const greetingSpan = document.getElementById('dynamic-greeting');
if (greetingSpan) greetingSpan.textContent = getGreeting();

// Smooth scroll for animated arrow
const scrollArrow = document.querySelector('.scroll-down-arrow');
if (scrollArrow) {
  scrollArrow.addEventListener('click', function () {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  scrollArrow.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
}

// Animate logo on load
window.addEventListener('DOMContentLoaded', function () {
  const logo = document.querySelector('.logo-animated');
  if (logo) {
    logo.style.opacity = 0;
    logo.style.transform = 'translateX(-40px)';
    setTimeout(() => {
      logo.style.transition = 'opacity 1.2s, transform 1.2s';
      logo.style.opacity = 1;
      logo.style.transform = 'translateX(0)';
    }, 200);
  }
});

// Scrollspy functionality
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
}

// Add scroll event listener for scrollspy
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// Add smooth scrolling to nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// About section animations
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate about card
        if (entry.target.classList.contains('about-card')) {
          entry.target.classList.add('visible');
          
          // Animate skill badges with delay
          const badges = entry.target.querySelectorAll('.skill-badge');
          badges.forEach((badge, index) => {
            setTimeout(() => {
              badge.classList.add('visible');
            }, 100 * (index + 1));
          });

          // Animate stat items with delay
          const stats = entry.target.querySelectorAll('.stat-item');
          stats.forEach((stat, index) => {
            setTimeout(() => {
              stat.classList.add('visible');
            }, 200 * (index + 1));
          });
        }
      }
    });
  }, observerOptions);

  // Observe about card
  const aboutCard = document.querySelector('.about-card');
  if (aboutCard) {
    observer.observe(aboutCard);
  }
});

// Education timeline animations
document.addEventListener('DOMContentLoaded', function() {
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
  });
});

// Project card animations
document.addEventListener('DOMContentLoaded', function() {
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add delay based on card index for staggered animation
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200);
      }
    });
  }, {
    threshold: 0.2
  });

  // Observe project cards
  document.querySelectorAll('.project-card').forEach(card => {
    projectObserver.observe(card);
  });
});

// Project Modals Logic

document.addEventListener('DOMContentLoaded', function () {
  // Open modal on card click
  document.querySelectorAll('.project-modal-trigger').forEach(card => {
    card.addEventListener('click', function (e) {
      // Prevent modal if clicking a link inside the card
      if (e.target.closest('a')) return;
      const project = card.getAttribute('data-project');
      const modal = document.getElementById('modal-' + project);
      if (modal) {
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
        // Focus first focusable element in modal for accessibility
        setTimeout(() => {
          const focusable = modal.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
          if (focusable) focusable.focus();
        }, 300);
      }
    });
    // Keyboard accessibility: open modal on Enter/Space
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Close modal on Esc key (for all modals)
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        const closeBtn = modal.querySelector('.btn-close');
        if (closeBtn) closeBtn.click();
      }
    });
  });
});

// Copy Link Button Logic
function setupCopyLinkButtons() {
  document.querySelectorAll('.btn-copy-link').forEach(btn => {
    btn.addEventListener('click', function () {
      const link = btn.getAttribute('data-link');
      if (link) {
        navigator.clipboard.writeText(link);
        // Show tooltip
        const tooltip = btn.nextElementSibling;
        if (tooltip && tooltip.classList.contains('copy-tooltip')) {
          tooltip.classList.add('active');
          setTimeout(() => {
            tooltip.classList.remove('active');
          }, 1200);
        }
      }
    });
  });
}

// Fade-in/Slide-in Projects Section
function setupProjectsSectionFadeIn() {
  const section = document.querySelector('.projects-section');
  if (!section) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add('visible');
        observer.disconnect();
      }
    });
  }, { threshold: 0.01 });
  observer.observe(section);
}

// Animate skill bars in Skills section
function animateSkillBars() {
  const section = document.querySelector('.skills-section');
  if (!section) return;
  const bars = section.querySelectorAll('.skill-bar-fill');
  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.transition = 'width 1.2s cubic-bezier(0.23, 1, 0.32, 1)';
      bar.style.width = width;
    }, 100);
  });
}

function setupSkillsSectionAnimation() {
  const section = document.querySelector('.skills-section');
  if (!section) return;
  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animateSkillBars();
        animated = true;
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });
  observer.observe(section);
}

document.addEventListener('DOMContentLoaded', setupSkillsSectionAnimation); 