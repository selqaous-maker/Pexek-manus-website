import { ArrowRight, ArrowUpRight, Check, CircleDot, Hand, Route, ShieldCheck } from "lucide-react";
import GlobalEnglishHeader from "@/components/GlobalEnglishHeader";

const SITE_URL = "https://pexek.com";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#aboutpage`,
      url: `${SITE_URL}/about`,
      name: "About PEXEK | Managed Customer-Conversation Workflows",
      description: "Learn how PEXEK assesses, designs, configures and supports managed customer-conversation workflows using selected third-party technology and human control.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/about#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/about#organization`,
      name: "PEXEK",
      url: SITE_URL,
      founder: { "@type": "Person", name: "Salah Eddine El Qaous" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/about#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "About PEXEK", item: `${SITE_URL}/about` },
      ],
    },
  ],
};

function BrandMark() {
  return <a href="/" className="site-brand" aria-label="PEXEK"><img src="/assets/NeonBlueGeometricPEmblem.webp" alt="" className="site-brand-mark" /><span><strong>PEXEK</strong><small>WORKFLOW SYSTEM</small></span></a>;
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-count">{number}</span>{children}</div>;
}

export default function About() {
  return <div className="about-page min-h-screen bg-[#eef3f8] text-[#06152b]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <GlobalEnglishHeader activeRoute="/about" />
    <main>
      <section className="about-hero"><div className="container about-hero-grid"><div className="about-hero-copy"><SectionLabel number="00">ABOUT PEXEK</SectionLabel><h1>Build the customer-conversation workflow your team can trust.</h1><p className="about-lead">PEXEK helps businesses turn incoming conversations into clearer next actions. We assess the workflow, design the operating logic, configure the selected capabilities, test the experience and support the handoff to your team.</p><p className="about-disclosure">Selected voice, WhatsApp, website and integration capabilities may use selected third-party technology, configured and managed through the PEXEK workflow.</p><div className="about-actions"><a href="/#assessment" className="about-primary-cta">See How PEXEK Could Work for Your Business <ArrowRight className="size-4" /></a><a href="/how-it-works" className="about-secondary-cta">See How It Works <ArrowUpRight className="size-4" /></a></div></div><div className="about-hero-visual" aria-label="Illustrative managed workflow"><div className="about-visual-grid" /><span className="about-visual-kicker">MANAGED WORKFLOW SIGNAL</span><div className="about-route"><span><CircleDot className="size-4" />Business context</span><i /><span><Route className="size-4" />Configured path</span><i className="apricot" /><strong><Hand className="size-4" />Human decision</strong></div><small>Illustrative operating view</small></div></div></section>

      <section className="about-section about-does"><div className="container"><SectionLabel number="01">WHAT PEXEK DOES</SectionLabel><div className="about-heading-row"><div><h2>We manage the path from enquiry to next action.</h2></div><p>PEXEK works with the business process behind a customer conversation. We begin by understanding how enquiries arrive, what information matters, what the team needs to see and where a human decision is required.</p></div><div className="about-process-line"><span>Assess</span><i /> <span>Design</span><i /> <span>Configure</span><i /> <span>Test</span><i /> <span>Support</span></div><div className="about-note"><ShieldCheck className="size-4" /><span>The result is not a generic chatbot layer. It is a configured workflow shaped around the business context, approved knowledge and the next action your team wants to prepare.</span></div><p className="about-capability-note">Depending on the workflow, selected capabilities may include AI voice, WhatsApp, website enquiries, lead qualification, appointment coordination, follow-up automation or integrations. These are configurable options, not automatic inclusions in every engagement.</p><a href="/solutions" className="about-text-link">Explore Solutions <ArrowUpRight className="size-4" /></a></div></section>

      <section className="about-section about-managed"><div className="container"><SectionLabel number="02">WHY MANAGED WORKFLOWS</SectionLabel><div className="about-heading-row"><h2>The technology matters. The operating context matters more.</h2><p>Businesses do not need another disconnected tool to monitor. They need a workflow that reflects their customer journey, gives the system approved context and makes the next human action easier to understand.</p></div><div className="about-principles"><article><span>01</span><h3>Context before automation</h3><p>Start with the enquiry, the information required and the team decision that follows.</p></article><article><span>02</span><h3>Configuration before launch</h3><p>Define the approved knowledge, workflow rules, escalation points and operating boundaries before testing.</p></article><article><span>03</span><h3>Handoff before autonomy</h3><p>Prepare useful context for the team instead of presenting automation as a replacement for responsibility.</p></article></div><p className="about-closing-copy">PEXEK sits between business intent and workflow operation: translating the process into a system your team can review, test and manage.</p><a href="/how-it-works" className="about-text-link">See the workflow approach <ArrowUpRight className="size-4" /></a></div></section>

      <section className="about-section about-control"><div className="container about-control-grid"><div className="about-control-visual"><div className="about-control-route"><span>Information captured</span><i /><span>Context structured</span><i className="apricot" /><strong>Human review</strong><i /><span>Next action confirmed</span></div><span className="about-control-stamp">RESPONSIBILITY STAYS VISIBLE</span></div><div className="about-control-copy"><SectionLabel number="03">RESPONSIBILITY &amp; CONTROL</SectionLabel><h2>Automation prepares the context. Your team keeps the decisions.</h2><p>PEXEK workflows can help capture information, organize requests, qualify according to approved criteria, coordinate a possible next step and prepare a handoff. The business team remains responsible for the decisions that carry commercial, pricing, technical, medical, legal or other material consequences.</p><div className="about-boundary"><Check className="size-4" /><span>A workflow may support a conversation, but it does not independently approve pricing, confirm technical feasibility, provide medical or legal judgment, commit the business to an outcome or replace the responsible team.</span></div><div className="about-third-party"><strong>Selected technology, clear responsibility.</strong><p>Where selected capabilities rely on third-party technology, PEXEK acts as the business-facing implementation and coordination layer for workflow configuration, operating boundaries and testing. The respective responsibilities of PEXEK, the customer and selected technology providers are defined in the applicable service and data-processing arrangements.</p></div><div className="about-link-row"><a href="/solutions" className="about-text-link">Explore configurable solutions <ArrowUpRight className="size-4" /></a><a href="/industries" className="about-text-link">See the industries we can evaluate <ArrowUpRight className="size-4" /></a></div></div></div></section>

      <section className="about-section about-founder"><div className="container about-founder-grid"><div><SectionLabel number="04">FOUNDER-LED, GLOBALLY APPLICABLE</SectionLabel><h2>Built from Morocco with a workflow-first view of the market.</h2></div><div className="about-founder-copy"><p>PEXEK was founded by Salah Eddine El Qaous in Morocco. The company is being built around a practical belief: customer-conversation automation should be assessed against the real operating process, not presented as a collection of disconnected features.</p><p>The initial validation approach is Morocco-first, while the service model is designed to be applicable to qualified businesses in other markets. That means starting with a focused operating context, learning what teams actually need and building the foundations for responsible expansion.</p><div className="about-direction">A clear workflow. Approved context. Human control where it matters.</div><a href="/industries" className="about-text-link">See the industries we are evaluating <ArrowUpRight className="size-4" /></a><a href="/industries/kitchens-interior" className="about-text-link">Explore the current focused showroom workflow <ArrowUpRight className="size-4" /></a></div></div></section>

      <section className="about-section about-final"><div className="container about-final-inner"><SectionLabel number="05">START WITH THE WORKFLOW</SectionLabel><h2>Bring us the conversation your team wants to improve.</h2><p>Tell us where enquiries arrive, what information is often missing and what your team needs to decide next. PEXEK will review the context before discussing whether a managed workflow is appropriate.</p><div className="about-actions"><a href="/#assessment" className="about-primary-cta">See How PEXEK Could Work for Your Business <ArrowRight className="size-4" /></a><a href="/solutions" className="about-secondary-cta">Explore Solutions <ArrowUpRight className="size-4" /></a></div><small>An assessment is a conversation about fit and workflow context. It is not a performance guarantee, service commitment or automatic deployment approval.</small></div></section>
    </main>
    <footer className="about-footer"><div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><BrandMark /><p className="mt-3 max-w-sm text-sm leading-6 text-[#9caea7]">Managed customer-conversation workflows with approved knowledge and human control.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#aebdb7]"><a href="/solutions">Solutions</a><a href="/industries">Industries</a><a href="/how-it-works">How it works</a><a href="/about" aria-current="page">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><span>© {new Date().getFullYear()} PEXEK</span></div></div></footer>
  </div>;
}
