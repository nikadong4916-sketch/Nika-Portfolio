import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { portfolioData, Project } from '@/data';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32">
      {/* Intro Section */}
      <section className="mb-24 md:mb-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-16 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              Available for Hire
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] text-brand-text mb-8 tracking-tight">
              {portfolioData.personalInfo.bio}
            </h1>
            <p className="text-xl text-brand-muted mb-10 max-w-2xl leading-relaxed">
              {portfolioData.personalInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-accent-hover transition-all shadow-lg shadow-brand-accent/20"
              >
                Project Inquiry
                <ArrowRight size={18} />
              </a>
              <div className="px-6 py-4 bg-white border border-brand-border rounded-xl font-medium text-brand-muted text-sm flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Product Design
                </span>
                <span className="w-px h-4 bg-brand-border" />
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  UX Research
                </span>
              </div>
            </div>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-brand-accent/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </section>

      {/* Projects Grid */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-brand-text flex items-center gap-3">
          Major Case Studies
          <span className="text-xs font-medium text-brand-muted bg-brand-surface px-2 py-0.5 border border-brand-border rounded-md">
            {portfolioData.projects.length}
          </span>
        </h2>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-md border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-accent cursor-pointer transition-colors">
            <span className="text-lg">::</span>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: React.Key;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block h-full">
        <div className="bg-white border border-brand-border rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 card-shadow hover:-translate-y-1">
          <div className="aspect-[16/9] overflow-hidden bg-brand-surface border-b border-brand-border relative">
            <motion.img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700"
              whileHover={{ scale: 1.02 }}
            />
            <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-brand-accent shadow-xl">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted bg-brand-surface px-2 py-1 border border-brand-border rounded">
                Ref: 0{index + 1}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                UX / UI Design
              </span>
            </div>
            <h3 className="text-3xl font-bold text-brand-text mb-4 tracking-tight group-hover:text-brand-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-8 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-auto pt-6 border-t border-brand-border flex justify-between items-center text-xs font-bold uppercase tracking-widest text-brand-muted group-hover:text-brand-text transition-colors">
              <span>View Case Study</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
