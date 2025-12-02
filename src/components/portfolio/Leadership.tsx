import { Award, Users } from "lucide-react";

const leadership = [
  {
    title: "PR Head",
    organization: "Computer Society of India",
    icon: Award,
    achievement: "Leveraged analytics to optimize event promotion, boosting engagement by 65%",
  },
  {
    title: "Cultural Secretary",
    organization: "Student Council",
    icon: Users,
    achievement: "Managed 10+ large-scale events and improved participation by 30% through structured planning and communication",
  },
];

const Leadership = () => {
  return (
    <section className="py-24 px-6 bg-surface-subtle">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-16 text-center">
          Leadership
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <article 
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {item.organization}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.achievement}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
