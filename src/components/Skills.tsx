import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 75 },
      ]
    },
    {
      category: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "XGBoost", level: 92 },
        { name: "Prophet", level: 88 },
        { name: "LSTM", level: 85 },
        { name: "DQNs", level: 82 },
        { name: "Sci-BERT", level: 80 },
        { name: "HDBScan", level: 78 },
      ]
    },
    {
      category: "Web Development",
      icon: Wrench,
      skills: [
        { name: "React", level: 85 },
        { name: "Flask", level: 88 },
        { name: "FastAPI", level: 85 },
        { name: "Electron", level: 80 },
        { name: "RShiny", level: 75 },
      ]
    },
    {
      category: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "SQLite", level: 90 },
        { name: "Supabase", level: 80 },
        { name: "Git", level: 88 },
        { name: "pgvector", level: 75 },
      ]
    }
  ];

  const technicalExpertise = [
    "Data Cleaning & Preprocessing",
    "Statistical Analysis",
    "Time Series Forecasting",
    "Natural Language Processing",
    "Computer Vision",
    "Deep Learning",
    "Reinforcement Learning",
    "Data Visualization",
    "Bioinformatics",
    "Algorithm Design",
    "Research Methodology",
    "Technical Writing"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in data science, machine learning, and software development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="glass-card p-6 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <category.icon className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Expertise */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Areas of <span className="gradient-text">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technicalExpertise.map((expertise, index) => (
              <div
                key={expertise}
                className="flex items-center p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-muted/40 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm font-medium">{expertise}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Tools */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Adobe Creative Suite",
              "Autodesk Revit",
              "Jupyter Notebooks",
              "VS Code",
              "Docker",
              "Linux",
              "AWS",
              "Google Cloud",
              "Tableau",
              "Power BI"
            ].map((tool, index) => (
              <span
                key={tool}
                className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;