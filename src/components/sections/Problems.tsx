import { AlertTriangle, SearchX, Clock, Ban } from "lucide-react";

const problems = [
  {
    icon: SearchX,
    title: "Invisible on Google",
    description: "Your customers search for local trades every day. If your business doesn't show up, they're calling your competitors instead.",
  },
  {
    icon: Ban,
    title: "Outdated or no website",
    description: "A poor website or no website at all means lost trust and lost leads. Customers move on in seconds if your site looks unprofessional.",
  },
  {
    icon: Clock,
    title: "Wasting time on bad leads",
    description: "Without a clear website and proper local presence, you attract tyre-kickers instead of serious customers ready to book.",
  },
  {
    icon: AlertTriangle,
    title: "Generic agencies don't get trades",
    description: "Most web designers don't understand how local customers find and choose tradespeople. You need a specialist who does.",
  },
];

const Problems = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Good at your trade but struggling to get found online?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most trade businesses lose thousands of pounds in potential work every year simply because customers can't find them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1.5">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
