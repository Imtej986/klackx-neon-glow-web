
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "hello@klackx.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "San Francisco, CA",
      description: "Come say hello at our HQ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
            Get in
            <span className="gradient-text"> Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glow-card p-8 rounded-2xl animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Your Company" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <Button className="gradient-button w-full text-lg py-6">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="glow-card p-6 rounded-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <div className="text-xl font-bold gradient-text mb-1">{item.info}</div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* FAQ Section */}
              <div className="glow-card p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-1">How quickly do you respond?</h4>
                    <p className="text-sm text-muted-foreground">We typically respond within 2-4 hours during business hours.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Do you offer phone support?</h4>
                    <p className="text-sm text-muted-foreground">Yes, phone support is available for all enterprise customers.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Can I schedule a demo?</h4>
                    <p className="text-sm text-muted-foreground">Absolutely! Use the contact form to request a personalized demo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
