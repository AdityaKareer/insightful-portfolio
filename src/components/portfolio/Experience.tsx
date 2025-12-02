import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Web Development & Analytics Intern",
    company: "Orbitor",
    period: "Aug – Sept 2023",
    location: "Mumbai, India",
    achievements: [
      "Analyzed user engagement and behavioral patterns to identify conversion bottlenecks",
      "Automated reporting dashboards for engineering and product teams, reducing manual work by 40%",
      "Collaborated with cross-functional teams to drive UX improvements, increasing session duration",
      "Tracked KPIs for feature rollouts and supported roadmap prioritization",
    ],
  },
  {
    title: "Technical Support & Analytics Intern",
    company: "CrEAST X Larsen & Toubro",
    period: "Jul – Oct 2023",
    location: "Mumbai, India",
    achievements: [
      "Built interactive dashboards to track engagement, outcomes, and learning behavior for 50+ participants",
      "Conducted retention analysis and proposed improvements that raised completion rates by 20%",
      "Coordinated with technical teams to optimize workflows based on analytical findings",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6 bg-surface-subtle">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-16 text-center">
          Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article 
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              {/* Company badge */}
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">{exp.company}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                    {exp.title}
                  </h3>
                </div>
                
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
              </div>
              
              {/* Achievements */}
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
