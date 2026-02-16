# Theme Guide - Design System

A beautiful, performance-optimized design system and theme guide showcasing unified styling, component patterns, and performance-first animations.

## 🎨 Features

### Design System
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Color Palette**: Carefully crafted primary, secondary, accent, status, and neutral colors
- **Typography**: Complete type scale from 12px to 72px with optimized line heights
- **Spacing System**: Consistent 8px-based grid system
- **Components**: Buttons, cards, forms, badges, and more
- **Animations**: Smooth, GPU-accelerated animations with reduced motion support

### Performance Optimizations
- **CSS Transforms**: All animations use `transform` and `opacity` for GPU acceleration
- **Will-Change**: Strategic use of `will-change` for optimal rendering performance
- **CSS Containment**: Sections use containment for better paint performance
- **Lazy Initialization**: Non-critical JavaScript features initialize during browser idle time
- **Reduced Motion**: Respects `prefers-reduced-motion` for accessibility
- **Efficient Selectors**: Optimized CSS selectors to minimize reflow/repaint

### Interactive Features
- **Dark Mode Toggle**: One-click theme switching with preference persistence
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Copy to Clipboard**: Click any color card to copy the hex value
- **Animation Demos**: Click animation boxes to restart animations
- **Active Navigation**: Navigation highlights current section on scroll
- **Button Ripples**: Material Design-inspired ripple effects on buttons
- **Scroll Animations**: Sections fade and slide in as you scroll

## 🚀 Usage

### Quick Start
Simply open `index.html` in your browser:
```bash
# On Windows
start index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Incorporating This Theme Into Your Project

You can easily use this design system in your own projects:

#### Option 1: Link to Hosted CSS (CDN)
Add this to your HTML `<head>`:
```html
<link rel="stylesheet" href="https://theme.sardelka.cc/styles.css">
```

#### Option 2: Download and Include Locally
1. Download `styles.css` from this repository
2. Add it to your project folder
3. Link it in your HTML:
```html
<link rel="stylesheet" href="path/to/styles.css">
```

#### Option 3: Copy Variables Only
If you only want the design tokens (colors, spacing, typography), copy the `:root` section from `styles.css` (lines 1-104) into your own CSS file.

#### Including JavaScript (Optional but Recommended)
For interactive features like dark mode toggle, mobile navigation, and enhanced UX:

**Option 1: Link to Hosted Script**
```html
<script src="https://theme.sardelka.cc/script.js"></script>
```

**Option 2: Download Locally**
```html
<script src="path/to/script.js"></script>
```

**What the JavaScript Provides:**
- 🌙 Dark mode toggle with localStorage persistence
- 📱 Mobile hamburger menu functionality
- 🎯 Smooth scroll navigation
- 📋 Click-to-copy color values
- ✨ Animation restart on click
- 🔄 Active navigation highlighting
- 💫 Button ripple effects
- 📊 Performance monitoring

**Note:** The CSS works standalone, but JavaScript adds interactivity. If you don't include the script:
- Dark mode toggle button won't function (but you can implement your own)
- Mobile menu toggle won't work (you'll need custom JavaScript)
- Other animations and interactions will be static

#### Getting Started with Components
Once the stylesheet is included, you can use any component:

```html
<!-- Container for centered content -->
<div class="container">
  <!-- Section with padding -->
  <section class="section">
    <h2 class="section__title">Your Title</h2>
    <p class="section__description">Your description</p>
    
    <!-- Card component -->
    <div class="card">
      <div class="card__header">
        <h4 class="card__title">Card Title</h4>
      </div>
      <div class="card__body">
        <p>Your content here</p>
      </div>
      <div class="card__footer">
        <button class="btn btn--primary">Action</button>
      </div>
    </div>
  </section>
</div>
```

**Important Notes:**
- The theme includes responsive navigation (`nav`, `nav__menu`, etc.)
- Dark mode requires the JavaScript file (`script.js`) for the toggle functionality
- All animations respect `prefers-reduced-motion` automatically
- Components are mobile-responsive by default

#### Manual Dark Mode Implementation (Without script.js)
If you want to implement dark mode without using the provided JavaScript:

```javascript
// Simple dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Check saved preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Toggle on click
themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const newTheme = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
```

#### Manual Mobile Menu (Without script.js)
```javascript
// Simple mobile menu toggle
const menuToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const body = document.body;

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isOpen);
  navMenu.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Close on link click
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
```

### Using the Design System

#### CSS Variables
The design system uses CSS custom properties for easy theming:

```css
/* Access colors */
background: var(--color-primary);
color: var(--color-text);

