import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { portfolioData } from '@/data';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-accent selection:text-white">
      <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-border px-6 py-4 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-brand-text hover:text-brand-accent transition-colors flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
            <span className="text-white text-lg leading-none">N</span>
          </div>
          {portfolioData.personalInfo.name}
        </Link>
        <nav className="flex gap-6 items-center">
          <Link to="/" className={`text-sm font-medium ${pathname === '/' ? 'text-brand-accent' : 'text-brand-muted'} hover:text-brand-text transition-colors`}>
            Projects
          </Link>
          <a 
            href={`mailto:${portfolioData.personalInfo.email}`} 
            className="text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent-hover px-4 py-2 rounded-md transition-all shadow-sm"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-brand-surface border-t border-brand-border px-6 py-16 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-2xl mb-6 text-brand-text">
              {portfolioData.personalInfo.name}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed max-w-md">
              {portfolioData.personalInfo.role}. Focusing on clarity, structure, and usability to build efficient digital solutions.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-text/40 block mb-2">Connect</span>
              <a 
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="text-sm font-medium text-brand-accent hover:underline flex items-center gap-2"
              >
                <Mail size={16} />
                {portfolioData.personalInfo.email}
              </a>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-text/40 block mb-2">Availability</span>
              <p className="text-sm text-brand-muted">Open for new projects and collaborations.</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-brand-muted">
          <span>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <span>Built with React & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
