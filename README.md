# Dev Portfolio — Next.js + Tailwind

A clean, dark-mode developer portfolio. All sections, fully customizable.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Customize your content

Everything you need to edit is in one file:

```
data/portfolio.ts
```

Edit your name, bio, skills, projects, experience, and testimonials there. No need to touch component files.

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page (assembles sections)
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx       # Sticky nav with active section tracking
│   ├── Hero.tsx         # Name, bio, stats, CTA buttons
│   ├── Skills.tsx       # Animated skill bars by category
│   ├── Projects.tsx     # Project cards with live/github links
│   ├── Experience.tsx   # Timeline of work history
│   ├── Testimonials.tsx # Quotes from colleagues/clients
│   ├── Contact.tsx      # Contact form + social links
│   └── Footer.tsx       # Footer
├── data/
│   └── portfolio.ts     # ← EDIT THIS FILE with your info
├── public/
│   └── resume.pdf       # ← DROP YOUR RESUME HERE
└── package.json
```

## Add your resume

Drop your resume PDF into `public/resume.pdf`. The navbar "Resume ↓" link will point to it automatically.

## Connect the contact form

The contact form (`components/Contact.tsx`) has a placeholder `handleSubmit` function. Replace it with one of these:

**Formspree (easiest):**
```bash
npm install @formspree/react
```
Then follow https://formspree.io/

**EmailJS (no backend needed):**
```bash
npm install @emailjs/browser
```

**Your own API route:**
Create `app/api/contact/route.ts` and update the form's `handleSubmit`.

## Deploy to Vercel (free)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at https://vercel.com/new for automatic deploys.

## Customization tips

- **Colors**: Edit `tailwind.config.js` → `colors.brand` to change the accent color
- **Font**: Edit `app/globals.css` → the Google Fonts import URL
- **Sections**: Add/remove sections in `app/page.tsx`
- **Dark/light toggle**: Not included by default; add `next-themes` if needed

## Tech stack

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — Fonts
