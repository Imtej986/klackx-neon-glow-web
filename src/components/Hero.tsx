
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid h-[1200px] lg:h-[600px] grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          {/* Right side - 3D Visual Space */}
          <div className="flex items-center justify-center w-[100%] h-[100%]">
           
              {/* Placeholder for 3D visual */}
           <iframe src='https://my.spline.design/greendiamondshapedcolumbianemerald-W953lkPsgkhgwJgaCsJ4fvFB/' frameborder='0' width='100%' height='100%'></iframe>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
