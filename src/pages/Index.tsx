import { Helmet } from "react-helmet-async";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import Summary from "@/components/portfolio/Summary";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Leadership from "@/components/portfolio/Leadership";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Your Name | Data Analyst & Strategy Specialist</title>
        <meta 
          name="description" 
          content="Detail-oriented Data Analyst with expertise in strategy research, scenario modeling, and data-driven insights. View portfolio and professional experience." 
        />
        <meta name="keywords" content="Data Analyst, Business Intelligence, Python, SQL, Power BI, Tableau, Strategy Analysis" />
        <link rel="canonical" href="https://yourportfolio.com" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navigation />
        
        <Hero />
        
        <section id="about">
          <Summary />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="leadership">
          <Leadership />
        </section>
        
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Index;