/* Use spacing */
padding: var(--space-lg);
margin: var(--space-xl);

/* Apply typography */
font-size: var(--font-size-large);
font-weight: var(--font-weight-semibold);
```

#### Button Components
```html
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--outline">Outline</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary btn--lg">Large</button>
```

#### Card Components
```html
<div class="card">
  <div class="card__header">
    <h4 class="card__title">Card Title</h4>
  </div>
  <div class="card__body">
    <p>Card content goes here...</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--sm btn--primary">Action</button>
  </div>
</div>
```

#### Form Elements
```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-input" placeholder="you@example.com">
</div>
```

#### Badges
```html
<span class="badge badge--primary">Primary</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--outline">Outline</span>
```

## 🎯 Performance Metrics

### Optimization Strategies
1. **GPU Acceleration**: Animations use `transform` and `opacity` only
2. **Containment**: Layout containment reduces rendering work
3. **Idle Callbacks**: Non-critical features load during browser idle time
4. **Efficient Selectors**: No deep nesting or expensive selectors
5. **Minimal Reflows**: Animations don't trigger layout recalculations

### Best Practices
- Animations are kept under 300ms for responsiveness
- No synchronous layout reads (`getBoundingClientRect`, etc.) in hot paths
- Event listeners use passive where appropriate
- Minimal DOM manipulation
- Debounced scroll handlers

### JavaScript Customization

The `script.js` file is modular and follows best practices:

**Performance Features:**
- Uses `requestIdleCallback` for non-critical initializations
- Implements event delegation where possible
- Respects `prefers-reduced-motion` user preference
- Monitors page load performance in console

**Customizing Behavior:**
You can modify the script to disable certain features by commenting out initializations in the `init()` function:

```javascript
const init = () => {
  // Critical features
  initThemeToggle();      // Dark mode toggle
  initMobileMenu();       // Mobile navigation
  initSmoothScroll();     // Smooth scrolling
  
  // Non-critical features (loaded when idle)
  initWhenIdle(() => {
    initScrollAnimations();   // Scroll-triggered animations
    initColorCopy();          // Click-to-copy colors
    initAnimationDemos();     // Restart animations on click
    initActiveNavOnScroll();  // Active nav highlighting
    initButtonRipple();       // Button ripple effects
    // monitorPerformance();  // Comment out to disable console logs
  });
};
```

**Custom Events:**
The script doesn't emit custom events, but you can extend it:

```javascript
// Add after theme toggle in script.js
document.dispatchEvent(new CustomEvent('themeChanged', { 
  detail: { theme: newTheme } 
}));

// Listen in your own code
document.addEventListener('themeChanged', (e) => {
  console.log('Theme changed to:', e.detail.theme);
  // Your custom logic here
});
```

## 📱 Responsive Design

The theme guide is fully responsive with breakpoints optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

## ♿ Accessibility

- **Dark Mode**: Reduces eye strain in low-light environments
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Color Contrast**: WCAG AA compliant color combinations in both themes
- **ARIA Labels**: Proper labeling for screen readers

## 🎨 Color Palette

### Primary Colors
- **Primary**: `#6366f1` - Main brand color
- **Secondary**: `#8b5cf6` - Supporting color
- **Accent**: `#ec4899` - Highlight color

### Status Colors
- **Success**: `#10b981`
- **Warning**: `#f59e0b`
- **Danger**: `#ef4444`

### Neutral Scale
10 shades from 50 (lightest) to 900 (darkest)

## 📐 Typography Scale

- **Display 1**: 72px - Hero headlines
- **Display 2**: 60px - Large headlines
- **H1**: 48px - Main headings
- **H2**: 36px - Section headings
- **H3**: 30px - Subsection headings
- **H4**: 24px - Component titles
- **H5**: 20px - Small headings
- **H6**: 16px - Smallest headings
- **Body**: 16px - Standard text
- **Small**: 14px - Secondary text
- **Tiny**: 12px - Metadata

