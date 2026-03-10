import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Phone, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const GetStarted = () => {
  useEffect(() => {
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
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "30min", { origin: "https://app.cal.com" });
    Cal.ns["30min"]("inline", {
      elementOrSelector: "#cal-get-started",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "ne1webdesign/30min",
    });
    Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Get Started | Free Consultation | NE1 Digital"
        description="Book a free call to discuss your website and SEO. No obligation, no jargon, just honest advice."
        canonical="https://ne1webdesign.co.uk/get-started"
      />
      <section className="gradient-trades text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Get Started
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to get more enquiries?
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            Pick a time that works for you and we'll have a free, no-obligation discovery call to discuss how we can help your business grow.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Cal.com Embed */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-foreground mb-6">Book your free discovery call</h2>
              <div
                id="cal-get-started"
                className="w-full min-h-[500px] overflow-auto rounded-lg border border-border"
              />
            </div>

            {/* Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-6">What you'll get from the call</h2>
              <div className="space-y-4 mb-8">
                {[
                  "A clear understanding of your current online position",
                  "Honest assessment of what's working and what isn't",
                  "Specific recommendations tailored to your business",
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
                <h3 className="font-heading font-semibold text-foreground mb-2">Prefer to get in touch another way?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Give us a call or head to our contact page.
                </p>
                <a href="tel:01916941463" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                  <Phone className="w-4 h-4" />
                  0191 694 1463
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