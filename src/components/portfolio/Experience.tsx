import { Briefcase, Building2, MapPin, Calendar, ArrowUpRight, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Web Development & Analytics Intern",
    company: "Orbitor",
    period: "Aug – Sept 2023",
    location: "Mumbai, India",
    type: "Internship",
    impact: "40% efficiency gain",
    achievements: [
      "Analyzed user engagement and behavioral patterns to identify conversion bottlenecks, driving strategic UX decisions",
      "Automated reporting dashboards for engineering and product teams, reducing manual work by 40%",
      "Collaborated with cross-functional teams to drive UX improvements, resulting in increased session duration",
      "Tracked KPIs for feature rollouts and supported roadmap prioritization with data-backed recommendations",
    ],
    technologies: ["Analytics", "Dashboard Automation", "UX Research", "KPI Tracking"],
  },
  {
    title: "Technical Support & Analytics Intern",
    company: "CrEAST X Larsen & Toubro",
    period: "Jul – Oct 2023",
    location: "Mumbai, India",
    type: "Internship",
    impact: "20% retention boost",
    achievements: [
      "Built interactive dashboards to track engagement, outcomes, and learning behavior for 50+ participants",
      "Conducted retention analysis and proposed improvements that raised completion rates by 20%",
      "Coordinated with technical teams to optimize workflows based on analytical findings",
    ],
    technologies: ["Dashboard Design", "Retention Analysis", "Workflow Optimization"],
  },
];

const Experience = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through impactful roles at innovative organizations
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article 
              key={index}
              className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              {/* Impact badge */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                  <TrendingUp className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">{exp.impact}</span>
                </div>
              </div>
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-premium w-fit">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-3">{exp.company}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="space-y-4 mb-8">
                {exp.achievements.map((achievement, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowUpRight className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-sm text-primary font-medium hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
