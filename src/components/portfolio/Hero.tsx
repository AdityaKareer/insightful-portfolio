import { Mail, MapPin, Phone, Linkedin, Github, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_14%_20%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_14%_20%/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Available for Opportunities</span>
        </div>
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight text-foreground animate-fade-in-up leading-tight">
          Srujana
          <span className="block gradient-text">Makarande</span>
        </h1>
        
        {/* Title */}
        <p className="mt-8 text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light tracking-tight animate-fade-in-up-delay-1">
          Data Analyst & Strategy Specialist
        </p>
        
        {/* Tagline */}
        <p className="mt-4 text-base md:text-lg text-text-secondary max-w-xl mx-auto animate-fade-in-up-delay-2">
          Transforming complex data into strategic insights that drive business growth
        </p>
        
        {/* Location */}
        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground animate-fade-in-up-delay-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-base">Texas, USA</span>
        </div>
        
        {/* Contact Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 animate-fade-in-up-delay-3">
          <a 
            href="mailto:your.email@example.com" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm">your.email@example.com</span>
          </a>
          
          <a 
            href="tel:+000000000000" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm">+00 0000000000</span>
          </a>
        </div>
        
        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          
          <a 
            href="https://github.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-20 animate-fade-in-delay-3">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
