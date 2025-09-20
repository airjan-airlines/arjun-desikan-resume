import { Trophy, Medal, Award, Star, Target, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Texas Quizbowl State Championship",
      subtitle: "1st Place Winner",
      year: "2025",
      icon: Trophy,
      category: "Competition",
      description: "Led team to state championship victory in academic quiz bowl competition",
      significance: "Demonstrated exceptional knowledge across multiple academic disciplines"
    },
    {
      id: 2,
      title: "Texas A&M Data Science Competition",
      subtitle: "1st Place Winner",
      year: "2025",
      icon: Medal,
      category: "Data Science",
      description: "Coronary Artery Disease Analysis project won first place among university students",
      significance: "Recognized for innovative predictive modeling and presentation skills"
    },
    {
      id: 3,
      title: "National Quizbowl Championships",
      subtitle: "33rd Place National Ranking",
      year: "2025",
      icon: Star,
      category: "National",
      description: "Achieved top 35 ranking in national academic competition",
      significance: "Competed against the best high school teams across the United States"
    },
    {
      id: 4,
      title: "International Research Olympiad",
      subtitle: "Semifinalist",
      year: "2025",
      icon: Award,
      category: "Research",
      description: "Advanced to semifinals in prestigious international research competition",
      significance: "Recognized for outstanding research methodology and scientific innovation"
    },
    {
      id: 5,
      title: "Academic Excellence",
      subtitle: "4.75 Weighted GPA",
      year: "Ongoing",
      icon: Target,
      category: "Academic",
      description: "Maintained exceptional academic performance throughout high school",
      significance: "Consistent high achievement across challenging coursework"
    },
    {
      id: 6,
      title: "SAT Achievement",
      subtitle: "1560 Score",
      year: "2025",
      icon: Star,
      category: "Standardized Test",
      description: "Achieved top 1% score on SAT college entrance examination",
      significance: "Demonstrates exceptional academic aptitude and test-taking skills"
    }
  ];

  const stats = [
    {
      number: "1st",
      label: "State Championship",
      description: "Texas Quizbowl"
    },
    {
      number: "33rd",
      label: "National Ranking",
      description: "Quiz Bowl Championships"
    },
    {
      number: "4.75",
      label: "Weighted GPA",
      description: "Academic Excellence"
    },
    {
      number: "1560",
      label: "SAT Score",
      description: "Top 1% Nationwide"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, competition victories, and research contributions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon and Category */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <achievement.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                  {achievement.category}
                </div>
              </div>

              {/* Title and Subtitle */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
                <p className="text-primary font-semibold text-sm">{achievement.subtitle}</p>
                <p className="text-xs text-muted-foreground">{achievement.year}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-3">
                {achievement.description}
              </p>

              {/* Significance */}
              <div className="pt-3 border-t border-border">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    {achievement.significance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Ready for New Challenges</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              With a proven track record of excellence in academics, competition, and research, 
              I'm excited to bring this same dedication and innovative thinking to new opportunities 
              in data science and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                View Projects
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;