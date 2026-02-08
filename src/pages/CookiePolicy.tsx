import Layout from "@/components/layout/Layout";

const CookiePolicy = () => (
  <Layout>
    <section className="gradient-navy text-primary-foreground section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-primary-foreground/70">Last updated: February 2026</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. What are cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">Cookies are small text files placed on your device when you visit a website. They help the website function properly, provide analytics, and improve your experience.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Cookies we use</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-1">Essential cookies</h3>
                <p className="text-sm text-muted-foreground">Required for the website to function properly. These cannot be disabled. They include cookies for cookie consent preferences and basic site functionality.</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-1">Analytics cookies</h3>
                <p className="text-sm text-muted-foreground">We use analytics cookies to understand how visitors use our website. This helps us improve our content and user experience. These cookies collect anonymous data.</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-1">Marketing cookies</h3>
                <p className="text-sm text-muted-foreground">We may use marketing cookies to deliver relevant advertising. These cookies track your activity across websites to help us show you ads that are more relevant to your interests.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Managing cookies</h2>
            <p className="text-muted-foreground leading-relaxed">You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, and set preferences for specific websites. Please note that disabling cookies may affect the functionality of our website.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Your consent</h2>
            <p className="text-muted-foreground leading-relaxed">When you first visit our website, you will see a cookie consent banner. You can choose to accept or decline non-essential cookies. Your preference is stored and remembered for future visits.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">If you have questions about our use of cookies, contact us at hello@netrades.co.uk or call 0191 123 4567.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default CookiePolicy;
