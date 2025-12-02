import { TrendingUp, Users, BarChart3, ShoppingCart, TrafficCone, Rocket, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "E-commerce Demand Forecasting",
    tech: ["Python", "ARIMA", "Prophet", "Time Series"],
    year: "2024",
    icon: TrendingUp,
    featured: true,
    description: "Built advanced forecasting models for inventory optimization",
    impact: "18% accuracy improvement",
    achievements: [
      "Developed ARIMA and Prophet forecasting models for 1,000+ SKUs",
      "Improved forecast accuracy by 18%, enabling better inventory planning",
      "Created interactive dashboards highlighting sales trends, anomalies, and seasonality patterns",
    ],
  },
  {
    title: "Customer Segmentation Engine",
    tech: ["Python", "K-Means", "Hierarchical Clustering", "RFM"],
    year: "2024",
    icon: Users,
    featured: true,
    description: "ML-powered customer analytics for targeted engagement",
    impact: "10,000+ customers analyzed",
    achievements: [
      "Segmented 10,000+ customers using RFM metrics and clustering algorithms",
      "Identified high-value customer groups for targeted engagement strategies",
      "Built visualization dashboards for segments, lifetime value, and behavior trends",
    ],
  },
  {
    title: "HR Analytics Dashboard",
    tech: ["Power BI", "DAX", "Power Query"],
    year: "2023",
    icon: BarChart3,
    featured: true,
    description: "Comprehensive workforce analytics platform",
    impact: "80% workload reduction",
    achievements: [
      "Built dashboards tracking attrition, attendance, and performance for 500+ employees",
      "Automated HR reporting workflows using Power Query, reducing workload by 80%",
      "Delivered actionable insights enabling data-driven workforce planning",
    ],
  },
  {
    title: "Auction Platform Analytics",
    tech: ["MERN Stack", "MongoDB", "A/B Testing"],
    year: "2023",
    icon: ShoppingCart,
    description: "Full-stack analytics for bidding optimization",
    impact: "Enhanced conversion",
    achievements: [
      "Tracked user engagement, bidding funnels, and conversion metrics",
      "Conducted A/B experimentation to suggest UX and feature improvements",
    ],
  },
  {
    title: "Smart Traffic Optimization",
    tech: ["Python", "Machine Learning", "Data Visualization"],
    year: "2023",
    icon: TrafficCone,
    description: "AI-driven traffic flow analysis and optimization",
    impact: "15% flow improvement",
    achievements: [
      "Built models to detect congestion patterns and propose optimizations",
      "Visualized results and presented insights to stakeholders",
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-32 px-6 bg-surface-subtle relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(174_72%_56%/0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Impactful solutions that demonstrate analytical excellence and strategic thinking
          </p>
        </div>
        
        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {projects.filter(p => p.featured).map((project, index) => {
            const Icon = project.icon;
            return (
              <article 
                key={index}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              >
                {/* Featured badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gold/10 border border-gold/30">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-xs font-semibold text-gold">Featured</span>
                  </div>
                </div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-premium group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Impact */}
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{project.impact}</span>
                </div>
                
                {/* Achievements */}
                <ul className="space-y-3 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        
        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => {
            const Icon = project.icon;
            return (
              <article 
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">{project.impact}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 rounded-full bg-secondary text-xs text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Projects;
