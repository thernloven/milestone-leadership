'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';

/* --- NAV COMPONENT --- */
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME', href: '#', isPage: false },
    { id: 'services', label: 'SERVICES', href: '#services', isPage: false },
    { id: 'how-we-work', label: 'HOW WE WORK', href: '#how-we-work', isPage: false },
    { id: 'team', label: 'TEAM', href: '/team', isPage: true },
    { id: 'insights', label: 'INSIGHTS', href: '/blog', isPage: true },
    { id: 'speaking', label: 'SPEAKING & EVENTS', href: '/speaking', isPage: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      <div className="bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-6xl shadow-2xl">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="text-lg font-bold font-serif tracking-wider text-white flex items-center gap-3">
            <Image src="/mountainicon.png" alt="Milestone Leadership" width={50} height={50} /> MILESTONE LEADERSHIP
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-200">
          {navItems.map((item) => (
            item.isPage ? (
              <Link
                key={item.id}
                href={item.href}
                className={`hover:text-gold-400 transition-colors ${
                  activeLink === item.id ? 'underline decoration-gold-400 underline-offset-4' : ''
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveLink(item.id)}
                className={`hover:text-gold-400 transition-colors ${
                  activeLink === item.id ? 'underline decoration-gold-400 underline-offset-4' : ''
                }`}
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

/* --- HERO SECTION --- */
const Hero = () => (
  <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/mountainbackground.jpg"
        alt="Mountain Peak"
        fill
        className="object-cover object-center brightness-[0.65]"
        priority
      />
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
    </div>

    <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
      <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
        Stronger leaders.<br />
        Deeper impact.
      </h1>
      <p className="text-xl md:text-2xl text-stone-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
        Helping leaders magnify their impact while staying aligned with what matters most.
      </p>

      <button className="group relative px-8 py-3 bg-transparent border border-white/40 hover:border-white rounded-full text-white font-semibold tracking-wider transition-all hover:bg-white/10 backdrop-blur-sm overflow-hidden">
        <span className="relative z-10">LEARN MORE</span>
      </button>
    </div>
  </section>
);

/* --- SERVICES SECTION --- */
const Services = () => (
  <section id="services" className="bg-slate-900 py-24 px-4 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <h2 className="font-serif text-4xl md:text-5xl text-white max-w-lg leading-tight">
          <span className="text-gold-400">Partnering for Leadership Impact</span>
        </h2>
        <div className="text-gray-300 max-w-xl text-base md:text-lg leading-relaxed">
          <p className="mb-4">
            Milestone Leadership works with leaders through a single, evolving partnership focused on elevating leadership impact. We focus on strengthening leadership judgment, focus, and effectiveness, as well as leading with vision, mission and values.
          </p>
          <p>
            As leaders grow, two common challenges often surface: sustaining elevated impact over time and operating at the right strategic level. When we identify either as a constraint to your leadership impact, the focus of our partnership shifts to address it directly, ensuring impact is not only increased, but enduring and strategic.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Elevating Leadership Impact",
            desc: "This is the foundation of our work together. We focus on strengthening leadership judgment, expanding influence, and helping leaders operate at a higher level across their teams and organizations. The emphasis is on clarity, focus, and consistently directing effort toward the decisions and actions that matter most."
          },
          {
            title: "Sustaining Leadership Impact",
            desc: "As leadership demands increase, impact can begin to come at the expense of energy, health, or relationships. When this happens, the partnership shifts toward endurance—helping leaders maintain elevated impact over time without burning out or narrowing their lives. The goal is leadership that holds up under pressure and across seasons."
          },
          {
            title: "Strengthening Strategic Leadership Impact",
            desc: "In some cases, the limiting factor isn't effort or capability—it's where leaders are spending their time. When leaders are too deeply embedded in tactical execution, the partnership shifts toward strategy. This includes redefining responsibilities, strengthening decision-making, and helping leaders operate more consistently in the most strategic aspects of their role."
          }
        ].map((service, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:border-gold-400/50 transition-colors group h-full flex flex-col">
            <h3 className="font-serif text-2xl text-gold-400 mb-6">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed flex-grow">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="mailto:info@milestone-leadership.com" className="inline-block px-8 py-4 bg-transparent border border-gold-400 text-gold-400 rounded-full hover:bg-gold-400 hover:text-slate-900 transition-all font-semibold tracking-wide">
          GET IN TOUCH
        </a>
      </div>
    </div>
  </section>
);

/* --- HOW WE WORK SECTION --- */
const HowWeWork = () => (
  <section id="how-we-work" className="bg-slate-800 py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">How We Work Together</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          A simple, intentional approach that brings clarity, builds momentum, and supports sustainable progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-16 left-1/8 right-1/8 h-[2px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

        {[
          {
            step: "01",
            title: "Align on What Matters",
            desc: "We start by getting aligned on what impact means right now—professionally and personally. This includes priorities, expectations, and what success looks like, not just in theory."
          },
          {
            step: "02",
            title: "Establish the Baseline",
            desc: "We take an honest look at where things stand today: strengths, development areas, overall wellness, current demands, and what's working well—or not. This also includes being explicit about where you do want to grow and where you intentionally don't and anything being explicitly asked of you professionally or personally."
          },
          {
            step: "03",
            title: "Design a Focused Plan",
            desc: "With goals and context in place, we design a focused plan that prioritizes the highest-leverage actions. When needed, this includes adjusting habits, decision-making approaches, or systems to create momentum without compromising what's important outside of work."
          },
          {
            step: "04",
            title: "Build Momentum Over Time",
            desc: "We work together through regular conversations, reflection, and course correction. The emphasis is on sustained progress, adapting as conditions change and reinforcing what's working."
          }
        ].map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Step number circle */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-slate-900 border-2 border-gold-400/30 grid place-items-center group-hover:border-gold-400 transition-colors">
              <span className="font-serif text-5xl text-gold-400 -mt-2">{item.step}</span>
            </div>

            {/* Content card */}
            <div className="text-center px-4">
              <h3 className="font-serif text-2xl text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="px-8 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-slate-900 transition-all font-semibold tracking-wide">
          SCHEDULE A CALL
        </button>
      </div>
    </div>
  </section>
);

/* --- BENEFITS SECTION --- */
const Benefits = () => (
  <section className="bg-slate-900 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-serif text-gold-400 text-2xl mb-6">When we work together, you will:</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side with Cards */}
        <div className="flex flex-col gap-3">
            {[
              {
                title: "Gain clarity on what truly matters",
                text: "Get clear on priorities, expectations, and where your time and energy will have the greatest impact—so you're no longer reacting to everything."
              },
              {
                title: "Operate with greater focus and strategic intent",
                text: "Shift from execution-heavy work to higher-leverage leadership, making decisions with confidence and purpose."
              },
              {
                title: "Sustain elevated impact without burning out",
                text: "Build the habits, rhythms, and boundaries that allow you to perform at a high level while protecting your health, energy, and relationships."
              },
              {
                title: "Increase your influence and effectiveness as a leader",
                text: "Strengthen judgment, communication, and presence so your leadership extends beyond what you personally execute."
              },
              {
                title: "Create momentum that lasts",
                text: "Put the right structures, support, and practices in place to maintain progress over time—even as conditions change."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="font-serif text-gold-400 text-lg mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
        </div>

        {/* Right Image */}
        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl">
          <Image
            src="/pic1.jpg"
            alt="Success Hiker"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="text-center mt-10">
        <a href="mailto:info@milestone-leadership.com" className="inline-block px-8 py-4 bg-transparent border border-gold-400 text-gold-400 rounded-full hover:bg-gold-400 hover:text-slate-900 transition-all font-semibold tracking-wide">
          GET IN TOUCH
        </a>
      </div>
    </div>
  </section>
);

/* --- INSIGHTS/BLOG SECTION --- */
const Insights = () => (
  <section id="insights" className="relative py-24 px-4">
    {/* Background with gradient fade to grey */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400" />

    <div className="relative z-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">THE LEADER&apos;S MILESTONES</h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The Milestone Leadership blog is where leadership meets life. We blend insights from endurance events and contemporary business topics because leading a team and pushing past a comfort zone have more in common than you might think.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          { img: "/pic2.jpg", title: "Navigating the Unknown", slug: "navigating-the-unknown", category: "Leadership", excerpt: "How to maintain composure and direction when the path ahead isn't clear." },
          { img: "/pic3.jpg", title: "Building Resilient Teams", slug: "building-resilient-teams", category: "Teams", excerpt: "The foundations of team resilience and how to cultivate an environment where your people can weather any storm." },
          { img: "/pic4.jpg", title: "Leading with Purpose", slug: "leading-with-purpose", category: "Purpose", excerpt: "Purpose-driven leadership isn't just a buzzword—it's the key to sustainable success." }
        ].map((item, idx) => (
          <Link key={idx} href={`/blog/${item.slug}`} className="group cursor-pointer block">
            <div className="relative h-64 w-full rounded-t-2xl overflow-hidden mb-4">
               <Image
                  src={item.img}
                  alt="Blog Post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
               />
            </div>
            <div className="p-4 bg-white/5 rounded-b-2xl border border-white/10 hover:border-gold-400/30 transition-colors">
              <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-2 block">{item.category}</span>
              <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold-400 transition-colors">{item.title}</h3>
              <p className="text-gray-200 text-sm line-clamp-2">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/blog" className="px-8 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-slate-900 transition-all font-semibold tracking-wide inline-block">
          VIEW ALL ARTICLES
        </Link>
      </div>
    </div>
  </section>
);

/* --- SPEAKING SECTION --- */
const Speaking = () => (
  <section id="speaking" className="relative py-32 px-4 flex items-center">
    <div className="absolute inset-0 z-0">
      <Image
        src="/8.jpg"
        alt="Mountain Range"
        fill
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Inspire. Educate. Empower.
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed mb-4">
          Talks and workshops on leadership, resilience, and building impact that lasts.
        </p>
        <p className="text-gray-300 text-base leading-relaxed mb-8">
          Explore recordings from past talks and workshops, or sign up to be notified about upcoming events.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/speaking" className="px-8 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-slate-900 transition-all font-semibold tracking-wide inline-block">
            VIEW PAST EVENTS
          </Link>
          <a href="mailto:info@milestone-leadership.com" className="px-8 py-4 bg-gold-400 text-slate-900 rounded-full hover:bg-gold-300 transition-all font-semibold tracking-wide inline-block">
            BOOK MIKE
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
         {/* Optional: Add a person image here if needed, or keep text focused */}
         <div className="h-full w-full"></div>
      </div>
    </div>
  </section>
);

/* --- NEWSLETTER SECTION --- */
const Newsletter = () => (
  <section className="bg-gradient-to-r from-slate-500 to-slate-300 py-24 px-4 text-center">
    <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 drop-shadow-md">Inside the Milestone Leadership</h2>

    <p className="text-white mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed drop-shadow-sm">
      Each month, we share insights from our work with leaders, profiles that highlight real leadership journeys, and updates on upcoming events designed to help leaders grow with clarity and resilience.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-0 max-w-2xl mx-auto">
      <input
        type="email"
        placeholder="EMAIL ADDRESS"
        className="flex-grow px-6 py-4 rounded-l-xl md:rounded-r-none rounded-xl md:rounded-l-xl border-none outline-none text-slate-800 placeholder-slate-500 shadow-lg bg-white"
      />
      <button className="bg-slate-800 text-white px-8 py-4 rounded-r-xl md:rounded-l-none rounded-xl md:rounded-r-xl shadow-lg hover:bg-slate-900 transition-all font-bold tracking-wide border-2 border-slate-800 mt-4 md:mt-0">
        SUBSCRIBE
      </button>
    </div>
  </section>
);

/* --- FOOTER --- */
const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 py-12 px-4 text-center text-sm">
    <div className="mb-6 font-serif text-2xl text-slate-400">MILESTONE LEADERSHIP</div>
    <div className="flex justify-center gap-6 mb-8">
      <a href="https://www.linkedin.com/in/mike-j-miles/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">LinkedIn</a>
    </div>
    <p>&copy; {new Date().getFullYear()} Milestone Leadership. All rights reserved.</p>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <HowWeWork />
      <Benefits />
      <Insights />
      <Speaking />
      <Newsletter />
      <Footer />
    </main>
  );
}
