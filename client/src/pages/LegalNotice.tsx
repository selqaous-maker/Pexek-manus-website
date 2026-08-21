import GlobalEnglishHeader from "@/components/GlobalEnglishHeader";

const EFFECTIVE_DATE = "21 August 2026";
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
      <p className="legal-lead">For the purposes of this website, PEXEK is a trading name operated by Salah Eddine El Qaous, a Moroccan auto-entrepreneur. Salah Eddine El Qaous is responsible for the handling of personal information submitted through the current PEXEK website and its enquiry routes.</p>
      <LegalSection title="Scope of this notice">
        <p>This Privacy Notice explains how PEXEK handles information submitted through the PEXEK website, including the workflow-assessment form and contact routes linked from the website.</p>
        <p>It covers the current informational website, the assessment form, general enquiries and the downloadable Kitchens &amp; Interior guide. It does not describe future client service workflows, customer portals or production services that are not currently available through this website. Where a customer workflow or service involves additional processing, the applicable service and data-processing arrangements are agreed separately where applicable.</p>
      </LegalSection>
      <LegalSection title="Information you may submit">
        <p>Depending on the route you choose, you may submit information such as your name, business name, email address, phone number, country or region, the source of customer conversations you want to discuss, the workflow problem you want to examine and other information you choose to include in the assessment form or enquiry.</p>
        <p>Please provide only information that is necessary to identify and understand your request.</p>
      </LegalSection>
      <LegalSection title="Sensitive-information warning">
        <p>Please do not submit payment-card details, identity-document numbers or copies, medical information, special-category information, confidential customer records, passwords, security credentials or other sensitive information through the assessment form, email or WhatsApp contact route.</p>
        <p>If your request involves information of this kind, contact PEXEK first at <a href="mailto:hello@pexek.com">hello@pexek.com</a> so that an appropriate channel can be discussed. Do not assume that an initial enquiry channel is suitable for sensitive information.</p>
      </LegalSection>
      <LegalSection title="How enquiry information is used">
        <p>PEXEK may use information submitted through the website to receive and understand your enquiry, assess whether a workflow discussion is relevant to your business context, respond to your request, communicate about the appropriate next step, organize the information needed for an assessment conversation, maintain the security and operation of the website and manage records connected with the enquiry.</p>
        <p>Submitting an assessment form does not create an agreement to deploy a service, and an assessment request does not itself authorize marketing automation or a customer workflow.</p>
      </LegalSection>
      <LegalSection title="Formspree and separate communication platforms">
        <p>Formspree processes workflow-assessment submissions for delivery to PEXEK so that PEXEK can receive and respond to the enquiry.</p>
        <p>Email, WhatsApp and LinkedIn are separate communication or external platforms. If you choose to use one of these links, your interaction may also be subject to the relevant platform’s own terms and privacy information. PEXEK does not control the privacy practices of those external platforms.</p>
        <p>The Kitchens &amp; Interior guide is provided directly from the website and does not require an additional form submission.</p>
      </LegalSection>
      <LegalSection title="Technical information and cookies">
        <p>No approved analytics or advertising tracking is currently deployed on the website. Essential hosting and security processing may occur to deliver, maintain and protect the website.</p>
      </LegalSection>
      <LegalSection title="Service providers and future workflows">
        <p>PEXEK may use service providers necessary to operate the current website and deliver assessment submissions to PEXEK.</p>
        <p>If PEXEK later provides a customer-specific workflow or service involving additional personal-data processing, the service scope, responsibilities and applicable data-processing arrangements will be agreed separately where applicable.</p>
      </LegalSection>
      <LegalSection title="Retention">
        <p>Enquiry information is retained only for as long as reasonably necessary to review and respond to the request, manage related communications, maintain appropriate records and meet applicable legal obligations. PEXEK deletes or securely disposes of enquiry information when it is no longer required for these purposes, subject to applicable legal obligations.</p>
      </LegalSection>
      <LegalSection title="Your rights">
        <p>Depending on the applicable law and the circumstances of the processing, you may have the right to request access to personal information concerning you, request rectification of inaccurate information and object to certain processing.</p>
        <p>Any additional right is subject to the applicable law and circumstances. To make a privacy enquiry or rights request, contact <a href="mailto:hello@pexek.com">hello@pexek.com</a>. PEXEK may need enough information to understand and verify the request before responding.</p>
      </LegalSection>
      <LegalSection title="Privacy enquiries">
        <p>For questions about this notice or information submitted through the website, contact <a href="mailto:hello@pexek.com">hello@pexek.com</a>.</p>
        <p>Please do not send sensitive personal information in the first email unless PEXEK has confirmed that the channel is appropriate.</p>
      </LegalSection>
      <LegalSection title="Changes to this notice">
        <p>PEXEK may update this Privacy Notice when the website scope, enquiry routes or relevant processing activities change. The current version will be published on this page with its applicable effective date.</p>
      </LegalSection>
    </>
  );
}

