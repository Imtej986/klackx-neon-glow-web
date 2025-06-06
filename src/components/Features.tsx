
import { Zap, Shield, Rocket, BarChart3, Users, Settings } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description: "Experience unparalleled speed with our optimized infrastructure designed for enterprise-scale operations.",
      delay: "0.1s"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols ensure your data remains protected with end-to-end encryption.",
      delay: "0.2s"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Deployment",
      description: "Get up and running in minutes with our one-click deployment and automated setup process.",
      delay: "0.3s"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive analytics and real-time business intelligence.",
      delay: "0.4s"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Streamline workflows with powerful collaboration tools designed for modern teams.",
      delay: "0.5s"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Seamless Integration",
      description: "Connect with your existing tools through our extensive API and plugin ecosystem.",
      delay: "0.6s"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Choose
            <span className="gradient-text"> KlackX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the features that make KlackX the preferred choice for businesses 
            looking to scale efficiently and securely.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glow-card p-8 rounded-2xl group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: feature.delay }}
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
