
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const benefits = [
    "14-day free trial",
    "No credit card required",
    "24/7 customer support",
    "Cancel anytime"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glow-card p-12 rounded-3xl animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Scale Your
            <span className="gradient-text block">Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust KlackX to power their growth. 
            Start your free trial today and see the difference.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-button text-lg px-8 py-6 rounded-xl">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-xl border-border hover:bg-secondary/50 transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
