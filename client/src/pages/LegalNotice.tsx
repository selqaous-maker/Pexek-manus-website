import GlobalEnglishHeader from "@/components/GlobalEnglishHeader";

const EFFECTIVE_DATE = "27 August 2026";
const SITE_URL = "https://pexek.com";

type LegalType = "privacy" | "terms";

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="legal-section">
      <h2>{title}</h2>
      <div className="legal-section-body">{children}</div>
    </section>
  );
}

function LegalFooter() {
  return (
    <footer className="legal-footer">
      <div className="container legal-footer-inner">
        <div>
          <a href="/" className="legal-footer-brand" aria-label="PEXEK homepage">
            <img src="/assets/NeonBlueGeometricPEmblem.webp" alt="" className="site-footer-logo size-9" />
            <span className="font-display font-semibold tracking-[-0.05em]">PEXEK</span>
          </a>
          <p>Managed customer-conversation workflows with approved knowledge and human control.</p>
        </div>
        <nav className="legal-footer-links" aria-label="Legal and site navigation">
          <a href="/solutions">Solutions</a>
          <a href="/industries">Industries</a>
          <a href="/how-it-works">How it works</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <span>© {new Date().getFullYear()} PEXEK</span>
        </nav>
      </div>
    </footer>
  );
}

function PrivacyNotice() {
  return (
    <>
      <p className="legal-lead">For the current PEXEK website and enquiry routes, Salah Eddine El Qaous, a Moroccan auto-entrepreneur trading as PEXEK, is responsible for the processing described in this notice.</p>
      <p className="legal-note">This page provides general information and is not legal advice.</p>

      <LegalSection title="Controller identity">
        <p>Salah Eddine El Qaous, a Moroccan auto-entrepreneur trading as PEXEK, is responsible for the processing described in this notice.</p>
        <p>Contact email: <a href="mailto:hello@pexek.com">hello@pexek.com</a>.</p>
      </LegalSection>

      <LegalSection title="Scope of this notice">
        <p>This Privacy Notice covers the current informational PEXEK website, the workflow-assessment form, general enquiries, WhatsApp, email and LinkedIn contact links, and downloadable resources.</p>
        <p>It does not govern future customer production workflows, AI calls, recordings, client databases or end-customer campaigns. Those activities require separate written data-processing arrangements where applicable.</p>
      </LegalSection>

      <LegalSection title="Information you may submit">
        <p>Depending on the route you choose, PEXEK may receive the following categories of information:</p>
        <ul>
          <li><strong>Identity and contact data:</strong> name, business name, email address, phone number, country or region.</li>
          <li><strong>Business and enquiry data:</strong> industry, enquiry source, approximate enquiry volume and the business problem described.</li>
          <li><strong>Workflow context:</strong> information about current customer-conversation routes, desired next actions and relevant operating boundaries.</li>
          <li><strong>Technical and security data:</strong> information needed to deliver, maintain and protect the website.</li>
          <li><strong>Communication records:</strong> information contained in enquiries and related follow-up communications.</li>
        </ul>
        <p>Please provide only information that is necessary to identify and understand your request. Do not submit sensitive or confidential customer data through the form or an initial contact route.</p>
      </LegalSection>

      <LegalSection title="Sensitive-information warning">
        <p>Do not submit passwords, API keys, payment-card data, government ID numbers, medical or health data, insurance or accident files, confidential customer lists or information you are not authorized to share through the assessment form, email or WhatsApp contact route.</p>
        <p>If your request involves information of this kind, contact PEXEK first at <a href="mailto:hello@pexek.com">hello@pexek.com</a> so that an appropriate channel can be discussed. Do not assume that an initial enquiry channel is suitable for sensitive information.</p>
      </LegalSection>

      <LegalSection title="How enquiry information is used">
        <p>PEXEK uses enquiry information primarily to:</p>
        <ul>
          <li>receive and understand enquiries;</li>
          <li>assess the business context;</li>
          <li>respond to the person;</li>
          <li>arrange a follow-up conversation;</li>
          <li>maintain enquiry records;</li>
          <li>protect website security; and</li>
          <li>meet legal obligations.</li>
        </ul>
        <p>An enquiry does not authorize PEXEK to run an automated marketing campaign or customer workflow.</p>
      </LegalSection>

      <LegalSection title="Legal basis">
        <p>Depending on the applicable law and context, PEXEK may rely on the person&apos;s consent when submitting the workflow-assessment form, the steps necessary to respond to a request, legitimate interests in managing a business enquiry and protecting the website, or a legal obligation. PEXEK does not treat submission of an enquiry as consent to automated marketing.</p>
      </LegalSection>

      <LegalSection title="Formspree and external providers">
        <p>Formspree processes form submissions on behalf of PEXEK so that PEXEK can receive and respond to enquiries. Formspree and other service providers may process information outside Morocco. PEXEK will use the relevant contractual, organizational and legal safeguards applicable to the processing.</p>
        <p>PEXEK may use third-party providers for hosting, form delivery, communications, telephony, AI processing, messaging, calendars and workflow infrastructure. The applicable providers, processing locations and safeguards depend on the specific service and will be documented in the relevant customer agreement where applicable.</p>
        <p>Email, WhatsApp and LinkedIn are separate communication or external platforms. If you choose to use one of these links, your interaction may also be subject to the relevant platform&apos;s own terms and privacy information.</p>
      </LegalSection>

      <LegalSection title="International transfers">
        <p>Where personal information is processed or stored outside Morocco, PEXEK will review the applicable transfer requirements and safeguards. Where required, PEXEK will pursue the relevant notification, authorization, contractual or other legal mechanism.</p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>PEXEK does not sell personal information. Information may be shared only with:</p>
        <ul>
          <li>service providers needed to operate the website or deliver an enquiry;</li>
          <li>professional advisers where necessary; and</li>
          <li>authorities where legally required.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Retention">
        <p>Website enquiry records are normally deleted or anonymised within 12 months after the last relevant communication, unless a longer period is required for legal, security, dispute-resolution or legitimate business-record purposes. PEXEK will delete or securely dispose of information when it is no longer required.</p>
      </LegalSection>

      <LegalSection title="Security">
        <p>PEXEK uses reasonable administrative, technical and organizational measures appropriate to the nature of the information, including access limitation, secure transmission where available, account security controls and deletion practices. No internet transmission or third-party service can be guaranteed to be completely secure.</p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>Depending on applicable law, a person may request access, correction, objection, deletion, restriction or portability. PEXEK may need to verify identity before responding. PEXEK does not promise that every right applies in every jurisdiction or circumstance.</p>
        <p>To make a privacy enquiry or rights request, contact <a href="mailto:hello@pexek.com">hello@pexek.com</a>.</p>
        <p>For Morocco-related data-protection questions or complaints, visitors may contact the <a href="https://www.cndp.ma/" target="_blank" rel="noopener noreferrer">CNDP through its official website</a>.</p>
      </LegalSection>

      <LegalSection title="Technical information and cookies">
        <p>No approved analytics or advertising tracking is currently deployed on this website. If only essential hosting or security cookies are used, they may support the delivery, maintenance and protection of the website. No analytics, advertising pixel, session replay or marketing tag should be treated as deployed unless this notice is updated to describe it accurately.</p>
      </LegalSection>

        <LegalSection title="Future production workflows">
        <p>Where PEXEK provides a customer-specific workflow involving calls, recordings, transcripts, WhatsApp conversations, leads or other customer data, the client-specific MSA, DPA, Order Form, Campaign Approval Form and applicable disclosure policy will govern that processing.</p>
        <p>PEXEK&apos;s public website and any client platform are separate environments. Where a client platform is provided, access is governed by the applicable Master Services Agreement, Order Form, Client Data Processing Agreement, Campaign Approval Form and platform terms. This website Privacy Notice does not replace those customer-specific documents.</p>
      </LegalSection>

      <LegalSection title="Privacy enquiries and changes">
        <p>For questions about this notice or information submitted through the website, contact <a href="mailto:hello@pexek.com">hello@pexek.com</a>. Please do not send sensitive personal information in the first email unless PEXEK has confirmed that the channel is appropriate.</p>
        <p>PEXEK may update this Privacy Notice when the website scope, enquiry routes or relevant processing activities change. The current version will be published on this page with its applicable effective date.</p>
      </LegalSection>
    </>
  );
}

