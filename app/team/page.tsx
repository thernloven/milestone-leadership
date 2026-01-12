'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* --- NAV COMPONENT --- */
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('team');

  const navItems = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'services', label: 'SERVICES', href: '/#services' },
    { id: 'how-we-work', label: 'HOW WE WORK', href: '/#how-we-work' },
    { id: 'team', label: 'TEAM', href: '/team' },
    { id: 'insights', label: 'INSIGHTS', href: '/#insights' },
    { id: 'speaking', label: 'SPEAKING & WEBINARS', href: '/#speaking' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      <div className="bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-6xl shadow-2xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-lg font-bold font-serif tracking-wider text-white flex items-center gap-3">
            <Image src="/mountainicon.png" alt="Milestone Leadership" width={50} height={50} /> MILESTONE LEADERSHIP
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveLink(item.id)}
              className={`hover:text-gold-400 transition-colors ${
                activeLink === item.id ? 'underline decoration-gold-400 underline-offset-4' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

/* --- TEAM SECTION --- */
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Michael Miles",
      role: "Founder & Executive Coach",
      image: "/mikeheadshot.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      name: "Elizabeth",
      role: "Leadership Consultant",
      image: "/mikeheadshot.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }
  ];

  return (
    <section className="bg-slate-900 min-h-screen pt-40 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Meet Our Team</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-gold-400/50 transition-colors group">
              {/* Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-serif text-3xl text-white mb-2">{member.name}</h3>
                <p className="text-gold-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <TeamSection />
      <Footer />
    </main>
  );
}
