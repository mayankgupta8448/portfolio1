"use client";

import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Code } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              <p>
                I am a student at ABES Engineering College with a strong interest in Full Stack Development, AI applications, and Data Structures & Algorithms.
              </p>
              <p>
                I have experience building scalable web applications using React, NodeJS, and modern technologies. I am passionate about leveraging AI to build intelligent solutions and am constantly learning new tools and frameworks to expand my skill set.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: User, label: "Role", value: "Full Stack Developer" },
                { icon: MapPin, label: "Location", value: "Ghaziabad, India" },
                { icon: GraduationCap, label: "Education", value: "ABES Engineering College" },
                { icon: Code, label: "Interests", value: "AI, DSA, Web Dev" }
              ].map((item, index) => (
                <div key={index} className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-border/50 to-transparent hover:from-primary/50 transition-colors duration-500">
                  <div className="flex flex-col gap-4 p-8 h-full rounded-[23px] bg-background/80 backdrop-blur-xl">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.label}</h3>
                      <p className="text-base text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
