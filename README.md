# ✈️ VisaPath — Immigration Agency Landing Page

A premium, animated single-page website for an immigration consultancy built with **Next.js 14**, **Framer Motion**, and **CSS Modules**. Features a dark glassmorphism design with a black/white/red color palette.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-purple?logo=framer)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎯 Features

| Section | Highlights |
|---------|-----------|
| **Hero** | Animated stat counters, auto-scrolling visa approval slider, gradient CTAs |
| **Universities** | Two-row infinite marquee with custom glass cards (name, country, ranking) |
| **Support** | Benefit bullets + glassmorphism contact form with validation |
| **Destinations** | 7-country tab selector with animated detail panels and ₹999 CTA |
| **How It Works** | 4-step vertical timeline with sticky parallax image |
| **Requirements** | Categorized document checklist with criticality badges |
| **Media Coverage** | Staggered-entry grid of media cards |
| **FAQ** | Smooth accordion with Framer Motion expand/collapse |
| **Footer** | Animated cityscape skyline, floating clouds, flying plane with contrails, scrolling road |

## ✨ Design Highlights

- 🖤 **Dark glassmorphism** — backdrop-blur, subtle borders, ambient glow effects
- 🔴 **Black / White / Red** palette — red used as a 10% accent
- 🎞️ **Smooth animations** — Framer Motion entrance, hover, and scroll-triggered effects
- ⭐ **Twinkling stars**, blinking antenna lights, floating clouds, and a flying plane in the footer
- 📱 **Fully responsive** — works on desktop, tablet, and mobile

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Amardeep0851/visapath.git
cd visapath

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [Framer Motion](https://www.framer.com/motion/) | Declarative animations |
| [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) | Scoped component styling |
| [Inter Font](https://fonts.google.com/specimen/Inter) | Clean, modern typography |

---

## 📁 Project Structure

```
visapath/
├── app/
│   ├── globals.css          # Design system (colors, glass, buttons, utilities)
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Main page composing all sections
├── components/
│   ├── HeroSection.jsx      # Hero with stats & visa slider
│   ├── UniversitiesSection.jsx  # Marquee university cards
│   ├── SupportSection.jsx   # Contact form & benefits
│   ├── DestinationsSection.jsx  # Tab-based country selector
│   ├── HowItWorksSection.jsx    # 4-step timeline
│   ├── RequirementsSection.jsx  # Document checklist
│   ├── MediaSection.jsx     # Media coverage grid
│   ├── FAQSection.jsx       # Accordion FAQ
│   ├── Footer.jsx           # Animated cityscape footer
│   └── *.module.css         # Corresponding CSS modules
└── package.json
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ for dreamers worldwide</p>
