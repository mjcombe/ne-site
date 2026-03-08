import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <section className="gradient-navy text-primary-foreground section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-primary-foreground/70">Last updated: February 2026</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl prose prose-sm text-foreground">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Who we are</h2>
            <p className="text-muted-foreground leading-relaxed">NE Trades provides website design and local SEO services for trade businesses. Our registered office is Suite 2.6a, North Tyneside Business Centre, North Shields, NE30 1NT. When we refer to "we", "us", or "our", we mean NE Trades.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. What data we collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">When you contact us through our website, we collect:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Your trade or business type</li>
              <li>Any information you include in your message</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">We also collect anonymous usage data through cookies and analytics tools to understand how visitors use our website.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. How we use your data</h2>
            <p className="text-muted-foreground leading-relaxed">We use your personal data to respond to your enquiry, provide our services, send you relevant updates about our services (with your consent), and improve our website and marketing.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Legal basis for processing</h2>
            <p className="text-muted-foreground leading-relaxed">We process your data based on your consent when you submit a form, our legitimate business interest in responding to enquiries, and contract performance when we provide services to you.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Data sharing</h2>
            <p className="text-muted-foreground leading-relaxed">We do not sell your personal data to third parties. We may share data with trusted service providers who help us operate our business, such as hosting providers and email services. These providers are bound by data processing agreements.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Data retention</h2>
            <p className="text-muted-foreground leading-relaxed">We retain your personal data for as long as necessary to fulfil the purpose for which it was collected. Enquiry data is typically retained for 24 months unless you become a client, in which case we retain it for the duration of our business relationship plus 6 years.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Your rights</h2>
            <p className="text-muted-foreground leading-relaxed">Under UK GDPR, you have the right to access your data, rectify inaccurate data, erase your data, restrict processing, object to processing, and data portability. To exercise any of these rights, contact us at hello@ne1webdigital.co.uk.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">If you have questions about this privacy policy, email us at hello@ne1webdigital.co.uk or call 07463 687129.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
