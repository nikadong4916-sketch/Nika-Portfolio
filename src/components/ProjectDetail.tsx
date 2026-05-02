import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { portfolioData } from '@/data';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = portfolioData.projects.find(p => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);
  
  if (!project) return <Navigate to="/" />;

  const nextProject = portfolioData.projects[(portfolioData.projects.indexOf(project) + 1) % portfolioData.projects.length];

  return (
    <div className="bg-white min-h-screen" ref={containerRef}>
      {/* Breadcrumbs & Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors mb-12 group">
          <ArrowLeft size={14} />
          Back to Index
        </Link>
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-brand-text mb-8 leading-[0.9]">
              {project.title}
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text/30 block mb-3">Service</span>
              <p className="text-sm font-bold text-brand-text">Product Design, UX Interaction</p>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text/30 block mb-3">Timeline</span>
              <p className="text-sm font-bold text-brand-text">Q1 2024 - 4 Weeks</p>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text/30 block mb-3">Client</span>
              <p className="text-sm font-bold text-brand-text">Confidential Tech Startup</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Cover Image */}
      <div className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-brand-surface border border-brand-border aspect-video shadow-2xl">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Detail Gallery */}
      <div className="bg-brand-surface border-y border-brand-border py-24 md:py-48">
        <div className="max-w-5xl mx-auto px-6 space-y-32 md:space-y-64">
          {project.detailImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="w-full bg-white rounded-2xl overflow-hidden border border-brand-border shadow-md">
                <img
                  src={image}
                  alt={`${project.title} detail ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex justify-between items-end border-l-2 border-brand-accent pl-6">
                <div className="max-w-sm">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mb-2 block">Detail view 0{index + 1}</span>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Analyzing core user flows and high-fidelity interactions to ensure a seamless navigation experience across all devices.
                  </p>
                </div>
                <span className="text-[4rem] font-black text-brand-text/5 leading-none select-none">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Project Link */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-48 flex justify-center">
         <div className="text-center w-full max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent block mb-8">Up Next</span>
            <Link 
              to={`/project/${nextProject.id}`}
              className="group block relative"
            >
              <h2 className="text-5xl md:text-8xl font-black text-brand-text mb-12 tracking-tighter group-hover:text-brand-accent transition-all duration-300">
                {nextProject.title}
              </h2>
              <div className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest bg-brand-text text-white px-10 py-5 rounded-xl group-hover:bg-brand-accent transition-all shadow-xl shadow-brand-text/10">
                Next Case Study
                <ArrowRight size={18} />
              </div>
            </Link>
         </div>
      </div>
    </div>
  );
}
