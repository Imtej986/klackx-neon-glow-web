
import Navigation from '@/components/Navigation';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Every decision we make is driven by what's best for our customers and their success."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge solutions that drive growth."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code to customer service."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Our mission is to empower businesses worldwide to achieve their full potential."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
            About
            <span className="gradient-text"> KlackX</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            We're on a mission to revolutionize how businesses scale and grow in the digital age. 
            Founded by industry experts, KlackX combines cutting-edge technology with deep business insight.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  KlackX was born from a simple observation: businesses of all sizes were struggling 
                  to scale efficiently in an increasingly complex digital landscape. Traditional 
                  solutions were either too rigid or too complex.
                </p>
                <p>
                  Our founding team, with over 50 years of combined experience in enterprise software, 
                  set out to create a platform that would democratize access to enterprise-grade 
                  scaling solutions.
                </p>
                <p>
                  Today, KlackX powers thousands of businesses worldwide, from fast-growing startups 
                  to Fortune 500 companies, helping them achieve sustainable growth through 
                  intelligent automation and seamless integration.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-border/30 flex items-center justify-center animate-float">
                <div className="text-6xl text-primary/30 font-bold">Story</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
              Our
              <span className="gradient-text"> Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              These core principles guide everything we do and shape the way we build products and serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glow-card p-8 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
