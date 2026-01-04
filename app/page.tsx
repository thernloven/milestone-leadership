import React from 'react';
import Image from 'next/image';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';

/* --- NAV COMPONENT --- */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
    <div className="bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-6xl shadow-2xl">
      <div className="flex items-center gap-2">
        {/* Logo */}
        <div className="text-2xl font-bold font-serif tracking-wider text-white flex items-center gap-2">
          <Image src="/mountainicon.png" alt="Milestone Leadership" width={40} height={40} /> MILESTONE LEADERSHIP
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-200">
        <a href="#" className="hover:text-gold-400 transition-colors">HOME</a>
        <a href="#services" className="hover:text-gold-400 transition-colors underline decoration-gold-400 underline-offset-4">SERVICES</a>
        <a href="#insights" className="hover:text-gold-400 transition-colors">INSIGHTS</a>
        <a href="#speaking" className="hover:text-gold-400 transition-colors">SPEAKING & WEBINARS</a>
        <a href="#resources" className="hover:text-gold-400 transition-colors">RESOURCES</a>
      </div>
    </div>
  </nav>
);

/* --- HERO SECTION --- */
const Hero = () => (
  <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop"
        alt="Mountain Peak"
        fill
        className="object-cover object-center brightness-[0.65]"
        priority
      />
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
    </div>

    <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
      <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
        Stronger leaders.<br />
        Deeper impact.
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
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
        <p className="text-gray-300 max-w-md text-sm leading-relaxed">
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

/* --- BENEFITS SECTION --- */
const Benefits = () => (
  <section className="bg-slate-900 py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-serif text-gold-400 text-3xl mb-12">When we work together, you will:</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Grid of Cards */}
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

        {/* Right Image */}
        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop"
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
  <section id="insights" className="bg-gradient-to-b from-slate-900 to-slate-800 py-24 px-4">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">THE LEADER&apos;S MILESTONES</h2>
      <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
        The Milestone Leadership blog is where leadership meets life. We blend insights from endurance events and contemporary business topics because leading a team and pushing past a comfort zone have more in common than you might think.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {[1, 2, 3].map((item) => (
        <div key={item} className="group cursor-pointer">
          <div className="relative h-64 w-full rounded-t-2xl overflow-hidden mb-4">
             <Image
                src={`https://images.unsplash.com/photo-${item === 1 ? '1573496359142-b8d87734a5a2' : item === 2 ? '1552664730-d307ca884978' : '1542744173-8e7e53415bb0'}?auto=format&fit=crop&w=800&q=80`}
                alt="Blog Post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
             />
          </div>
          <div className="p-4 bg-white/5 rounded-b-2xl border border-white/10 hover:border-gold-400/30 transition-colors">
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-2 block">Leadership</span>
            <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold-400 transition-colors">Navigating the Unknown</h3>
            <p className="text-gray-400 text-sm line-clamp-2">How to maintain composure and direction when the path ahead isn&apos;t clear.</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* --- SPEAKING SECTION --- */
const Speaking = () => (
  <section id="speaking" className="relative py-32 px-4 flex items-center">
    <div className="absolute inset-0 z-0">
      <Image
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2952&auto=format&fit=crop"
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
    <h2 className="font-serif text-4xl md:text-6xl text-white mb-2 drop-shadow-md">JOIN OUR</h2>
    <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 font-bold drop-shadow-md">NEWSLETTER</h2>

    <p className="text-white mb-8 tracking-wider text-sm md:text-base font-medium drop-shadow-sm">
      SIGN UP WITH YOUR EMAIL ADDRESS TO RECEIVE OUR MONTHLY NEWSLETTER.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
      <button className="bg-white/30 backdrop-blur-md text-white border border-white/40 px-8 py-3 rounded-xl shadow-lg hover:bg-white/40 transition-all font-bold tracking-wide">
        SUBSCRIBE
      </button>
      <input
        type="email"
        placeholder="EMAIL ADDRESS"
        className="flex-grow px-6 py-3 rounded-xl border-none outline-none text-slate-800 placeholder-slate-400 shadow-lg"
      />
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
      <Benefits />
      <Insights />
      <Speaking />
      <Newsletter />
      <Footer />
    </main>
  );
}
