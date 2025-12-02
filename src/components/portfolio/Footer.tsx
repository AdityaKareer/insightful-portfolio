import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">
          Let's connect.
        </h2>
        
        <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a conversation about data and analytics.
        </p>
        
        {/* CTA Button */}
        <a 
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300"
        >
          Get in touch
          <ArrowUpRight className="w-5 h-5" />
        </a>
        
        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <a 
            href="mailto:your.email@example.com"
            className="text-background/60 hover:text-background transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 hover:text-background transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 hover:text-background transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
        
        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Your Name. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
