
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Scale Your
                <span className="gradient-text block">Business</span>
                <span className="text-foreground">with KlackX</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Powerful software solutions designed to accelerate your business growth. 
                Transform your operations with cutting-edge technology and seamless automation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <Button className="gradient-button text-lg px-8 py-6 rounded-xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/about">
                <Button 
                  variant="outline" 
                  className="text-lg px-8 py-6 rounded-xl border-border hover:bg-secondary/50 transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex items-center justify-center">
            <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-border/30 flex items-center justify-center relative overflow-hidden animate-float">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-pulse-glow" style={{animationDelay: '1s'}}></div>
              
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                alt="Modern technology visualization" 
                className="w-full h-full object-cover rounded-3xl opacity-80"
              />
              
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl"></div>
              <div className="absolute inset-0 backdrop-blur-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
