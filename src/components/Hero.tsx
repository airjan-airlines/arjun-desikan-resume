import { ArrowDown, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block">Arjun</span>
          <span className="block gradient-text">Desikan</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-2">
          Data Scientist & Machine Learning Developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground/80 mb-8">
          High School Senior • Researcher • Full-Stack Developer
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base">
          <a 
            href="mailto:arjundesikan2008@gmail.com" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={16} />
            arjundesikan2008@gmail.com
          </a>
          <a 
            href="tel:(832) 352-8899" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={16} />
            (832) 352-8899
          </a>
          <a 
            href="https://linkedin.com/in/arjun-desikan-320b76304/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:bg-primary/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 glass-card p-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">4.75</div>
            <div className="text-sm text-muted-foreground">GPA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1560</div>
            <div className="text-sm text-muted-foreground">SAT Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1st</div>
            <div className="text-sm text-muted-foreground">State Champion</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;