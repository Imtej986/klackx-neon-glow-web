import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Ways to Scale Your Business with Automation",
      excerpt: "Discover how intelligent automation can transform your business operations and drive sustainable growth in today's competitive market.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Automation"
    },
    {
      title: "The Future of Enterprise Software",
      excerpt: "Explore the emerging trends and technologies that will shape the next generation of enterprise software solutions.",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      title: "Security Best Practices for Growing Companies",
      excerpt: "Essential security measures every growing company should implement to protect their data and maintain customer trust.",
      author: "David Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Security"
    },
    {
      title: "Customer Success Stories: Real Growth Results",
      excerpt: "See how our customers have achieved remarkable growth using KlackX's powerful platform and automation tools.",
      author: "Emily Parker",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      category: "Case Studies"
    },
    {
      title: "Building Scalable APIs for Modern Applications",
      excerpt: "Learn the architectural patterns and best practices for creating APIs that can handle enterprise-scale traffic.",
      author: "Alex Thompson",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      category: "Development"
    },
    {
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Transform your raw data into actionable business insights with advanced analytics and visualization techniques.",
      author: "Lisa Wang",
      date: "Dec 3, 2024",
      readTime: "6 min read",
      category: "Analytics"
    }
  ];

  const categories = ["All", "Automation", "Technology", "Security", "Case Studies", "Development", "Analytics"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
            KlackX
            <span className="gradient-text"> Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Insights, tips, and stories about scaling your business with modern technology. 
            Stay updated with the latest trends and best practices.
          </p>
        </div>
      </section>

      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "gradient-button" : "border-border hover:bg-secondary/50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="glow-card p-6 rounded-2xl group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glow-card p-8 rounded-2xl animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with
              <span className="gradient-text"> KlackX</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <a href="/contact">
                <Button className="gradient-button px-6 py-3">
                  Subscribe
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