## 🔧 Customization

### Dark Mode
The theme automatically detects and saves user preference:
- Click the sun/moon icon in the navigation to toggle
- Preference is saved to localStorage
- All colors automatically adjust for optimal dark mode experience

### Changing Theme Colors
Edit the CSS variables in `styles.css`:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... */
}

[data-theme="dark"] {
  --color-primary: #your-dark-color;
  /* ... */
}
```

### Adding Custom Components
Follow the BEM naming convention:
```css
.component { }
.component__element { }
.component--modifier { }
```

## 📄 Files Structure

```
theme/
├── index.html      # Main HTML structure with semantic markup
├── styles.css      # Complete design system and styles (~1300 lines)
│                   # Includes: variables, components, animations, responsive design
├── script.js       # Interactive features (~350 lines)
│                   # Includes: dark mode, mobile menu, scroll effects, copy-to-clipboard
└── README.md       # Complete documentation
```

**What Each File Provides:**

**index.html:**
- Semantic HTML5 structure
- Navigation with theme toggle and mobile menu
- Hero section with gradient background
- Color palette showcase
- Typography examples
- Spacing system visualization
- Component library (buttons, cards, forms, badges)
- Animation demonstrations
- Accessible markup with ARIA labels

**styles.css:**
- CSS custom properties (design tokens)
- Dark mode theme definitions
- Typography system
- Layout utilities (container, sections, grid)
- Component styles (buttons, cards, forms, badges)
- Responsive breakpoints (480px, 768px, 1024px, 1440px)
- Performance optimizations (GPU acceleration, containment)
- Accessibility features (reduced motion)

**script.js:**
- `initThemeToggle()` - Dark/light mode switching
- `initMobileMenu()` - Hamburger menu functionality
- `initSmoothScroll()` - Smooth section navigation
- `initScrollAnimations()` - Fade/slide on scroll
- `initColorCopy()` - Click colors to copy hex values
- `initAnimationDemos()` - Restart animations on click
- `initActiveNavOnScroll()` - Highlight current section
- `initButtonRipple()` - Material Design ripples
- `monitorPerformance()` - Log page load metrics

## 🌟 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

**JavaScript Requirements:**
- No dependencies - Pure vanilla JavaScript
- Uses modern ES6+ features (arrow functions, const/let, template literals)
- Polyfills not required for modern browsers
- Graceful degradation if JavaScript is disabled (CSS-only fallback)

**APIs Used:**
- `localStorage` for theme persistence
- `IntersectionObserver` for scroll animations
- `Clipboard API` for copy functionality
- `requestIdleCallback` for performance optimization (with fallback)
- `matchMedia` for reduced-motion detection

## 🔧 Troubleshooting

### JavaScript Not Working?

**Dark Mode Toggle Not Responding:**
```javascript
// Check if script is loaded
console.log('Script loaded:', typeof initThemeToggle !== 'undefined');

// Check if button exists
console.log('Toggle button:', document.querySelector('.theme-toggle'));

// Manually test dark mode
document.documentElement.setAttribute('data-theme', 'dark');
```

**Mobile Menu Not Opening:**
```javascript
// Check elements exist
console.log('Toggle:', document.querySelector('.nav__toggle'));
console.log('Menu:', document.querySelector('.nav__menu'));

// Manually test
document.querySelector('.nav__menu').classList.add('active');
```

**Console Errors:**
- Ensure script.js is loaded after the DOM elements
- Place `<script src="script.js"></script>` before closing `</body>` tag
- Check browser console (F12) for specific error messages

**Features Not Working in Older Browsers:**
- Check if browser supports required APIs (see Browser Support section)
- Some features like IntersectionObserver may need polyfills for IE11
- Consider using feature detection and fallbacks

## 📝 License

Free to use for personal and commercial projects.

## 🚀 Future Enhancements

Potential additions:
- System preference detection (auto dark mode)
- More component variants
- Icon system integration
- Grid system utilities
- Animation duration controls
- Custom theme builder
- Export design tokens

---

**Note**: This theme guide prioritizes performance and clean design. All animations are optimized for 60fps and respect user preferences for reduced motion.
