'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';
import { useParams } from 'next/navigation';

/* --- BLOG DATA --- */
const blogPosts: Record<string, {
  img: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  content: string[];
}> = {
  'navigating-the-unknown': {
    img: '/pic2.jpg',
    category: 'Leadership',
    title: 'Navigating the Unknown',
    excerpt: 'How to maintain composure and direction when the path ahead isn\'t clear.',
    date: 'January 8, 2026',
    readTime: '5 min read',
    author: 'Mike',
    authorRole: 'Founder, Milestone Leadership',
    content: [
      'Leadership has never been about having all the answers. It\'s about having the clarity to move forward even when the path isn\'t fully visible.',
      'In my years working with leaders across industries, I\'ve noticed a common thread: the most effective leaders aren\'t those who avoid uncertainty—they\'re the ones who\'ve learned to navigate it with intention.',
      '## The Comfort of False Certainty',
      'We\'re wired to seek certainty. Our brains prefer predictable patterns, clear outcomes, and well-defined paths. But leadership rarely offers these luxuries. The leaders who struggle most are often those who wait for perfect information before making decisions.',
      'The truth is, perfect information doesn\'t exist. By the time you have all the data, the opportunity has usually passed.',
      '## Three Principles for Leading Through Uncertainty',
      '**1. Anchor to Your Values, Not Your Plans**',
      'Plans will change. Markets shift. Teams evolve. But your core values—what you stand for, how you treat people, what kind of leader you want to be—these can remain constant. When everything else feels uncertain, your values become your compass.',
      '**2. Make Decisions Reversible When Possible**',
      'Not every decision needs to be permanent. The best leaders I\'ve worked with think in terms of experiments. They ask: "What\'s the smallest step we can take to learn something?" This approach reduces the stakes of any single decision.',
      '**3. Communicate What You Know and What You Don\'t**',
      'Your team doesn\'t need you to have all the answers. They need you to be honest about what you\'re seeing and what you\'re still figuring out. Transparency builds trust, and trust is the foundation of resilient teams.',
      '## The Endurance Mindset',
      'I often draw parallels between leadership and endurance events. In a marathon or a long trail race, you can\'t see the finish line from the start. You don\'t know exactly how you\'ll feel at mile 20. What gets you through is the commitment to keep moving, one step at a time.',
      'Leadership works the same way. You don\'t need to see the entire path—you just need to see far enough to take the next step.',
      '## Moving Forward',
      'If you\'re facing uncertainty in your leadership right now, know that you\'re not alone. The discomfort you feel is a sign that you\'re operating at your edge, and that\'s where growth happens.',
      'The goal isn\'t to eliminate uncertainty. It\'s to build the capacity to lead well within it.',
    ],
  },
  'building-resilient-teams': {
    img: '/pic3.jpg',
    category: 'Teams',
    title: 'Building Resilient Teams',
    excerpt: 'The foundations of team resilience and how to cultivate an environment where your people can weather any storm together.',
    date: 'January 3, 2026',
    readTime: '7 min read',
    author: 'Mike',
    authorRole: 'Founder, Milestone Leadership',
    content: [
      'Resilient teams aren\'t born—they\'re built. And they\'re built through intentional leadership practices that create the conditions for people to thrive under pressure.',
      'After years of working with leadership teams, I\'ve identified the core elements that separate teams that crumble under stress from those that come together and perform at their best.',
      '## What Resilience Really Means',
      'Team resilience isn\'t about being tough or pushing through at all costs. It\'s about the collective capacity to adapt, recover, and grow stronger through challenges.',
      'Resilient teams share three characteristics: psychological safety, shared purpose, and adaptive capacity.',
      '## Psychological Safety: The Foundation',
      'Google\'s Project Aristotle famously identified psychological safety as the number one predictor of high-performing teams. When people feel safe to take risks, ask questions, and admit mistakes, the team can learn and adapt faster.',
      'As a leader, you create psychological safety through your responses. How do you react when someone brings bad news? What happens when a project fails? Your team is watching.',
      '## Shared Purpose: The Anchor',
      'When things get hard, teams need something to hold onto. A clear, meaningful purpose provides that anchor. It\'s not about mission statements on walls—it\'s about every person understanding how their work connects to something larger.',
      'The best leaders I\'ve worked with regularly reconnect their teams to purpose, especially during challenging times.',
      '## Adaptive Capacity: The Muscle',
      'Resilience is like a muscle—it grows stronger with use. Teams build adaptive capacity by facing challenges together and reflecting on what they learn.',
      'This doesn\'t mean manufacturing crises. It means creating space for experimentation, embracing small failures as learning opportunities, and regularly debriefing on what\'s working and what isn\'t.',
      '## Practical Steps to Build Team Resilience',
      '1. **Model vulnerability** - Share your own challenges and what you\'re learning from them',
      '2. **Celebrate learning, not just winning** - Recognize when teams adapt well, even if outcomes weren\'t perfect',
      '3. **Create recovery time** - Resilient teams need space to recharge between challenges',
      '4. **Build connection** - Teams that know each other as people, not just roles, support each other better under stress',
      '## The Long Game',
      'Building a resilient team takes time. It\'s not a one-time initiative—it\'s an ongoing practice of creating the conditions where people can do their best work, especially when it matters most.',
    ],
  },
  'leading-with-purpose': {
    img: '/pic4.jpg',
    category: 'Purpose',
    title: 'Leading with Purpose',
    excerpt: 'Purpose-driven leadership isn\'t just a buzzword—it\'s the key to sustainable success and meaningful impact.',
    date: 'December 28, 2025',
    readTime: '6 min read',
    author: 'Mike',
    authorRole: 'Founder, Milestone Leadership',
    content: [
      'Purpose has become a buzzword in leadership circles. But beneath the noise, there\'s a fundamental truth: leaders who are connected to a clear sense of purpose lead more effectively and sustain their impact over time.',
      '## Beyond the Mission Statement',
      'Purpose isn\'t something you write on a wall and forget about. It\'s a living force that shapes decisions, inspires action, and provides direction when the path isn\'t clear.',
      'The most purposeful leaders I\'ve worked with have done the internal work to understand not just what they do, but why they do it.',
      '## Purpose as a Leadership Practice',
      'Living your purpose requires daily intention. It means making choices that align with your values, even when those choices are hard. It means saying no to opportunities that don\'t fit, even when they\'re attractive.',
      'Purpose isn\'t a destination—it\'s a practice.',
      '## Connecting Your Team to Purpose',
      'As a leader, one of your most important jobs is helping your team connect their work to meaning. This isn\'t about grand speeches—it\'s about regular conversations that help people see how what they do matters.',
      'Ask questions like: "What aspect of this work is most meaningful to you?" and "How does this project connect to what we\'re trying to build?"',
      '## When Purpose Gets Tested',
      'The real test of purpose comes when it\'s inconvenient. When hitting a number means compromising a value. When the easy path conflicts with the right path.',
      'These moments define leaders. They\'re also opportunities to demonstrate that purpose isn\'t just words—it\'s the foundation of how you lead.',
      '## Finding Your Leadership Purpose',
      'If you\'re not sure what your leadership purpose is, start with these questions:',
      '- What kind of impact do you want to have on the people you lead?',
      '- What values are you unwilling to compromise, no matter the circumstances?',
      '- When you look back on your career, what do you want to have been true about how you led?',
      'Your answers to these questions point toward your purpose.',
      '## The Sustainable Path',
      'Purpose-driven leadership isn\'t just more effective—it\'s more sustainable. When your work is connected to meaning, you can weather challenges that would exhaust leaders running on ambition alone.',
      'Purpose is the fuel that keeps you going when everything else runs out.',
    ],
  },
  'the-power-of-strategic-pause': {
    img: '/pic1.jpg',
    category: 'Wellness',
    title: 'The Power of Strategic Pause',
    excerpt: 'Why the most effective leaders know when to slow down, and how intentional rest drives better decision-making.',
    date: 'December 20, 2025',
    readTime: '4 min read',
    author: 'Mike',
    authorRole: 'Founder, Milestone Leadership',
    content: [
      'In a culture that celebrates constant motion, the idea of pausing feels counterintuitive. But the most effective leaders I\'ve worked with understand something crucial: strategic pauses aren\'t a break from leadership—they\'re an essential part of it.',
      '## The Myth of Constant Productivity',
      'We\'ve been sold a story that more is always better. More hours, more meetings, more output. But research consistently shows that our best thinking, our most creative solutions, and our wisest decisions don\'t come from grinding harder.',
      'They come from creating space.',
      '## What Strategic Pause Looks Like',
      'A strategic pause isn\'t about checking out or being passive. It\'s about intentionally creating space for reflection, recovery, and perspective.',
      'This might look like: blocking thinking time on your calendar, taking a walk before a big decision, or building recovery time after intense periods of work.',
      '## The Science of Rest',
      'Neuroscience tells us that our brains do some of their most important work during periods of rest. This is when we consolidate learning, make unexpected connections, and process complex information.',
      'When we skip rest, we\'re not just depleting our energy—we\'re limiting our cognitive capacity.',
      '## Practical Applications',
      '**Before important decisions:** Build in time to step away and return with fresh eyes.',
      '**After intense periods:** Schedule recovery time, not just more work.',
      '**Daily practice:** Create small moments of pause throughout your day.',
      '## Leading by Example',
      'When you model strategic pause, you give your team permission to do the same. You signal that sustainable performance matters more than performative busyness.',
      'This is one of the most important cultural shifts a leader can make.',
    ],
  },
  'from-execution-to-influence': {
    img: '/8.jpg',
    category: 'Leadership',
    title: 'From Execution to Influence',
    excerpt: 'Making the transition from doing the work to leading the work—and why it\'s harder than most expect.',
    date: 'December 15, 2025',
    readTime: '8 min read',
    author: 'Mike',
    authorRole: 'Founder, Milestone Leadership',
    content: [
      'One of the hardest transitions in leadership is moving from being the person who does the work to being the person who enables others to do it. This shift from execution to influence is where many talented leaders struggle.',
      '## The Execution Trap',
      'You got promoted because you were great at executing. You delivered results, solved problems, and got things done. These skills served you well—until they didn\'t.',
      'As you move into leadership, the same behaviors that made you successful can become limitations. Doing everything yourself doesn\'t scale. And it prevents your team from developing.',
      '## What Influence Really Means',
      'Leadership influence isn\'t about having power over others. It\'s about creating the conditions where others can do their best work. It\'s about shaping direction without dictating every step.',
      'This requires a fundamental mindset shift: from "How do I do this?" to "How do I enable others to do this?"',
      '## The Identity Challenge',
      'Part of what makes this transition hard is identity. If you\'ve always been "the person who gets things done," stepping back from execution can feel like losing part of yourself.',
      'Building a new identity as a leader—one focused on developing others and creating leverage—takes time and intention.',
      '## Making the Shift',
      '**Start with awareness:** Notice when you\'re defaulting to execution mode. What triggers it?',
      '**Build new metrics:** Instead of measuring your output, measure your team\'s growth and capacity.',
      '**Practice delegation:** Not just task assignment, but true delegation of ownership and decision-making.',
      '**Develop coaching skills:** Learn to ask questions that help others find their own answers.',
      '## The Payoff',
      'When you successfully make this transition, something remarkable happens: your impact multiplies. You\'re no longer limited by your own capacity to execute. You\'ve built a team that can achieve more than you ever could alone.',
      'That\'s the real work of leadership.',
    ],
  },
  'clarity-in-chaos': {
    img: '/pic2.jpg',
    category: 'Strategy',
    title: 'Clarity in Chaos',
    excerpt: 'Practical frameworks for cutting through noise and finding focus when everything feels urgent.',
    date: 'December 10, 2025',
    readTime: '5 min read',
    author: 'Mike',
    authorRole: 'Founder, Milestone Leadership',
    content: [
      'When everything feels urgent, nothing is truly prioritized. This is the reality for many leaders today: drowning in demands, struggling to separate signal from noise, and feeling like they\'re always behind.',
      'Finding clarity in chaos isn\'t about working harder. It\'s about thinking differently.',
      '## The Urgency Illusion',
      'Not everything that feels urgent is actually important. Our brains are wired to respond to immediate demands, but leadership requires the discipline to look beyond the moment.',
      'The first step to clarity is recognizing that urgency is often an illusion—a feeling, not a fact.',
      '## A Framework for Focus',
      'When chaos hits, I use a simple framework with the leaders I coach:',
      '**1. Step back before stepping in.** Take even five minutes to assess before reacting.',
      '**2. Ask: What actually matters here?** Not what\'s loudest, but what\'s most important.',
      '**3. Identify the one thing.** If you could only move one thing forward today, what would it be?',
      '**4. Protect that priority.** Once you\'ve identified what matters, defend it against everything else.',
      '## Creating Space for Clarity',
      'Clarity rarely comes in the middle of chaos. It comes when we create space—even small moments—to think.',
      'This might mean: starting your day with 15 minutes of reflection, taking a walk before responding to a crisis, or blocking "thinking time" on your calendar.',
      '## The Discipline of No',
      'Every yes is a no to something else. Leaders who maintain clarity in chaos have developed the discipline to say no—to good opportunities that aren\'t great, to meetings that don\'t need them, to requests that don\'t align with priorities.',
      'This discipline is uncomfortable but essential.',
      '## When Clarity Eludes You',
      'Sometimes, despite your best efforts, clarity won\'t come. In these moments, the best leaders I know do two things:',
      '1. They make the best decision they can with available information',
      '2. They stay open to adjusting as new information emerges',
      'Perfect clarity isn\'t the goal. Good enough clarity to move forward is.',
    ],
  },
};

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
        <Link href="/blog" className="hover:text-gold-400 transition-colors underline decoration-gold-400 underline-offset-4">INSIGHTS</Link>
        <Link href="/speaking" className="hover:text-gold-400 transition-colors">SPEAKING & EVENTS</Link>
      </div>
    </div>
  </nav>
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

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-900">
        <Navbar />
        <div className="pt-32 pb-24 px-4 text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="text-gold-400 hover:underline">Back to Blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
      </div>

      {/* Article Content */}
      <article className="relative -mt-32 z-10 max-w-3xl mx-auto px-4 pb-24">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <span className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-4 block">{post.category}</span>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8 pb-8 border-b border-slate-700">
          <div>
            <p className="text-white font-medium">{post.author}</p>
            <p className="text-gray-500 text-xs">{post.authorRole}</p>
          </div>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-gray-500 text-sm">Share:</span>
          <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={idx} className="font-serif text-2xl text-white mt-12 mb-6">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={idx} className="text-gold-400 font-semibold mt-6 mb-2">
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <li key={idx} className="text-gray-300 leading-relaxed ml-4">
                  {paragraph.replace('- ', '')}
                </li>
              );
            }
            if (paragraph.match(/^\d\./)) {
              return (
                <p key={idx} className="text-gray-300 leading-relaxed ml-4 my-2">
                  {paragraph}
                </p>
              );
            }
            return (
              <p key={idx} className="text-gray-300 leading-relaxed my-6">
                {paragraph.split('**').map((part, i) =>
                  i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part
                )}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-slate-800/50 border border-slate-700 rounded-2xl text-center">
          <h3 className="font-serif text-2xl text-white mb-4">Ready to elevate your leadership?</h3>
          <p className="text-gray-400 mb-6">Let&apos;s explore how we can work together to create lasting impact.</p>
          <button className="px-8 py-4 bg-transparent border border-gold-400 text-gold-400 rounded-full hover:bg-gold-400 hover:text-slate-900 transition-all font-semibold tracking-wide">
            SCHEDULE A CALL
          </button>
        </div>
      </article>

      <Footer />
    </main>
  );
}
