import { ExternalLink, Github, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ForgeQB",
      subtitle: "Founder & Lead ML Developer",
      period: "Feb 2025 - Present",
      description: "Full-stack Quizbowl study app with adaptive learning using content-based filtering recommendation system",
      achievements: [
        "Developed content-based filtering recommendation system",
        "Implemented DQNs for adaptive learning",
        "Built with Electron for cross-platform compatibility"
      ],
      techStack: ["Electron", "Python", "Flask", "SQLite", "DQNs", "HDBScan"],
      status: "Beta Release August 2025",
      featured: true,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Setos.ai",
      subtitle: "Co-founder & Backend Developer",
      period: "June 2025 - Present",
      description: "Research paper pathway generator using NLP and LLM-powered recommendation system",
      achievements: [
        "Built LLM-powered recommendation system",
        "Implemented Sci-BERT for research paper analysis",
        "Developed vector search using pgvector"
      ],
      techStack: ["React", "Python", "FastAPI", "PostgreSQL", "Supabase", "Sci-BERT", "pgvector"],
      status: "MVP Release September 2025",
      featured: true,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Coronary Artery Disease Analysis",
      subtitle: "Team ML Developer",
      period: "June 2025",
      description: "R-based predictive modeling with custom web interface for disease prediction",
      achievements: [
        "1st place at Texas A&M Data Science Program",
        "Built interactive web interface with RShiny",
        "Achieved high accuracy with GLM models"
      ],
      techStack: ["R", "RShiny", "GLM", "Statistical Analysis"],
      status: "Competition Winner",
      featured: false,
      demoUrl: "https://arjun-desikan.shinyapps.io/shiny_predictor/",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative data science and machine learning solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card p-6 h-full flex flex-col ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <Star className="h-5 w-5 text-accent fill-current" />
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3" />
                    {project.period}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs tech-badge"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="mb-4">
                <Badge 
                  variant="outline" 
                  className="border-accent text-accent"
                >
                  {project.status}
                </Badge>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <Button size="sm" variant="outline" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;