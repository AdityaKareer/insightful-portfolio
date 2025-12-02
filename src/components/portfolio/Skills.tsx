import { Code2, BarChart3, Users, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Expertise",
    icon: Code2,
    description: "Advanced tools & technologies",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 92 },
      { name: "Excel & Scenario Modeling", level: 98 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 88 },
      { name: "Pandas & NumPy", level: 93 },
      { name: "ETL Pipelines", level: 85 },
      { name: "Git", level: 82 },
    ],
  },
  {
    title: "Analytics & Strategy",
    icon: BarChart3,
    description: "Data-driven decision making",
    skills: [
      { name: "KPI Development", level: 95 },
      { name: "Market Intelligence", level: 90 },
      { name: "Statistical Modeling", level: 92 },
      { name: "A/B Testing", level: 88 },
      { name: "Trend Forecasting", level: 91 },
      { name: "Funnel Analysis", level: 87 },
      { name: "Data Storytelling", level: 94 },
      { name: "Business Planning", level: 89 },
    ],
  },
  {
    title: "Leadership & Collaboration",
    icon: Users,
    description: "Driving team success",
    skills: [
      { name: "Cross-functional Teams", level: 93 },
      { name: "Stakeholder Communication", level: 95 },
      { name: "Agile Workflows", level: 88 },
      { name: "Documentation", level: 90 },
      { name: "Requirements Gathering", level: 86 },
      { name: "Project Support", level: 91 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-32 px-6 bg-surface-subtle relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(174_72%_56%/0.05),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Core Competencies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit refined through hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-premium">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-premium rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
