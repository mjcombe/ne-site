import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trade: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thanks for your enquiry! We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", phone: "", trade: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Contact
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Get in touch
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            Have a question or ready to get started? Drop us a message or give us a call. We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-foreground mb-6">Send us an enquiry</h2>
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
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <Input
                      type="tel"
                      placeholder="07xxx xxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      maxLength={20}
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
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                  <Textarea
                    placeholder="Tell us about your business and what you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    maxLength={1000}
                    required
                  />
                </div>
                <Button variant="cta" size="lg" type="submit" disabled={submitting} className="w-full sm:w-auto">
                  {submitting ? "Sending..." : "Send Enquiry"}
                </Button>
                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-6">Get in touch directly</h2>
              <div className="space-y-6">
                <a href="tel:07463687129" className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors group">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Call us</span>
                    <span className="block text-sm text-muted-foreground">07463 687129</span>
                  </div>
                </a>

                <a href="mailto:hello@ne1webdigital.co.uk" className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors group">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Email us</span>
                    <span className="block text-sm text-muted-foreground">hello@ne1webdigital.co.uk</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">Location</span>
                    <span className="block text-sm text-muted-foreground">Suite 2.6a, North Tyneside Business Centre,<br />North Shields, NE30 1NT</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">Response time</span>
                    <span className="block text-sm text-muted-foreground">Within 24 hours, Mon–Fri</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-lg bg-accent/5 border border-accent/20">
                <h3 className="font-heading font-semibold text-foreground mb-2">What happens next?</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-accent font-semibold">1.</span> We receive your enquiry and review it</li>
                  <li className="flex gap-2"><span className="text-accent font-semibold">2.</span> We get back to you within 24 hours</li>
                  <li className="flex gap-2"><span className="text-accent font-semibold">3.</span> We book a free discovery call to understand your business</li>
                  <li className="flex gap-2"><span className="text-accent font-semibold">4.</span> We send you a clear proposal with no obligation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
