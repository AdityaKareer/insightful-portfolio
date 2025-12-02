import { Mail, Linkedin, Github, ArrowUpRight, Sparkles, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Main CTA section */}
      <div className="py-32 px-6 relative">
        {/* Background orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-foreground mb-6">
            Ready to create
            <span className="block gradient-text">something amazing?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about data and analytics.
          </p>
          
          {/* CTA Button */}
          <a 
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-premium text-primary-foreground rounded-full font-semibold text-lg hover:scale-105 hover:shadow-glow transition-all duration-300 group"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          
          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <a 
              href="mailto:your.email@example.com"
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="py-8 px-6 border-t border-border bg-surface-subtle">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Srujana Makarande. Crafted with 
            <Heart className="w-4 h-4 text-primary mx-1" />
            in Texas
          </p>
          
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
