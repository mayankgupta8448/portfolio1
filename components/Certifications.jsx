"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certificationsData = [
  { name: "AWS Cloud Practitioner Essentials", issuer: "AWS" },
  { name: "Generative AI Professional", issuer: "Oracle" },
  { name: "Data Analytics", issuer: "Cisco" },
  { name: "Full Stack Development", issuer: "Udemy" }
];

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Professional training and certifications I have completed to enhance my skill set.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certificationsData.map((cert, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CheckCircle2 className="text-primary shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
