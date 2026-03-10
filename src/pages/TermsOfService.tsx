import Layout from "@/components/layout/Layout";

const TermsOfService = () => (
  <Layout>
    <section className="gradient-trades text-primary-foreground section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-primary-foreground/70">Last updated: March 2026</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8">

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service govern the use of the NE1 Web Design website and any services provided by NE1 Web Design. By accessing our website or engaging our services, you agree to comply with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Our services</h2>
            <p className="text-muted-foreground leading-relaxed">
              NE1 Web Design provides website design, search engine optimisation (SEO), Google Business Profile optimisation, website hosting, maintenance, and related digital marketing services. The specific scope of work for each project is outlined in individual proposals, service agreements, or written communication between NE1 Web Design and the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Client responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Clients are responsible for supplying accurate information, providing timely feedback during the design and development process, and ensuring they have permission to use any text, images, logos, or other materials supplied to us. Clients are also responsible for maintaining the security of login credentials shared during the project.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Payment terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms are defined in the individual project proposal or agreement. Some services may be offered on monthly payment plans or ongoing service subscriptions. Failure to make payments on time may result in suspension of services, including website hosting, maintenance, or SEO services, until the account is brought up to date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Intellectual property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Once full payment has been received, clients retain ownership of their website content and branding materials. NE1 Web Design retains the right to display completed work within our portfolio, marketing materials, and case studies unless otherwise agreed in writing. Third party assets such as fonts, plugins, stock images, or software remain subject to their respective licences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Limitation of liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              NE1 Web Design works diligently to deliver professional websites and effective marketing services. However, we cannot guarantee specific search engine rankings, website traffic levels, or enquiry volumes. Our liability for any claim relating to our services is limited to the total fees paid by the client for services within the previous 12 months.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Cancellation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ongoing services may be cancelled by either party with 30 days written notice unless otherwise stated in the service agreement. Any work completed or costs incurred prior to cancellation remain payable by the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact NE1 Web Design at hello@ne1webdesign.co.uk.
            </p>
          </div>

        </div>
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
