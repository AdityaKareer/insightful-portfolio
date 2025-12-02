import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-foreground animate-fade-in-up leading-tight">
          Your Name
        </h1>
        
        {/* Title */}
        <p className="mt-6 text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light tracking-tight animate-fade-in-up-delay-1">
          Data Analyst & Strategy Specialist
        </p>
        
        {/* Location */}
        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground animate-fade-in-up-delay-2">
          <MapPin className="w-4 h-4" />
          <span className="text-base">City, Country</span>
        </div>
        
        {/* Contact Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 animate-fade-in-up-delay-3">
          <a 
            href="mailto:your.email@example.com" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">your.email@example.com</span>
          </a>
          
          <a 
            href="tel:+000000000000" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">+00 0000000000</span>
          </a>
        </div>
        
        {/* Social Links */}
        <div className="mt-6 flex items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          
          <a 
            href="https://github.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-20 animate-fade-in-delay-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-border mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
