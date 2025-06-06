
const Stats = () => {
  const stats = [
    {
      number: "10M+",
      label: "Transactions Processed",
      description: "Daily processing volume"
    },
    {
      number: "150+",
      label: "Countries Served",
      description: "Global reach and presence"
    },
    {
      number: "99.99%",
      label: "System Reliability",
      description: "Guaranteed uptime SLA"
    },
    {
      number: "2.5x",
      label: "Revenue Growth",
      description: "Average customer increase"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Trusted by
            <span className="gradient-text"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of companies that have transformed their business with KlackX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 glow-card rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
