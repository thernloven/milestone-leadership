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
    { id: 'team', label: 'OUR TEAM', href: '/team', isPage: true },
    { id: 'insights', label: 'INSIGHTS', href: '#insights', isPage: false },
    { id: 'speaking', label: 'SPEAKING & WEBINARS', href: '#speaking', isPage: false },
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
      <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
        Amazing leaders take on tremendous responsibility.
        They drive results, navigate uncertainty, and lead their teams day in and day out.
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
          Great leaders know that sustained success requires <span className="text-gold-400">clarity, resilience, and the right strategies</span> to navigate complexity.
        </h2>
        <p className="text-gray-300 max-w-md text-base md:text-lg leading-relaxed">
          Whether leaders need short-term focus or deeper, ongoing support, we offer three tailored ways to engage aligned to their goals, capacity, and where they are in their journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Balanced Leader Coaching",
            desc: "For leaders or teams focused on integrating wellness and resilience into how they work and lead, we support you with a focused, time-bound engagement designed to help you restore balance across all dimensions of your life.",
            sub: "Ideal for leaders who are feeling burned out, stretched too thin, or out of alignment."
          },
          {
            title: "Leadership Coaching",
            desc: "Ongoing coaching for senior and social impact-driven leaders who want to grow with intention. We'll work together to build clarity, resilience, and strategic focus so you can sharpen your leadership impact.",
            sub: "Ideal for experienced leaders navigating complexity, stepping into expanded roles, or seeking to lead more effectively."
          },
          {
            title: "Fractional Exd create lasting impact",
            desc: "For leaders or teams focused on integrating wellness and resilience into how they work and lead, we support you with a focused, time-bound engagement designed to help you restore balance across all dimensions of your life.",
            sub: "Ideal for leaders who are feeling burned out, stretched too thin, or out of alignment especially those who've put the business first."
          }
        ].map((service, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:border-gold-400/50 transition-colors group h-full flex flex-col">
            <h3 className="font-serif text-2xl text-gold-400 mb-6">{service.title}</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">{service.desc}</p>
            <div className="pt-6 border-t border-slate-700">
              <p className="text-gray-400 text-xs italic">{service.sub}</p>
            </div>
          </div>
        ))}
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
          A simple, intentional process designed to meet you where you are and move you forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

        {[
          {
            step: "01",
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          {
            step: "02",
            title: "Dolor Sit Amet",
            desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            step: "03",
            title: "Consectetur Elit",
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* --- BENEFITS SECTION --- */
const Benefits = () => (
  <section className="bg-slate-900 py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side with Title and Cards */}
        <div>
          <h2 className="font-serif text-gold-400 text-3xl mb-12">When we work together, you will:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Gain Clarity & Focus",
                text: "Cut through the noise, set the right priorities, and make better decisions with confidence."
              },
              {
                title: "Build Resilience & Sustainability",
                text: "Develop the mindset, habits, and systems to lead effectively without burning out."
              },
              {
                title: "Navigate Complexity with Confidence",
                text: "Tackle challenges head-on with practical strategies tailored to your goals."
              },
              {
                title: "Create Meaningful Impact",
                text: "Lead in a way that drives results, strengthens teams, and sustains long-term success."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-serif text-gold-400 text-xl mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl">
          <Image
            src="/pic1.jpg"
            alt="Success Hiker"
            fill
            className="object-cover"
          />
        </div>
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
          { img: "/pic2.jpg", title: "Navigating the Unknown" },
          { img: "/pic3.jpg", title: "Building Resilient Teams" },
          { img: "/pic4.jpg", title: "Leading with Purpose" }
        ].map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative h-64 w-full rounded-t-2xl overflow-hidden mb-4">
               <Image
                  src={item.img}
                  alt="Blog Post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
               />
            </div>
            <div className="p-4 bg-white/5 rounded-b-2xl border border-white/10 hover:border-gold-400/30 transition-colors">
              <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-2 block">Leadership</span>
              <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold-400 transition-colors">{item.title}</h3>
              <p className="text-gray-200 text-sm line-clamp-2">How to maintain composure and direction when the path ahead isn&apos;t clear.</p>
            </div>
          </div>
        ))}
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
        <p className="text-gray-200 text-lg leading-relaxed mb-8">
          Whether it&apos;s a room full of executives or a remote team tuning in, Mike brings energy, clarity, and hard-earned insight to every session. His talks on leadership, resilience, and growth are built to spark reflection and drive action.
        </p>
        <button className="px-8 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-slate-900 transition-all font-semibold tracking-wide">
          SCHEDULE A CALL
        </button>
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
      <a href="#" className="hover:text-gold-400">LinkedIn</a>
      <a href="#" className="hover:text-gold-400">Twitter</a>
      <a href="#" className="hover:text-gold-400">Instagram</a>
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
