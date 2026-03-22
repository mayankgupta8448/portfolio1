"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projectsData = [
  {
    title: "Market Intelligence AI Chatbot",
    description: "AI powered chatbot that provides market intelligence and financial insights with conversational memory and API integrations.",
    techStack: ["FastAPI", "OpenAI GPT-4", "MCP", "Redis", "Docker"],
    githubUrl: "https://github.com/mayankgupta8448",
  },
  {
    title: "AI Resume Generator",
    description: "AI based resume builder that generates professional resumes with customizable templates and PDF download.",
    techStack: ["ReactJS", "Spring Boot", "MongoDB"],
    githubUrl: "https://github.com/mayankgupta8448",
  },
  {
    title: "Restaurant Reservation System",
    description: "Web application that allows users to reserve tables online with authentication and real-time reservation management.",
    techStack: ["MongoDB", "Express", "React", "NodeJS"],
    githubUrl: "https://github.com/mayankgupta8448",
  }
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Some of my recent work bridging AI and Full Stack Development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-border/50 to-transparent hover:from-primary/50 hover:to-primary/10 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col justify-between h-full p-8 rounded-[23px] bg-background/80 backdrop-blur-xl transition-all duration-500">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit group-hover:scale-110 transition-transform duration-500">
                        <CodeIcon />
                      </div>
                      <div className="flex gap-3 relative z-10">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 rounded-full text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-all">
                          <Github size={22} />
                        </a>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs font-semibold text-foreground/80 bg-foreground/5 px-3 py-1.5 rounded-full border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}
