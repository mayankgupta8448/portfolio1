"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const achievements = [
  {
    title: "Solved 200+ DSA problems",
    platform: "LeetCode & GeeksforGeeks",
    icon: Trophy,
  },
  {
    title: "4-star badges in Python and C",
    platform: "HackerRank",
    icon: Award,
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Achievements</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-6 p-8 rounded-3xl bg-card border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <item.icon size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.platform}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
