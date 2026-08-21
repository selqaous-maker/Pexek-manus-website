import { ArrowRight, ArrowUpRight, Mail, MessageCircle, Linkedin, ClipboardCheck } from "lucide-react";
import GlobalEnglishHeader from "@/components/GlobalEnglishHeader";

const SITE_URL = "https://pexek.com";
const COMPANY_LINKEDIN = "https://www.linkedin.com/company/pexek/";
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/salah-eddine-el-qaous-2b131b140/";
const WHATSAPP_URL = "https://wa.me/212633323828";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact#contactpage`,
      url: `${SITE_URL}/contact`,
      name: "Contact PEXEK | Choose the Right Next Step",
      description: "Contact PEXEK about a workflow assessment, general enquiry, WhatsApp message or company connection. Choose the route that fits your request.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/contact#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/contact#organization`,
      name: "PEXEK",
      url: SITE_URL,
      sameAs: [COMPANY_LINKEDIN],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/contact#founder`,
      name: "Salah Eddine El Qaous",
      sameAs: [FOUNDER_LINKEDIN],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/contact#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Contact PEXEK", item: `${SITE_URL}/contact` },
      ],
    },
  ],
};

function BrandMark() {
  return <a href="/" className="site-brand" aria-label="PEXEK homepage"><img src="/assets/NeonBlueGeometricPEmblem.webp" alt="" className="site-brand-mark" /><span><strong>PEXEK</strong><small>WORKFLOW SYSTEM</small></span></a>;
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-count">{number}</span>{children}</div>;
}

const contactCards = [
  {
    icon: ClipboardCheck,
    label: "Workflow assessment",
    copy: "For businesses exploring a managed customer-conversation workflow.",
    action: "Request a Workflow Assessment",
    href: "/#assessment",
    external: false,
    primary: true,
  },
  {
    icon: Mail,
    label: "General enquiry",
    copy: "For a general question about PEXEK or its approach.",
    action: "Email hello@pexek.com",
    href: "mailto:hello@pexek.com",
    external: false,
    primary: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    copy: "For a direct message to PEXEK.",
    action: "Message PEXEK on WhatsApp",
    href: WHATSAPP_URL,
    external: true,
    primary: false,
  },
  {
    icon: Linkedin,
    label: "PEXEK on LinkedIn",
    copy: "Follow PEXEK for company updates, workflow perspectives and current direction.",
    action: "Visit PEXEK on LinkedIn",
    href: COMPANY_LINKEDIN,
    external: true,
    primary: false,
  },
];

