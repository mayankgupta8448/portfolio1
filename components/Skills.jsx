"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "C", "C++", "JavaScript", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["ReactJS", "NodeJS", "ExpressJS"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Cisco Packet Tracer", "Docker"]
  },
  {
    category: "Core Concepts",
    items: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "OOPS", "Computer Networks"]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Technical Skills</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive view of my technical expertise and tools I use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {skillsData.map((skillGroup, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="p-[1px] rounded-3xl bg-gradient-to-b from-border/50 to-transparent hover:from-primary/50 transition-all duration-500 shadow-sm hover:shadow-lg"
              >
                <div className="h-full p-8 lg:p-10 rounded-[23px] bg-background/80 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold mb-8 text-foreground">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2.5 rounded-full bg-foreground/5 border border-border/50 text-foreground/80 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                      >
                        {skill}
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
