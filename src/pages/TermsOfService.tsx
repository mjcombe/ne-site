import Layout from "@/components/layout/Layout";

const TermsOfService = () => (
  <Layout>
    <section className="gradient-navy text-primary-foreground section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-primary-foreground/70">Last updated: February 2026</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">These terms of service govern your use of the NE1 Web Digital website and our services. By using our website or engaging our services, you agree to these terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Our services</h2>
            <p className="text-muted-foreground leading-relaxed">NE1 Web Digital provides website design, local SEO, Google Business Profile optimisation, hosting, and related digital marketing services for trade businesses. The specific scope of work for each client is detailed in individual proposals and agreements.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Client responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">Clients are responsible for providing accurate business information, timely feedback during the design process, maintaining access credentials shared with us, and ensuring they have the right to use any materials they provide.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Payment terms</h2>
            <p className="text-muted-foreground leading-relaxed">Payment terms are detailed in individual client agreements. We may offer monthly payment plans for ongoing services. Late payments may result in suspension of services until the account is brought up to date.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Intellectual property</h2>
            <p className="text-muted-foreground leading-relaxed">Upon full payment, clients own their website content and design. We retain the right to showcase the work in our portfolio unless otherwise agreed. Third-party elements (stock images, fonts, plugins) remain subject to their respective licences.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Limitation of liability</h2>
            <p className="text-muted-foreground leading-relaxed">While we work diligently to deliver results, we cannot guarantee specific search engine rankings or enquiry volumes. Our liability is limited to the fees paid for our services in the 12 months preceding any claim.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Cancellation</h2>
            <p className="text-muted-foreground leading-relaxed">Either party may terminate ongoing services with 30 days written notice. Work completed prior to cancellation remains payable. Specific cancellation terms are detailed in individual client agreements.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">For questions about these terms, contact us at hello@ne1webdigital.co.uk or call 07463 687129.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
