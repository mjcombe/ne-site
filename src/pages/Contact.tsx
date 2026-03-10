import Layout from "@/components/layout/Layout";
import { Mail, Clock, Phone } from "lucide-react";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";

const Contact = () => {
  useEffect(() => {
    // Cal.com embed script
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else
            p(cal, ar);
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "30min", { origin: "https://app.cal.com" });
    Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "ne1webdesign/30min",
    });
    Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Contact NE1 Digital | Book a Free Call"
        description="Get in touch to discuss your website or SEO project. Offices in North Tyneside and Teesside, serving businesses everywhere."
        canonical="https://ne1webdesign.co.uk/contact"
      />
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
            Contact
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Book a free discovery call
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            Pick a time that works for you. We'll have a quick chat about your business and how we can help you get more enquiries.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Cal.com Embed */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-foreground mb-6">Choose a time</h2>
              <div
                id="my-cal-inline-30min"
                className="w-full min-h-[500px] overflow-auto rounded-lg border border-border"
              />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-6">Get in touch directly</h2>
              <div className="space-y-6">
                <a href="tel:01916941463" className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors group">
                  <div className="w-10 h-10 rounded-md bg-icon-bg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Call us</span>
                    <span className="block text-sm text-muted-foreground">0191 694 1463</span>
                  </div>
                </a>

                <a href="mailto:hello@ne1webdesign.co.uk" className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors group">
                  <div className="w-10 h-10 rounded-md bg-icon-bg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Email us</span>
                    <span className="block text-sm text-muted-foreground">hello@ne1webdesign.co.uk</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-md bg-icon-bg flex items-center justify-center shrink-0">
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
                  <li className="flex gap-2"><span className="text-accent font-semibold">1.</span> Pick a time that suits you</li>
                  <li className="flex gap-2"><span className="text-accent font-semibold">2.</span> We'll have a free 30-minute discovery call</li>
                  <li className="flex gap-2"><span className="text-accent font-semibold">3.</span> We'll discuss your business goals and challenges</li>
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