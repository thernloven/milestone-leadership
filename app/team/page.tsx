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
    { id: 'speaking', label: 'SPEAKING & EVENTS', href: '/speaking' },
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

/* --- TEAM MEMBER CARD --- */
const TeamMemberCard = ({
  name,
  role,
  image,
  bio,
  reverse = false
}: {
  name: string;
  role: string;
  image: string;
  bio: string[];
  reverse?: boolean;
}) => (
  <div className={`bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-gold-400/50 transition-colors group flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
    {/* Image */}
    <div className="relative h-80 lg:h-auto lg:w-80 flex-shrink-0 overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-8 lg:p-10 flex-grow">
      <h3 className="font-serif text-3xl text-white mb-2">{name}</h3>
      <p className="text-gold-400 font-medium mb-6">{role}</p>
      <div className="space-y-4">
        {bio.map((paragraph, idx) => (
          <p key={idx} className="text-gray-400 leading-relaxed text-sm">{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
);

/* --- TEAM SECTION --- */
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mike Miles",
      role: "Founder, Fractional Exec and Executive Coach",
      image: "/mikeheadshot.jpg",
      bio: [
        "Throughout his career, Mike has led a diverse range of startup, software, and social initiatives, with results driven by the integration of emotional intelligence, analytical rigor, and strategic judgment—while maintaining the balance required to sustain leadership effectiveness over time.",
        "As a senior leader in the software industry, he built and led international organizations, drove innovation through internationally patented technologies, and helped guide both startups and mature businesses within and beyond Microsoft. More recently, his work has focused on global social impact, including founding Microsoft's Community Development program, which supported more than 50 communities worldwide.",
        "Since retiring after a 20-year career at Microsoft, Mike has focused on partnering with accomplished leaders as the scale and stakes of their roles increase—helping them enhance and sustain their impact while operating at the right strategic level. His work includes fractional executive roles, board service with a social impact accelerator, mentoring leaders at the University of Arizona, and advising and investing in early- and growth-stage nonprofit and for-profit ventures, with a strong interest in impact-focused work. He brings this perspective to his work through endurance running, using the principles of long-term preparation, recovery, and pacing as a practical lens for sustainable leadership performance."
      ]
    },
    {
      name: "Elizabeth Westphal",
      role: "Chief of Staff and Leadership Coach",
      image: "/mikeheadshot.jpg",
      bio: [
        "Throughout her career, Elizabeth has led complex programs and teams in fast-paced environments, bringing clarity, structure, and momentum to work that spans people, process, and strategy. She is known for navigating ambiguity, translating big-picture goals into executable plans, and ensuring that details, timelines, and stakeholders remain aligned as organizations grow. After retiring from a 25-year career at Microsoft, Elizabeth joined Milestone.",
        "At Milestone, Elizabeth serves as a core partner to leaders and clients, helping operationalize strategy and turn insight into action. She pairs strong business acumen with exceptional communication and people skills, building trust across roles and functions while creating the operating rhythms that enable sustained performance. Her work strengthens execution without losing sight of the humans behind the work.",
        "Elizabeth plays a critical role in supporting Milestone's leadership engagements—bringing focus, follow-through, and a steady presence to complex initiatives. By combining strategic perspective with disciplined execution, she helps leaders move forward with confidence, stay centered on what matters most, and deliver results in environments where clarity and accountability are essential."
      ]
    }
  ];

  return (
    <section className="bg-slate-900 min-h-screen pt-40 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Meet Our Team</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            We partner with leaders to help them magnify their impact while staying aligned with what matters most.
          </p>
        </div>

        <div className="space-y-8">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard
              key={idx}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              reverse={idx % 2 === 1}
            />
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
      <a href="https://www.linkedin.com/in/mike-j-miles/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">LinkedIn</a>
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
