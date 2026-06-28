import React from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";


const projects = [
  {
    title: "Kora",
    subtitle: "Consulting Site",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200",
  },
  {
    title: "KYMA",
    subtitle: "AI Agency",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-10">
        
        <h2 className="text-6xl font-bold tracking-tight">
          Latest Projects
        </h2>

        {/* profile pill */}
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium">Joseph Alexander</span>
          <span className="text-gray-400">•••</span>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        
        {projects.map((project, i) => (
          <div key={i} className="space-y-4">
            
            {/* IMAGE CARD */}
            <div className="rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300">
              <ProjectCard image={project.image} />
            </div>

            {/* TEXT */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-500 text-sm">
                  {project.subtitle}
                </p>
              </div>

              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-black">
                View Project <ArrowUpRight size={16} />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
} 