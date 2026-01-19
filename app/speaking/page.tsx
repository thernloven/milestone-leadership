'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Play, Calendar, ExternalLink } from 'lucide-react';

/* --- PAST EVENTS DATA --- */
const pastEvents = [
  {
    title: "Develop Your Leadership Flex with Michael Miles",
    url: "https://www.youtube.com/watch?v=1cn17ZFUk20",
    videoId: "1cn17ZFUk20",
    category: "Leadership",
  },
  {
    title: "Agile Accountability: A Leadership Workshop with Mike Miles",
    url: "https://www.youtube.com/watch?v=2dLLwGPd5lE",
    videoId: "2dLLwGPd5lE",
    category: "Workshop",
  },
  {
    title: "Impactful Entrepreneurship with Mike Miles",
    url: "https://www.youtube.com/watch?v=yEoLva3BILA",
    videoId: "yEoLva3BILA",
    category: "Entrepreneurship",
  },
  {
    title: "The Dimensions of Product-Market Fit with Mike Miles",
    url: "https://www.youtube.com/watch?v=yEoLva3BILA",
    videoId: "yEoLva3BILA",
    category: "Strategy",
  },
  {
    title: "Perpetual Improvement: Lessons and Strategies from Industry Leaders with Mike Miles",
    url: "https://www.youtube.com/watch?v=b9wLlNR6QOM",
    videoId: "b9wLlNR6QOM",
    category: "Leadership",
  },
  {
    title: "Focus on What Matters MOST: Do Less to Maximize Impact",
    url: "https://www.youtube.com/watch?v=LVc863uG3aA",
    videoId: "LVc863uG3aA",
    category: "Productivity",
  },
  {
    title: "Building Resilience for Entrepreneurial Leaders",
    url: "https://www.youtube.com/watch?v=kgyB-qXSBp4",
    videoId: "kgyB-qXSBp4",
    category: "Resilience",
  },
  {
    title: "2017 Tomorrow's Leaders Equipped for Diversity with Mike Miles",
    url: "https://www.youtube.com/watch?v=5Cos5fxp1jM",
    videoId: "5Cos5fxp1jM",
    category: "Diversity",
  },
];

/* --- UPCOMING EVENTS DATA --- */
const upcomingEvents: { title: string; date: string; location: string; description: string }[] = [
  // Add upcoming events here when available
];

/* --- NAVBAR --- */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
    <div className="bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-6xl shadow-2xl">
      <Link href="/" className="flex items-center gap-2">
        <div className="text-lg font-bold font-serif tracking-wider text-white flex items-center gap-3">
          <Image src="/mountainicon.png" alt="Milestone Leadership" width={50} height={50} /> MILESTONE LEADERSHIP
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-200">
        <Link href="/" className="hover:text-gold-400 transition-colors">HOME</Link>
        <Link href="/#services" className="hover:text-gold-400 transition-colors">SERVICES</Link>
        <Link href="/#how-we-work" className="hover:text-gold-400 transition-colors">HOW WE WORK</Link>
        <Link href="/team" className="hover:text-gold-400 transition-colors">TEAM</Link>
        <Link href="/blog" className="hover:text-gold-400 transition-colors">INSIGHTS</Link>
        <Link href="/speaking" className="hover:text-gold-400 transition-colors underline decoration-gold-400 underline-offset-4">SPEAKING & EVENTS</Link>
      </div>
    </div>
  </nav>
);

/* --- EVENT CARD --- */
const EventCard = ({ event }: { event: typeof pastEvents[0] }) => (
  <a
    href={event.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
  >
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-gold-400/50 transition-all duration-300 h-full flex flex-col">
      {/* YouTube Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${event.videoId}/hqdefault.jpg`}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center">
            <Play className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3">{event.category}</span>
        <h3 className="font-serif text-lg text-white mb-3 group-hover:text-gold-400 transition-colors flex-grow leading-snug">
          {event.title}
        </h3>
        <div className="flex items-center gap-2 text-gray-400 text-sm pt-4 border-t border-slate-700">
          <ExternalLink className="w-4 h-4" />
          <span>Watch on YouTube</span>
        </div>
      </div>
    </div>
  </a>
);

/* --- UPCOMING EVENT CARD --- */
const UpcomingEventCard = ({ event }: { event: typeof upcomingEvents[0] }) => (
  <div className="bg-slate-800/50 border border-gold-400/30 rounded-2xl p-8 hover:border-gold-400 transition-colors">
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 w-20 h-20 bg-gold-400 rounded-xl flex flex-col items-center justify-center text-slate-900">
        <Calendar className="w-6 h-6 mb-1" />
        <span className="text-xs font-bold">SOON</span>
      </div>
      <div className="flex-grow">
        <h3 className="font-serif text-2xl text-white mb-2">{event.title}</h3>
        <p className="text-gold-400 font-medium mb-2">{event.date}</p>
        <p className="text-gray-400 text-sm mb-4">{event.location}</p>
        <p className="text-gray-300">{event.description}</p>
      </div>
    </div>
  </div>
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

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Speaking & Events</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Talks and workshops on leadership, resilience, and building impact that lasts. Explore recordings from past events or connect to book Mike for your next event.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl text-gold-400 mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              Upcoming Events
            </h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, idx) => (
                <UpcomingEventCard key={idx} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Upcoming Events Message */}
      {upcomingEvents.length === 0 && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 text-center">
              <Calendar className="w-12 h-12 text-gold-400 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-white mb-3">Stay Tuned for Upcoming Events</h3>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                New speaking engagements and workshops are being scheduled. Get in touch to book Mike for your next event or to be notified about upcoming opportunities.
              </p>
              <a
                href="mailto:contact@milestoneleadership.com"
                className="inline-block px-8 py-4 bg-transparent border border-gold-400 text-gold-400 rounded-full hover:bg-gold-400 hover:text-slate-900 transition-all font-semibold tracking-wide"
              >
                INQUIRE ABOUT BOOKING
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl text-gold-400 mb-8 flex items-center gap-3">
            <Play className="w-6 h-6" />
            Past Events & Recordings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pastEvents.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Book Mike for Your Next Event
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether it&apos;s a keynote, workshop, or panel discussion, Mike brings practical insights on leadership, resilience, and sustainable impact.
          </p>
          <a
            href="mailto:contact@milestoneleadership.com"
            className="inline-block px-8 py-4 bg-gold-400 text-slate-900 rounded-full hover:bg-gold-300 transition-all font-semibold tracking-wide"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
