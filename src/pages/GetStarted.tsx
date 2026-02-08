import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trade: "",
    website: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Brilliant! We'll be in touch to arrange your free call.");
      setFormData({ name: "", email: "", phone: "", trade: "", website: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Get Started
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to get more enquiries?
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            Fill in the form below and we'll arrange a free, no-obligation discovery call to discuss how we can help your trade business grow.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-foreground mb-6">Book your free discovery call</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      maxLength={100}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      maxLength={255}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="07xxx xxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      maxLength={20}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Your trade</label>
                    <Input
                      placeholder="e.g. Electrician, Plumber"
                      value={formData.trade}
                      onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                      maxLength={100}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Current website (if any)</label>
                  <Input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Anything else we should know?</label>
                  <Textarea
                    placeholder="Tell us about your business goals, challenges, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                  />
                </div>
                <Button variant="cta" size="lg" type="submit" disabled={submitting} className="w-full sm:w-auto">
                  {submitting ? "Sending..." : "Book My Free Call"}
                  {!submitting && <ArrowRight className="w-5 h-5" />}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Free, no-obligation call. By submitting, you agree to our{" "}
                  <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-6">What you'll get from the call</h2>
              <div className="space-y-4 mb-8">
                {[
                  "A clear understanding of your current online position",
                  "Honest assessment of what's working and what isn't",
                  "Specific recommendations tailored to your trade",
                  "Transparent pricing with no hidden costs",
                  "A clear plan to start generating more enquiries",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-lg bg-card border border-border mb-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">Prefer to call?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Give us a ring and we'll have a quick chat about what you need.
                </p>
                <a href="tel:01911234567" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                  <Phone className="w-4 h-4" />
                  0191 123 4567
                </a>
              </div>

              <div className="p-5 rounded-lg gradient-navy text-primary-foreground">
                <p className="text-sm font-semibold mb-1">No pressure, no hard sell</p>
                <p className="text-xs text-primary-foreground/70 leading-relaxed">
                  If we're not the right fit, we'll tell you honestly. We'd rather give you good advice than chase a sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
