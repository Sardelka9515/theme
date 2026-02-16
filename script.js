// Theme Guide Interactive Features
// Performance-optimized JavaScript

(function() {
  'use strict';

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  const initMobileMenu = () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const body = document.body;
    
    if (!navToggle) return;
    
    const closeMenu = () => {
      navMenu.classList.remove('active');
      body.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    };
    
    const openMenu = () => {
      navMenu.classList.add('active');
      body.classList.add('menu-open');
      navToggle.setAttribute('aria-expanded', 'true');
    };
    
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
    
    // Close menu when clicking overlay
    body.addEventListener('click', (e) => {
      if (body.classList.contains('menu-open') && 
          !navMenu.contains(e.target) && 
          !navToggle.contains(e.target)) {
        closeMenu();
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && body.classList.contains('menu-open')) {
        closeMenu();
      }
    });
  };

  // ============================================
  // SMOOTH SCROLL HANDLING
  // ============================================
  const initSmoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const navHeight = document.querySelector('.nav').offsetHeight;
          const targetPosition = targetSection.offsetTop - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update active link
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });
  };

  // ============================================
  // INTERSECTION OBSERVER FOR ANIMATIONS
  // ============================================
  const initScrollAnimations = () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe sections that should animate on scroll
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });
  };

  // ============================================
  // COPY COLOR VALUES TO CLIPBOARD
  // ============================================
  const initColorCopy = () => {
    const colorCards = document.querySelectorAll('.color-card');
    
    colorCards.forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        const colorValue = card.querySelector('.color-card__value').textContent;
        
        // Copy to clipboard
        navigator.clipboard.writeText(colorValue).then(() => {
          // Show feedback
          showToast(`Copied ${colorValue} to clipboard!`);
        }).catch(err => {
          console.error('Failed to copy:', err);
        });
      });
    });
  };

  // ============================================
  // TOAST NOTIFICATION
  // ============================================
  const showToast = (message) => {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
      existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Add styles
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      background: '#1f2937',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      zIndex: '9999',
      opacity: '0',
      transform: 'translateY(20px)',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      fontSize: '14px',
      fontWeight: '500'
    });

    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  // ============================================
  // ANIMATION DEMO RESTART ON CLICK
  // ============================================
  const initAnimationDemos = () => {
    const animationBoxes = document.querySelectorAll('.animation-box');
    
    animationBoxes.forEach(box => {
      box.addEventListener('click', function() {
        // Remove and re-add animation class to restart
        const parent = this.parentElement;
        const clone = this.cloneNode(true);
        parent.replaceChild(clone, this);
        
        // Re-attach event listener to the new element
        clone.addEventListener('click', arguments.callee);
        
        // Add click feedback
        clone.style.transform = 'scale(0.95)';
        setTimeout(() => {
          clone.style.transform = '';
        }, 100);
      });
    });
  };

  // ============================================
  // ACTIVE NAV ON SCROLL
  // ============================================
  const initActiveNavOnScroll = () => {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -66% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  };

  // ============================================
  // BUTTON RIPPLE EFFECT
  // ============================================
  const initButtonRipple = () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          left: ${x}px;
          top: ${y}px;
          transform: translate(-50%, -50%) scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
    
    // Add ripple animation to document
    if (!document.querySelector('#ripple-animation')) {
      const style = document.createElement('style');
      style.id = 'ripple-animation';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: translate(-50%, -50%) scale(15);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };

  // ============================================
  // PERFORMANCE MONITORING
  // ============================================
  const monitorPerformance = () => {
    // Log page load performance
    window.addEventListener('load', () => {
      if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log(`%c⚡ Page Load Time: ${pageLoadTime}ms`, 'color: #10b981; font-weight: bold;');
        
        // Log to console if load time is slow
        if (pageLoadTime > 3000) {
          console.warn('Page load time is slower than expected');
        }
      }
    });
  };

  // ============================================
  // INITIALIZE ALL FEATURES
  // ============================================
  const init = () => {
    // Use requestIdleCallback for non-critical initializations
    const initWhenIdle = (callback) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback);
      } else {
        setTimeout(callback, 1);
      }
    };

    // Critical features - initialize immediately
    initMobileMenu();
    initSmoothScroll();
    
    // Non-critical features - initialize when browser is idle
    initWhenIdle(() => {
      initScrollAnimations();
      initColorCopy();
      initAnimationDemos();
      initActiveNavOnScroll();
      initButtonRipple();
      monitorPerformance();
    });
  };

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
