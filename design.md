# Design System & Advanced UI/UX Guidelines

1. **Brand Identity (Maskavia Sdn Bhd):** Premium, Corporate, Trustworthy, and High-Tech.
2. **Color Palette:** 
   - **Base:** Deep Corporate Navy Blue (`#1E3A8A`).
   - **Backgrounds:** Crisp White and Light Gray (`#F3F4F6`).
   - **Accent:** High-tech Accent color (Cyan, Teal, or Electric Blue) for subtle icon highlights and borders.
3. **Layout Architecture:**
   - High-end B2B look with ample whitespace and clean geometric sections.
   - **Grid:** Use a modern 'Bento Box' grid layout for the 'Our Enterprise Solutions' and 'Legacy' sections.
4. **Hero Section:**
   - Implement a subtle modern mesh gradient background.
   - Add a soft glow and drop-shadow to the primary CTA button to make it highly clickable.
5. **Card Styling:**
   - Apply subtle glassmorphism (`backdrop-blur`).
   - 1px solid border with 10% opacity (e.g., `border-white/10` or `border-blue-900/10`).
   - Smooth lift/scale effect on hover.
6. **Social Proof (Marquee):**
   - Use a smooth, infinite scrolling Marquee (using Framer Motion) for industries (Healthcare, Retail, Public, Finance).
7. **Animations:** 
   - Use `framer-motion` for subtle, professional animations (e.g., gentle fade-ins on scroll, smooth hover transitions on service cards). No bouncy or exaggerated effects.
8. **Responsiveness:** 
   - Must be perfectly responsive across Mobile, Tablet, and Desktop. Use Tailwind's utility classes optimally.