function TermsOfUse() {
  return (
    <>
      <p className="legal-lead">This website is operated by Salah Eddine El Qaous, a Moroccan auto-entrepreneur trading as PEXEK.</p>
      <p className="legal-note">This page provides general information and is not legal advice.</p>

      <LegalSection title="Website purpose and scope">
        <p>The PEXEK website is an informational website for PEXEK, its managed customer-conversation workflow approach, industry examples, downloadable resources and assessment requests.</p>
        <p>The website does not itself provide a customer account, production AI service, automated calling service, WhatsApp automation, marketing campaign or deployment commitment.</p>
      </LegalSection>

      <LegalSection title="Assessment requests">
        <p>Submitting a form, email, WhatsApp message or LinkedIn message:</p>
        <ul>
          <li>does not create a contract;</li>
          <li>does not authorize automated calls or marketing;</li>
          <li>does not authorize PEXEK to process a customer database; and</li>
          <li>does not guarantee a response, acceptance, pilot, availability, result or deployment.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Future customer services">
        <p>Any paid service or customer-specific workflow will be governed by a separate written agreement, Order Form, Campaign Approval Form and, where applicable, Client Data Processing Agreement. Those documents define the actual scope, fees, responsibilities, data-processing arrangements, support commitments and limitations.</p>
        <p>PEXEK&apos;s public website and client platform are separate environments. The client platform may be available at app.pexek.com or another authorized subdomain. Access to the client platform is governed by the applicable Master Services Agreement, Order Form, Client Data Processing Agreement, Campaign Approval Form and platform terms. This website Privacy Notice does not replace those customer-specific documents.</p>
      </LegalSection>

      <LegalSection title="Third-party technology">
        <p>PEXEK may use third-party providers for hosting, form delivery, communications, telephony, AI processing, messaging, calendars and workflow infrastructure. The applicable providers, processing locations and safeguards depend on the specific service and will be documented in the relevant customer agreement where applicable.</p>
        <p>Third-party providers are separate services. Their availability, policies, security controls, data locations and processing terms may apply to the relevant service. Customer-specific provider details will be documented where applicable.</p>
      </LegalSection>

      <LegalSection title="Human responsibility and professional decisions">
        <p>PEXEK workflows do not replace human responsibility for:</p>
        <ul>
          <li>pricing and discounts;</li>
          <li>diagnosis and safety;</li>
          <li>legal, medical or financial decisions;</li>
          <li>insurance;</li>
          <li>technical feasibility;</li>
          <li>stock and delivery;</li>
          <li>complaints; and</li>
          <li>final commercial decisions.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Examples and no guarantee">
        <p>Examples, workflow diagrams, AI capabilities, integrations, response times and industry pages are illustrative and may not be available or suitable for every business.</p>
        <p>PEXEK does not promise that a particular capability, channel, integration, workflow or outcome will be available for every business. No performance, revenue or deployment guarantee is made through this website.</p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You may use the website only for lawful purposes and in a way that does not interfere with its operation, security or availability. You must not attempt to gain unauthorized access, introduce malicious code, misuse a contact route, scrape or reproduce the website in a way that harms its operation, or submit information that you are not authorized to share.</p>
        <p>Do not submit passwords, API keys, payment-card data, government ID numbers, medical or health data, insurance or accident files, confidential customer lists or information you are not authorized to share.</p>
        <p>You are responsible for ensuring that information you submit is accurate enough for PEXEK to understand your request and that you have the right to provide it.</p>
      </LegalSection>

      <LegalSection title="Intellectual property and permitted website use">
        <p>Unless stated otherwise, the website content, visual identity, text, diagrams, software presentation and downloadable materials are owned by Salah Eddine El Qaous or used with the relevant permission.</p>
        <p>You may view the website and download its resources for your own internal evaluation. You must not copy, modify, republish, sell, distribute or create a misleadingly similar public presentation from the website content without permission, except where applicable law permits the use.</p>
      </LegalSection>

      <LegalSection title="Website liability">
        <p>To the maximum extent permitted by applicable law, PEXEK is not liable for indirect, consequential, special or loss-of-profit damages arising solely from use of the informational website.</p>
        <p>This limitation does not exclude or limit any right or liability that cannot lawfully be excluded or limited.</p>
      </LegalSection>

      <LegalSection title="Website availability and changes">
        <p>PEXEK aims to keep the website useful and available, but the website may be changed, interrupted, suspended or unavailable from time to time because of maintenance, hosting, security, connectivity or other circumstances. No uninterrupted availability is promised.</p>
        <p>PEXEK may update website content, resources and these Terms of Use when the website scope or operating context changes. The current version will be published on this page with its applicable effective date.</p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>These Website Terms are intended to be governed by the laws of Morocco, subject to any mandatory protections that apply to the visitor in their jurisdiction.</p>
      </LegalSection>

      <LegalSection title="Separate written agreements">
        <p>If the operator of PEXEK and a customer later agree to paid services or a customer-specific workflow, the parties will document the applicable scope, fees, responsibilities, support arrangements and data-processing terms separately in writing.</p>
        <p>Those separate arrangements govern the relevant service to the extent they differ from general website information.</p>
      </LegalSection>

      <LegalSection title="Contact and legal review note">
        <p>For questions about these Terms of Use, contact <a href="mailto:hello@pexek.com">hello@pexek.com</a>.</p>
        <p>Customer-specific legal and data-processing terms are agreed separately where applicable.</p>
      </LegalSection>
    </>
  );
}

export default function LegalNotice({ type }: { type: LegalType }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Notice" : "Terms of Use";
  const canonical = `${SITE_URL}/${type}`;
  const description = isPrivacy
    ? "Read how PEXEK handles information submitted through its website assessment form and contact routes."
    : "Read the terms governing access to the PEXEK website, enquiries, downloadable resources and future separately agreed services.";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${canonical}#webpage`, name: title, url: canonical, description },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: title, item: canonical },
      ] },
    ],
  };

  return (
    <div className="legal-page">
      <GlobalEnglishHeader />
      <main className="legal-main">
        <div className="legal-shell">
          <a href="/" className="legal-back">← Back to PEXEK</a>
          <div className="legal-kicker">PEXEK / Legal route</div>
          <h1>{title}</h1>
          <p className="legal-effective">Effective date: {EFFECTIVE_DATE}</p>
          {isPrivacy ? <PrivacyNotice /> : <TermsOfUse />}
        </div>
      </main>
      <LegalFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
