'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

/* --- BLOG DATA --- */
const blogPosts = [
  {
    slug: 'navigating-the-unknown',
    img: '/pic2.jpg',
    category: 'Leadership',
    title: 'Navigating the Unknown',
    excerpt: 'How to maintain composure and direction when the path ahead isn\'t clear. Learn the strategies that help leaders thrive in uncertainty.',
    date: 'January 8, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'building-resilient-teams',
    img: '/pic3.jpg',
    category: 'Teams',
    title: 'Building Resilient Teams',
    excerpt: 'The foundations of team resilience and how to cultivate an environment where your people can weather any storm together.',
    date: 'January 3, 2026',
    readTime: '7 min read',
    featured: true,
  },
  {
    slug: 'leading-with-purpose',
    img: '/pic4.jpg',
    category: 'Purpose',
    title: 'Leading with Purpose',
    excerpt: 'Purpose-driven leadership isn\'t just a buzzword—it\'s the key to sustainable success and meaningful impact.',
    date: 'December 28, 2025',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'the-power-of-strategic-pause',
    img: '/pic1.jpg',
    category: 'Wellness',
    title: 'The Power of Strategic Pause',
    excerpt: 'Why the most effective leaders know when to slow down, and how intentional rest drives better decision-making.',
    date: 'December 20, 2025',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'from-execution-to-influence',
    img: '/8.jpg',
    category: 'Leadership',
    title: 'From Execution to Influence',
    excerpt: 'Making the transition from doing the work to leading the work—and why it\'s harder than most expect.',
    date: 'December 15, 2025',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'clarity-in-chaos',
    img: '/pic2.jpg',
    category: 'Strategy',
    title: 'Clarity in Chaos',
    excerpt: 'Practical frameworks for cutting through noise and finding focus when everything feels urgent.',
    date: 'December 10, 2025',
    readTime: '5 min read',
    featured: false,
  },
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
        <Link href="/blog" className="hover:text-gold-400 transition-colors underline decoration-gold-400 underline-offset-4">INSIGHTS</Link>
        <Link href="/#speaking" className="hover:text-gold-400 transition-colors">SPEAKING & EVENTS</Link>
      </div>
    </div>
  </nav>
);

/* --- FEATURED POST CARD --- */
const FeaturedCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <Link href={`/blog/${post.slug}`} className="group block">
    <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6">
      <Image
        src={post.img}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3 block">{post.category}</span>
        <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 group-hover:text-gold-400 transition-colors">{post.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-gray-400 text-xs">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
        </div>
      </div>
    </div>
  </Link>
);

/* --- BLOG POST CARD --- */
const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <Link href={`/blog/${post.slug}`} className="group block">
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-gold-400/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3">{post.category}</span>
        <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">{post.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-gray-500 text-xs pt-4 border-t border-slate-700">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
        </div>
      </div>
    </div>
  </Link>
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

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">The Leader&apos;s Milestones</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Where leadership meets life. We blend insights from endurance events and contemporary business topics because leading a team and pushing past a comfort zone have more in common than you might think.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl text-gold-400 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <FeaturedCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl text-gold-400 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="mailto:contact@milestoneleadership.com" className="inline-block px-8 py-4 bg-transparent border border-gold-400 text-gold-400 rounded-full hover:bg-gold-400 hover:text-slate-900 transition-all font-semibold tracking-wide">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
