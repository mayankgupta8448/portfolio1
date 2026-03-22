import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-2xl font-bold tracking-tighter mb-6">MG</div>
        
        <div className="flex gap-6 mb-8">
          <a href="https://github.com/mayankgupta8448" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/mayank-gupta-bb1b8626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground text-center">
          &copy; {currentYear} Mayank Gupta. All rights reserved. <br className="sm:hidden" />
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
