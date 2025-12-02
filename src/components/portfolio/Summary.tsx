import { Sparkles, Target, TrendingUp, Brain } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Analytical Rigor", value: "Statistical Modeling" },
  { icon: Target, label: "Strategic Focus", value: "Data-Driven Decisions" },
  { icon: TrendingUp, label: "Impact", value: "Business Growth" },
];

const Summary = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-semibold tracking-widest uppercase text-primary">
            About Me
          </h2>
        </div>
        
        <p className="text-3xl md:text-4xl lg:text-5xl font-display leading-snug text-foreground tracking-tight">
          Detail-oriented Analyst with strong analytical rigor and experience in{" "}
          <span className="gradient-text">strategy-oriented research</span>,{" "}
          <span className="gradient-text">scenario modeling</span>, and presenting insights to leadership.
        </p>
        
        <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          I specialize in turning complex data into clear, actionable recommendations across business, 
          technology, and operations. My foundation combines statistics, calculus-driven reasoning, 
          structured problem-solving, and competitive landscape analysis.
        </p>
        
        {/* Highlight cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.label}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 w-fit rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Summary;
