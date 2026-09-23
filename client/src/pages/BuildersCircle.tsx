import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, MapPin, Sparkles, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkodykaj";

export default function BuildersCircle() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    if (!form.checkValidity()) {
      setStatus("error");
      setError("Please complete the required fields and confirm the contact permission.");
      form.reportValidity();
      return;
    }
    setStatus("submitting");
    try {
      const data = new FormData(form);
      if (String(data.get("website") || "").trim()) {
        setStatus("success");
        return;
      }
      data.set("page_url", window.location.href);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Formspree request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("We could not send your response. Please try again in a moment.");
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f8fc] text-[#081528]">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="/" className="brand-mark" aria-label="Back to PEXEK homepage">
            <img src="/assets/pexek-original-logo_3cca9eb7.png" alt="" className="h-10 w-10 object-contain" />
            <span className="brand-wordmark"><strong className="font-display">PEXEK</strong><small>Workflow system</small></span>
          </a>
          <div className="flex items-center gap-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#52708e]">
            <span className="hidden sm:inline">Community route</span>
            <a href="/" className="inline-flex items-center gap-1 text-[#087fe5] hover:underline">Back to PEXEK <ArrowUpRight className="size-3.5" /></a>
          </div>
        </div>
      </header>

      <main>
        <section className="builders-hero">
          <div className="container grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div>
              <div className="eyebrow text-[#9ddfff]"><span className="eyebrow-dot" /> PEXEK / AGADIR BUILDERS CIRCLE</div>
              <h1 className="builders-title mt-6">A small room for people building the <em>next thing.</em></h1>
              <p className="mt-7 max-w-2xl text-[1.08rem] leading-8 text-[#c2d5e2]">An informal AI and SaaS builders circle in Agadir for founders, developers, marketers and curious operators who are actively building, experimenting or seriously exploring what comes next.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" })} className="h-12 rounded-md bg-[#18c9ff] px-6 font-semibold text-[#03101f] hover:bg-[#74ddff]">Join the first session <ArrowRight className="size-4" /></Button>
                <a href="#why" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#52708e] px-6 text-sm font-semibold text-white hover:bg-white/10">Why this exists</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#a8c1d1]"><span className="inline-flex items-center gap-2"><MapPin className="size-4 text-[#18c9ff]" /> Agadir & nearby</span><span className="inline-flex items-center gap-2"><UsersRound className="size-4 text-[#18c9ff]" /> Small group</span><span className="inline-flex items-center gap-2"><Sparkles className="size-4 text-[#f0af79]" /> Practical exchange</span></div>
            </div>
            <div className="builders-signal" aria-label="Builders circle focus areas">
              <div className="builders-signal-grid" aria-hidden="true" />
              <div className="builders-signal-label">THE ROOM</div>
              <div className="builders-signal-center"><span>AGADIR</span><strong>BUILDERS<br />CIRCLE</strong></div>
              <div className="builders-signal-node builders-signal-node-a">AI PRODUCTS</div>
              <div className="builders-signal-node builders-signal-node-b">SAAS TOOLS</div>
              <div className="builders-signal-node builders-signal-node-c">AUTOMATION</div>
              <div className="builders-signal-node builders-signal-node-d">LOCAL CONNECTIONS</div>
              <div className="builders-signal-route builders-signal-route-a" /><div className="builders-signal-route builders-signal-route-b" /><div className="builders-signal-route builders-signal-route-c" /><div className="builders-signal-route builders-signal-route-d" />
              <p className="builders-signal-note">No pitch deck required.<br />Just bring what you are learning.</p>
            </div>
          </div>
        </section>

        <section id="why" className="section-space bg-[#f4f8fc]">
          <div className="container grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <div><div className="eyebrow"><span className="eyebrow-count">01</span> Why this exists</div><h2 className="section-title mt-5">Useful conversations, close to home.</h2></div>
            <div className="grid gap-px border border-[#cfdeea] bg-[#cfdeea] sm:grid-cols-2">
              {["Meet people building AI products, SaaS tools and automation solutions.", "Exchange practical knowledge and lessons from the field—not just headlines.", "Discuss ideas, challenges and opportunities with people who understand the work.", "Explore future collaborations only where there is a genuine fit."].map((item, index) => <article key={item} className="bg-white p-6"><span className="font-display text-sm font-medium text-[#087fe5]">0{index + 1}</span><p className="mt-8 text-[1.04rem] leading-7 text-[#31495b]">{item}</p></article>)}
            </div>
          </div>
          <div className="container mt-8"><div className="builders-boundary"><strong>This is not a sales event or a formal recruitment program.</strong><span>It is a small, focused meeting for people who are actively building, experimenting or seriously interested in AI and innovation.</span></div></div>
        </section>

        <section id="join" className="builders-form-section">
          <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24"><div className="eyebrow text-[#a9e8ff]"><span className="eyebrow-count border-[#4787aa] text-[#a9e8ff]">02</span> Join the first session</div><h2 className="section-title mt-5 text-white">Tell us what you are building.</h2><p className="mt-6 max-w-md leading-7 text-[#b9d2e0]">Share a little context so we can keep the first group relevant and useful. We will review responses and invite a small group for an informal builders’ discussion.</p><div className="mt-8 border-l-2 border-[#f0af79] bg-[#10283d] p-5 text-sm leading-6 text-[#d4e5ee]">The form is for networking around the session. It does not create a job application, partnership agreement or sales commitment.</div></div>
            <form className={`builders-form${status === "submitting" ? " is-submitting" : ""}`} onSubmit={submit} aria-busy={status === "submitting"} aria-describedby="builders-message">
              <input type="hidden" name="_subject" value="Agadir AI & SaaS Builders Circle — New Interest" /><input type="hidden" name="form_source" value="PEXEK /form — Agadir AI & SaaS Builders Circle" /><input type="hidden" name="page_url" value="" />
              <input className="form-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="assessment-route" aria-hidden="true"><span>Connect</span><i /><b /><i /><b /><i /><b className="handoff" /><span>Builders</span></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">Full name<input required name="full_name" autoComplete="name" className="form-input" placeholder="Your name" /></label>
                <label className="form-label">LinkedIn profile<input required type="url" name="linkedin_profile" className="form-input" placeholder="https://linkedin.com/in/…" /></label>
                <label className="form-label">Email or WhatsApp<input required name="contact" className="form-input" placeholder="How should we reach you?" /></label>
                <label className="form-label">City<input required name="city" autoComplete="address-level2" className="form-input" placeholder="Agadir, Inezgane…" /></label>
              </div>
              <label className="form-label mt-5 block">What are you building or working on?<textarea required name="building" className="form-input min-h-28 resize-y pt-3" placeholder="A product, SaaS idea, automation project, client work or experiment…" /></label>
              <label className="form-label mt-5 block">Main skills or background<input required name="skills" className="form-input" placeholder="Development, product, marketing, design, sales…" /></label>
              <label className="form-label mt-5 block">What would you like to contribute? <span className="font-normal text-[#8798a6]">(optional)</span><textarea name="contribution" className="form-input min-h-24 resize-y pt-3" placeholder="A lesson, skill, introduction, idea or question…" /></label>
              <label className="form-label mt-5 block">What are you looking for right now?<select required name="interest" className="form-input default-select"><option value="">Select one</option><option>Learning and exchanging ideas</option><option>Meeting other builders</option><option>Finding collaborators for a project</option><option>Sharing my experience</option><option>Exploring a future collaboration</option></select></label>
              <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-[#65736e]"><input required name="contact_permission" value="yes" type="checkbox" className="mt-0.5 size-4 accent-[#087fe5]" /><span>I agree that PEXEK may use these details to review my participation request and contact me about this networking session, in line with the <a href="/privacy" className="font-semibold text-[#087fe5] underline underline-offset-2">Privacy Notice</a>.</span></label>
              <div id="builders-message" className="mt-5" aria-live="polite">{status === "error" && <p role="alert" className="form-message form-message-error">{error}</p>}{status === "success" && <p role="status" className="form-message form-message-success">Thank you. Your interest has been received. We will review the responses and contact the selected participants with the first-session details.</p>}</div>
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center"><Button disabled={status === "submitting"} type="submit" className="h-12 rounded-md bg-[#087fe5] px-6 font-semibold text-white hover:bg-[#0569bf] disabled:cursor-not-allowed">{status === "submitting" ? "Sending your response…" : "Join the builders circle"} <ArrowRight className="size-4" /></Button><span className="text-xs text-[#718594]">Small group · informal discussion · Agadir</span></div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#020718] py-10 text-[#c6d4ce]"><div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><a href="/" className="flex items-center gap-2 text-white"><img src="/assets/pexek-original-logo_3cca9eb7.png" alt="" className="size-8" /><span className="font-display font-semibold tracking-[-0.05em]">PEXEK</span></a><p className="mt-3 max-w-sm text-sm leading-6 text-[#9caea7]">Managed customer-conversation workflows with approved knowledge and human control.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#aebdb7]"><a href="/">PEXEK home</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="mailto:hello@pexek.com">hello@pexek.com</a><span>© {new Date().getFullYear()} PEXEK</span></div></div></footer>
    </div>
  );
}
