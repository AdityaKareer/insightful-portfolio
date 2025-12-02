const skillCategories = [
  {
    title: "Technical",
    skills: [
      "Excel (Scenario Modeling)",
      "SQL",
      "Python",
      "Pandas & NumPy",
      "Power BI",
      "Tableau",
      "Data Wrangling",
      "ETL Pipelines",
      "API Data Extraction",
      "Git",
    ],
  },
  {
    title: "Analytics",
    skills: [
      "KPI Development",
      "Market Intelligence",
      "Strategy Analysis",
      "Business Planning",
      "A/B Testing",
      "Trend Forecasting",
      "Funnel Analysis",
      "Statistical Modeling",
      "Reporting Automation",
      "Data Storytelling",
    ],
  },
  {
    title: "Collaboration",
    skills: [
      "Cross-functional Teams",
      "Documentation",
      "Stakeholder Communication",
      "Agile Workflows",
      "Requirements Gathering",
      "Project Support",
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-16 text-center">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 tracking-tight">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