function TermsOfUse() {
  return (
    <>
      <p className="legal-lead">This website is operated by Salah Eddine El Qaous, a Moroccan auto-entrepreneur trading as PEXEK.</p>
      <LegalSection title="Website purpose">
        <p>The PEXEK website provides general information about PEXEK and its managed customer-conversation workflow approach. The website may describe configurable capabilities, workflow examples, industry contexts, contact routes and downloadable resources.</p>
        <p>Website content is provided to help visitors understand the approach. It does not constitute a service offer, deployment approval or binding statement of scope.</p>
      </LegalSection>
      <LegalSection title="Eligibility and acceptable use">
        <p>You may use the website only for lawful purposes and in a way that does not interfere with its operation, security or availability. You must not attempt to gain unauthorized access, introduce malicious code, misuse a contact route, scrape or reproduce the website in a way that harms its operation, or submit information that you are not authorized to share.</p>
        <p>You are responsible for ensuring that information you submit is accurate enough for PEXEK to understand your request and that you have the right to provide it.</p>
      </LegalSection>
      <LegalSection title="Assessment forms and contact requests">
        <p>Submitting the workflow-assessment form or contacting PEXEK by email, WhatsApp or LinkedIn does not create a service agreement, customer account, deployment commitment or obligation to provide a particular service.</p>
        <p>PEXEK may review the context provided and decide whether a further conversation is appropriate. No availability, suitability, result, response time or deployment outcome is guaranteed by submitting a request.</p>
      </LegalSection>
      <LegalSection title="No automatic service or result guarantee">
        <p>The website describes possible workflow approaches and configurable capabilities. It does not promise that a particular capability, integration, channel, automation or outcome will be available for every business.</p>
        <p>Any paid service, workflow scope, fee, implementation responsibility, support arrangement, data-processing activity or customer responsibility must be agreed separately in writing.</p>
      </LegalSection>
      <LegalSection title="Human responsibility and professional advice">
        <p>Information on this website is not legal, medical, financial, technical-feasibility or other professional advice. Business teams retain responsibility for commercial, pricing, technical, medical, legal and other material decisions.</p>
        <p>Examples and workflow diagrams are illustrative unless expressly stated otherwise. They should not be treated as a guarantee that a particular workflow will be suitable for a business or customer situation.</p>
      </LegalSection>
      <LegalSection title="Intellectual property and permitted website use">
        <p>Unless stated otherwise, the website content, visual identity, text, diagrams, software presentation and downloadable materials are owned by Salah Eddine El Qaous or used with the relevant permission.</p>
        <p>You may view the website and download the Kitchens &amp; Interior guide for your own internal evaluation. You must not copy, modify, republish, sell, distribute or create a misleadingly similar public presentation from the website content without permission, except where applicable law permits the use.</p>
      </LegalSection>
      <LegalSection title="Downloadable guide">
        <p>The Kitchens &amp; Interior guide is provided as an informational resource for showroom owners and commercial teams. It is available as a direct download and does not create a service agreement, guarantee a result or replace a discussion about the showroom’s actual process.</p>
        <p>The workflow examples in the guide are illustrative. The showroom team retains responsibility for feasibility, pricing, stock, delivery, technical design and the next commercial decision.</p>
      </LegalSection>
      <LegalSection title="Third-party links and services">
        <p>The website uses or links to third-party services, including Formspree, WhatsApp and LinkedIn. These platforms and providers are separate services and may have their own terms, privacy notices and availability conditions. PEXEK does not adopt or control the terms or privacy practices of external platforms merely by linking to them.</p>
        <p>Selected underlying technology may be provided by third-party platforms in a future or customer-specific workflow. The respective responsibilities of PEXEK, the customer and selected technology providers are defined in the applicable service and data-processing arrangements.</p>
      </LegalSection>
      <LegalSection title="Website availability and changes">
        <p>PEXEK aims to keep the website useful and available, but the website may be changed, interrupted, suspended or unavailable from time to time because of maintenance, hosting, security, connectivity or other circumstances. No uninterrupted availability is promised.</p>
        <p>PEXEK may update website content, resources and these Terms of Use when the website scope or operating context changes. The current version will be published on this page with its applicable effective date.</p>
      </LegalSection>
      <LegalSection title="Mandatory-law safeguard">
        <p>Nothing in these Terms excludes or limits any right or liability that cannot lawfully be excluded or limited.</p>
      </LegalSection>
      <LegalSection title="Separate written agreements">
        <p>If the operator of PEXEK and a customer later agree to paid services or a customer-specific workflow, the parties will document the applicable scope, fees, responsibilities, support arrangements and data-processing terms separately in writing.</p>
        <p>Those separate arrangements govern the relevant service to the extent they differ from general website information.</p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>For questions about these Terms of Use, contact <a href="mailto:hello@pexek.com">hello@pexek.com</a>.</p>
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
