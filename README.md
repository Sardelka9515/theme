# Theme Guide - Design System

A beautiful, performance-optimized design system and theme guide showcasing unified styling, component patterns, and performance-first animations.

## 🎨 Features

### Design System
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

## 📱 Responsive Design

The theme guide is fully responsive with breakpoints optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

## ♿ Accessibility

- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Color Contrast**: WCAG AA compliant color combinations

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

### Changing Theme Colors
Edit the CSS variables in `styles.css`:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
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
├── index.html      # Main HTML structure
├── styles.css      # Complete design system and styles
├── script.js       # Interactive features
└── README.md       # This file
```

## 🌟 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 License

Free to use for personal and commercial projects.

## 🚀 Future Enhancements

Potential additions:
- Dark mode support
- More component variants
- Icon system integration
- Grid system utilities
- Animation duration controls
- Dynamic theme switching

---

**Note**: This theme guide prioritizes performance and clean design. All animations are optimized for 60fps and respect user preferences for reduced motion.
