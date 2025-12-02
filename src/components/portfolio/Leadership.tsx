import { Award, Users, TrendingUp, Crown } from "lucide-react";

const leadership = [
  {
    title: "PR Head",
    organization: "Computer Society of India",
    icon: Award,
    impact: "65% engagement boost",
    achievement: "Leveraged analytics to optimize event promotion strategies, implementing data-driven campaigns that boosted engagement by 65%",
    skills: ["Analytics", "Marketing Strategy", "Event Promotion"],
  },
  {
    title: "Cultural Secretary",
    organization: "Student Council",
    icon: Users,
    impact: "30% participation increase",
    achievement: "Successfully managed 10+ large-scale events and improved participation by 30% through structured planning, stakeholder coordination, and effective communication",
    skills: ["Event Management", "Team Leadership", "Strategic Planning"],
  },
];

const Leadership = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground tracking-tight">
            Leadership & Impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving results through strategic leadership and collaborative excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <article 
                key={index}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-premium group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium">{item.organization}</p>
                    </div>
                  </div>
                  
                  {/* Impact badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{item.impact}</span>
                    </div>
                  </div>
                  
                  {/* Achievement */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.achievement}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