export default function Contact() {
  return <div className="contact-page min-h-screen bg-[#eef3f8] text-[#06152b]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <GlobalEnglishHeader activeRoute="/contact" />
    <main>
      <section className="contact-hero"><div className="container contact-hero-grid"><div className="contact-hero-copy"><SectionLabel number="00">CONTACT PEXEK</SectionLabel><h1>Choose the right next step for your conversation.</h1><p>Whether you are exploring a workflow for your business or looking for a general point of contact, choose the path that best matches your request.</p><div className="contact-actions"><a href="/#assessment" className="contact-primary-cta">Request a Workflow Assessment <ArrowRight className="size-4" /></a><a href="/how-it-works" className="contact-secondary-cta">Explore How PEXEK Works <ArrowUpRight className="size-4" /></a></div></div><div className="contact-hero-visual" aria-label="Illustrative contact routing"><div className="contact-visual-grid" /><span className="contact-visual-kicker">CONTACT ROUTING</span><div className="contact-route"><span>Business context</span><i /><strong>Choose a clear path</strong><i className="apricot" /><span>Next conversation</span></div><small>Clear starting point</small></div></div></section>

      <section className="contact-section contact-paths"><div className="container"><SectionLabel number="01">CHOOSE YOUR PATH</SectionLabel><div className="contact-heading-row"><h2>Start with the reason you are reaching out.</h2><p>The right route helps us understand the context before the next conversation.</p></div><div className="contact-card-grid">{contactCards.map(({ icon: Icon, label, copy, action, href, external, primary }) => <article key={label} className={`contact-card${primary ? " contact-card-primary" : ""}`}><div className="contact-card-icon"><Icon className="size-5" /></div><h3>{label}</h3><p>{copy}</p><a href={href} className="contact-card-link" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label={`${action}${external ? " (opens in a new tab)" : ""}`}>{action}<ArrowUpRight className="size-4" /></a></article>)}</div></div></section>

      <section className="contact-section contact-business"><div className="container contact-business-grid"><div><SectionLabel number="02">BUSINESS &amp; WORKFLOW ENQUIRIES</SectionLabel><h2>If you are evaluating a workflow, start with the assessment.</h2></div><div><p>The homepage assessment is the right place to explain where customer conversations arrive, what information is often missing and what your team needs to decide next. PEXEK can then review the workflow context before discussing whether a managed approach is appropriate.</p><a href="/#assessment" className="contact-primary-cta">Request a Workflow Assessment <ArrowRight className="size-4" /></a><div className="contact-link-row"><a href="/solutions" className="contact-text-link">Explore configurable solutions <ArrowUpRight className="size-4" /></a><a href="/industries" className="contact-text-link">See the industries we can evaluate <ArrowUpRight className="size-4" /></a><a href="/industries/kitchens-interior" className="contact-text-link">See the focused Kitchens &amp; Interior workflow <ArrowUpRight className="size-4" /></a></div><div className="contact-boundary"><span>Please do not include sensitive, medical, payment-card, identity-document or confidential operational information in an initial email or WhatsApp message. Use the assessment route for business context that requires a structured review.</span></div></div></div></section>

      <section className="contact-section contact-channels"><div className="container"><SectionLabel number="03">GENERAL CONTACT</SectionLabel><div className="contact-heading-row"><h2>For a general question, use the channel that suits you.</h2></div><div className="contact-channel-grid"><article className="contact-channel"><Mail className="size-5" /><h3>Email PEXEK</h3><a href="mailto:hello@pexek.com" className="contact-visible-link">hello@pexek.com</a><p>For general questions about PEXEK, its approach or the appropriate next step.</p></article><article className="contact-channel"><MessageCircle className="size-5" /><h3>Message PEXEK on WhatsApp</h3><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-visible-link" aria-label="Message PEXEK on WhatsApp (opens in a new tab)">+212 6 33 32 38 28</a><p>Use WhatsApp for a direct written enquiry. Please do not send sensitive or confidential information.</p></article><article className="contact-channel contact-channel-primary"><Linkedin className="size-5" /><h3>Follow PEXEK on LinkedIn</h3><p>Follow PEXEK for company updates, workflow perspectives and current direction.</p><a href={COMPANY_LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-primary-link" aria-label="Visit PEXEK company page on LinkedIn (opens in a new tab)">Visit PEXEK on LinkedIn <ArrowUpRight className="size-4" /></a></article><article className="contact-channel"><Linkedin className="size-5" /><h3>Connect with the Founder</h3><p>Salah Eddine El Qaous. Connect with the Founder of PEXEK on LinkedIn.</p><a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-text-link" aria-label="Connect with Salah Eddine El Qaous on LinkedIn (opens in a new tab)">Connect with the Founder <ArrowUpRight className="size-4" /></a></article></div><p className="contact-privacy-note">For information about how website enquiries are handled, read the <a href="/privacy">PEXEK Privacy Notice</a>.</p></div></section>

      <section className="contact-section contact-final"><div className="container contact-final-inner"><SectionLabel number="04">BEFORE YOU SEND</SectionLabel><h2>A clear starting point makes the next conversation more useful.</h2><p>Choose the assessment route when your request concerns a business workflow. Use email or WhatsApp for a general enquiry. PEXEK will review the context provided and determine the appropriate next step; no specific response time is promised on this page.</p><a href="/#assessment" className="contact-primary-cta">Request a Workflow Assessment <ArrowRight className="size-4" /></a><a href="/about" className="contact-secondary-cta">Return to the PEXEK approach <ArrowUpRight className="size-4" /></a><small>Please share only the information needed to identify your request. Do not send sensitive, medical, payment-card, identity-document or confidential operational information through the initial contact channels.</small></div></section>
    </main>
    <footer className="contact-footer"><div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><BrandMark /><p className="mt-3 max-w-sm text-sm leading-6 text-[#9caea7]">Managed customer-conversation workflows with approved knowledge and human control.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#aebdb7]"><a href="/solutions">Solutions</a><a href="/industries">Industries</a><a href="/how-it-works">How it works</a><a href="/about">About</a><a href="/contact" aria-current="page">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><span>© {new Date().getFullYear()} PEXEK</span></div></div></footer>
  </div>;
}
