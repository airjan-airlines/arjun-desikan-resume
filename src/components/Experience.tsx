import { MapPin, Calendar, Building, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Student Researcher",
      company: "Harvard OpenBIO Laboratory's Student Research Institute",
      period: "Summer 2025",
      location: "Cambridge, MA",
      type: "Research",
      description: "Lead bioinformatics research quantifying the effects of SCNA burden on tumor gene expression and dimensionality",
      achievements: [
        "First Author publication in Harvard Journal",
        "Learned from world-renowned researchers of the caliber of Gregory A. Petsko",
        "Developed novel approaches to gene expression analysis",
        "Presented findings to research community"
      ],
      skills: ["bioinformatics", "Gene Expression", "Research Writing", "Data Analysis"]
    },
    {
      id: 2,
      role: "Data Analytics Intern",
      company: "Fort Bend County Health Department",
      period: "Summer 2025",
      location: "Fort Bend, TX",
      type: "Internship",
      description: "Exploratory data analysis on mortality data and disease forecasting",
      achievements: [
        "Reduced disease forecasting error by 50%+ using XGBoost and Prophet",
        "Conducted comprehensive exploratory data analysis on mortality trends",
        "Prototyped LSTM implementation for time series prediction",
        "Delivered actionable insights to public health officials"
      ],
      skills: ["XGBoost", "Prophet", "LSTM", "Data Visualization", "Public Health Analytics"]
    }
  ];

  const education = [
    {
      id: 1,
      institution: "Seven Lakes High School",
      degree: "High School Diploma",
      period: "Class of 2026",
      gpa: "4.76 Weighted GPA",
      achievements: ["1560 SAT Score"]
    },
    {
      id: 2,
      institution: "Texas A&M University",
      degree: "Data Science Summer Program",
      period: "2025",
      achievement: "1st Place Competition Winner"
    },
    {
      id: 3,
      institution: "Harvard University",
      degree: "Summer Research Institute",
      period: "2025",
      achievement: "First Author Publication"
    },
    {
      id: 4,
      institution: "Texas A&M University",
      degree: "GenCyber Computing Academy",
      period: "2024",
      achievement: "Cybersecurity Specialization"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research and internship experiences in data science and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="glass-card p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {exp.type}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-1 text-accent" />
                      Key Achievements
                    </h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-3 h-6 w-6 text-accent" />
              Education & Programs
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="glass-card p-6 animate-slide-up"
                  style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold">{edu.institution}</h4>
                      <p className="text-sm text-primary">{edu.degree}</p>
                      {'gpa' in edu && (
                        <p className="text-sm text-muted-foreground">{edu.gpa}</p>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{edu.period}</div>
                  </div>
                  
                  {/* Achievement */}
                  {'achievement' in edu && (
                    <div className="text-sm font-medium text-accent">
                      🏆 {edu.achievement}
                    </div>
                  )}
                  
                  {'achievements' in edu && (
                    <div className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="text-sm font-medium text-accent">
                          🏆 {achievement}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;