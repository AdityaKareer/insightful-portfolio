import { TrendingUp, Users, BarChart3, ShoppingCart, TrafficCone } from "lucide-react";

const projects = [
  {
    title: "E-commerce Demand Forecasting",
    tech: "Python, ML, Time Series",
    year: "2024",
    icon: TrendingUp,
    description: "Built ARIMA and Prophet forecasting models for 1,000+ SKUs",
    achievements: [
      "Improved forecast accuracy by 18%",
      "Delivered insights for inventory planning",
      "Created dashboards highlighting sales trends, anomalies, and seasonality",
    ],
  },
  {
    title: "Customer Segmentation",
    tech: "Python, Clustering",
    year: "2024",
    icon: Users,
    description: "Used K-Means and Hierarchical Clustering to segment 10,000+ customers",
    achievements: [
      "Segmented customers using RFM metrics",
      "Identified high-value groups",
      "Built dashboards visualizing segments and lifetime value",
    ],
  },
  {
    title: "HR Analytics Dashboard",
    tech: "Power BI, DAX",
    year: "2023",
    icon: BarChart3,
    description: "Built dashboards for attrition, attendance, and performance",
    achievements: [
      "Analyzed data for 500+ employees",
      "Automated HR reporting workflows using Power Query",
      "Reduced workload by 80%",
    ],
  },
  {
    title: "Online Auction Platform Analytics",
    tech: "MERN, MongoDB",
    year: "2023",
    icon: ShoppingCart,
    description: "Tracked user engagement, bidding funnels, and conversion metrics",
    achievements: [
      "Used A/B experimentation to suggest UX improvements",
      "Analyzed feature adoption patterns",
    ],
  },
  {
    title: "Smart Traffic Flow Optimization",
    tech: "Python, ML",
    year: "2023",
    icon: TrafficCone,
    description: "Built models to detect congestion patterns",
    achievements: [
      "Proposed optimizations improving flow by 15%",
      "Visualized results and presented insights to stakeholders",
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-16 text-center">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article 
                key={index}
                className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                
                {/* Title & Tech */}
                <h3 className="text-lg font-semibold text-foreground tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {project.tech}
                </p>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Achievements */}
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
