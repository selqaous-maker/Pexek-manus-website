/* Signal Atelier Midnight: purpose-built automotive after-sales workflow page; concise French, human control, no proof claims. */
import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, FileText, MessageCircleMore, ShieldCheck, UsersRound, Wrench } from "lucide-react";
import GlobalEnglishHeader from "@/components/GlobalEnglishHeader";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkodykaj";

const sectionClass = "automotive-section";

// Release scope: preserve approved Automotive After-sales content and source-checkbox UX.
export default function AutomotiveAfterSales() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [sourceError, setSourceError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    const data = new FormData(form);
    const contact = String(data.get("professional_contact") || "").trim();
    const selectedSources = data.getAll("enquiry_sources");
    if (selectedSources.length === 0) {
      setSourceError("Sélectionnez au moins une source de demandes.");
      setStatus("error");
      return;
    }
    setSourceError("");
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const phone = /^[+\d][\d\s().-]{7,}$/.test(contact);
    if (!form.checkValidity() || (!email && !phone)) {
      setStatus("error");
      setError("Indiquez un e-mail professionnel ou un numéro de téléphone / WhatsApp valide.");
      form.reportValidity();
      return;
    }
    if (String(data.get("website") || "").trim()) {
      setStatus("success");
      return;
    }
    setStatus("submitting");
    data.set("page_url", window.location.href);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Formspree request failed");
      form.reset();
      setSourceError("");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Votre demande n’a pas pu être envoyée. Réessayez ou contactez PEXEK directement.");
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": "https://pexek.com/industries/automotive-after-sales#webpage", url: "https://pexek.com/industries/automotive-after-sales", name: "Demandes et rendez-vous automobiles au Maroc | PEXEK", description: "PEXEK aide les entreprises et centres de services automobiles au Maroc à structurer les demandes récentes, préparer les rappels ou rendez-vous et conserver le contrôle humain sur les décisions importantes.", inLanguage: "fr-MA" },
      { "@type": "BreadcrumbList", "@id": "https://pexek.com/industries/automotive-after-sales#breadcrumb", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://pexek.com/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://pexek.com/industries" },
        { "@type": "ListItem", position: 3, name: "Services automobiles", item: "https://pexek.com/industries/automotive-after-sales" },
      ] },
      { "@type": "FAQPage", "@id": "https://pexek.com/industries/automotive-after-sales#faq", mainEntity: [
        ["Le parcours reprend-il une demande ancienne sans contexte ?", "Non. Le périmètre concerne les demandes récentes et éligibles dont la source et le contexte peuvent être établis."],
        ["Le parcours peut-il donner un prix ou confirmer une intervention ?", "Non. Le prix, les remises, la faisabilité, les pièces, le diagnostic et les décisions de sécurité restent du ressort de l’équipe."],
        ["Les règles sont-elles identiques pour chaque entreprise ?", "Non. Les sources, questions, règles de relais et prochaines actions sont définies selon le contexte de chaque entreprise."],
      ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };

  return (
    <div className="automotive-page min-h-screen overflow-x-hidden bg-[#f4f8fc] text-[#081528]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="grain" aria-hidden="true" />
      <div className="global-route-signature" aria-hidden="true"><span>INPUT</span><i /><b /><i /><b /><i /><b /><i /><b className="handoff" /><span>HANDOFF</span></div>
      <GlobalEnglishHeader activeRoute="/industries" />
      <main>
        <section className="automotive-hero">
          <div className="container automotive-hero-grid">
            <div className="automotive-hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Automobile · Services après-vente</div>
              <h1>Ne laissez plus vos demandes de service automobile sans prochaine action claire.</h1>
              <p>PEXEK aide les entreprises et centres de services automobiles à structurer les demandes récentes, reprendre les demandes restées sans suite claire et préparer un prochain rendez-vous ou un suivi humain avec les informations approuvées par votre équipe.</p>
              <div className="automotive-actions"><a className="automotive-primary-cta" href="#eligibilite">Évaluer l’éligibilité de mon entreprise <ArrowRight className="size-4" /></a><a className="automotive-secondary-cta" href="#fonctionnement">Voir le fonctionnement <ArrowDown className="size-4" /></a></div>
              <div className="automotive-hero-note"><UsersRound className="size-4" /> Un parcours configuré autour de vos demandes, de votre réservation et des décisions qui restent humaines.</div>
            </div>
            <div className="automotive-hero-visual" aria-label="Workflow illustratif de demande récente vers une prochaine action humaine">
              <div className="automotive-blueprint-grid" aria-hidden="true" />
              <div className="automotive-visual-kicker">ILLUSTRATIVE SERVICE ROUTE</div>
              <div className="automotive-route-card"><div className="automotive-route-line" aria-hidden="true" /><div><span className="automotive-route-node cyan" />Demande récente</div><div><span className="automotive-route-node cyan" />Contexte approuvé</div><div><span className="automotive-route-node cyan" />Prochaine action préparée</div><div><span className="automotive-route-node apricot" />Équipe du centre</div></div>
              <div className="automotive-visual-note">Demande → contexte → suite</div>
            </div>
          </div>
        </section>

        <section className={`${sectionClass} automotive-problem-section`} id="probleme"><div className="container automotive-split"><div><div className="eyebrow"><span className="eyebrow-count">01</span> Demandes récentes</div><h2>Une demande récente n’a de valeur que si la prochaine action est claire.</h2></div><div><p>Une demande de rappel, une question reçue sur WhatsApp, une demande envoyée depuis le site ou une réservation commencée peut rester sans suite lorsque les informations sont incomplètes, que l’équipe est occupée ou que le message arrive en dehors du rythme habituel du centre.</p><p>Le sujet n’est pas seulement de recevoir la demande. Il faut retrouver son contexte, comprendre ce que la personne souhaite faire ensuite et donner à l’équipe un point de départ suffisamment clair pour confirmer la suite.</p><div className="automotive-reason-grid"><div><strong>Demande reçue</strong><span>Service, rappel ou rendez-vous.</span></div><div><strong>Contexte à reprendre</strong><span>Les informations doivent être réunies.</span></div><div><strong>Prochaine action</strong><span>La bonne personne confirme la suite.</span></div></div></div></div></section>

        <section className={`${sectionClass} automotive-workflow-section`} id="fonctionnement"><div className="container"><div className="automotive-section-intro"><div className="eyebrow"><span className="eyebrow-count">02</span> Parcours de réservation</div><h2>Préparer une prochaine action sans retirer la décision à votre équipe.</h2><p>Le parcours ci-dessous est illustratif. Il montre comment une demande récente peut être structurée avant un rappel, un dépôt du véhicule, une inspection ou un rendez-vous. Le processus réel dépend des sources autorisées et des règles définies avec chaque entreprise.</p></div><div className="automotive-workflow-route"><div className="automotive-workflow-step"><span>01</span><strong>Demande récente</strong><small>Une demande est identifiée dans une source autorisée.</small></div><ArrowRight className="automotive-workflow-arrow" /><div className="automotive-workflow-step"><span>02</span><strong>Contexte approuvé</strong><small>La source et les informations acceptées sont conservées.</small></div><ArrowRight className="automotive-workflow-arrow" /><div className="automotive-workflow-step"><span>03</span><strong>Questions administratives</strong><small>Service, zone, créneau et éléments approuvés.</small></div><ArrowRight className="automotive-workflow-arrow" /><div className="automotive-workflow-step"><span>04</span><strong>Prochaine action préparée</strong><small>Rappel, dépôt, inspection ou rendez-vous à confirmer.</small></div><ArrowRight className="automotive-workflow-arrow" /><div className="automotive-workflow-step human"><span>05</span><strong>Équipe du centre</strong><small>Votre équipe vérifie et confirme la suite.</small></div></div><p className="automotive-disclosure">Workflow illustratif — le périmètre, les questions et les règles de relais sont définis avec chaque entreprise.</p></div></section>

        <section className={`${sectionClass} automotive-control-section`}><div className="container automotive-split"><div><div className="eyebrow"><span className="eyebrow-count">03</span> Contrôle et périmètre</div><h2>Le parcours prépare le contexte. Votre équipe garde les décisions qui comptent.</h2><p>Le parcours peut recueillir uniquement les informations administratives approuvées avec l’entreprise : service recherché, zone, créneau préféré et, lorsque cela est autorisé, catégorie ou modèle du véhicule.</p></div><div className="automotive-control-grid"><div><h3><Check className="size-4" /> PEXEK prépare</h3><p>Le contexte selon les règles définies avec l’entreprise.</p><p>Les questions et la prochaine action approuvées.</p><p>Le relais vers l’équipe lorsque le parcours atteint sa limite.</p></div><div className="human"><h3><span /> L’équipe conserve</h3><p>Le diagnostic, la sécurité et la faisabilité technique.</p><p>Le prix, les remises et les décisions commerciales.</p><p>Les pièces, l’assurance, le financement, les plaintes et les urgences.</p></div></div></div><div className="container automotive-data-note"><ShieldCheck className="size-4" /><span>Les demandes de retrait sont respectées immédiatement. Aucune liste achetée, scrapée, issue d’un annuaire ou sans source connue ne doit entrer dans le périmètre. <a href="/privacy">Consulter la Privacy Notice de PEXEK</a></span></div></section>

        <div className="kitchen-resource-band automotive-resource-band"><div className="container"><aside className="kitchen-resource-card" aria-labelledby="automotive-guide-title"><div className="kitchen-resource-icon" aria-hidden="true"><FileText className="size-5" /></div><div className="kitchen-resource-copy"><div className="eyebrow">GUIDE PRATIQUE · PDF</div><h3 id="automotive-guide-title">Structurer les demandes automobiles restées sans suite</h3><p>Un guide pratique pour identifier les demandes potentiellement éligibles, examiner les informations disponibles et préparer un rappel, un dépôt du véhicule, une inspection ou un rendez-vous avec un relais humain clair.</p><a href="/resources/guide-demandes-automobiles-sans-suite-maroc.pdf" download="guide-demandes-automobiles-sans-suite-maroc.pdf" className="kitchen-resource-link" aria-label="Télécharger le guide PDF sur les demandes automobiles restées sans suite">Télécharger le guide <ArrowUpRight className="size-4" /></a><span className="kitchen-resource-meta">PDF gratuit · 6 pages · Aucun formulaire requis</span></div></aside></div></div>

        <section className={`${sectionClass} automotive-fit-section`}><div className="container automotive-split"><div><div className="eyebrow"><span className="eyebrow-count">04</span> Éligibilité</div><h2>Un bon point de départ commence par les demandes que votre entreprise reçoit déjà.</h2><p>Le parcours peut correspondre à une entreprise qui reçoit des demandes récentes de service, dispose d’un contexte exploitable et peut confirmer la prochaine étape avec une personne responsable.</p></div><div className="automotive-fit-list"><p><Check className="size-4" /> Demandes provenant du site, de WhatsApp, du téléphone ou d’une source identifiable.</p><p><Check className="size-4" /> Demandes de rappel, de dépôt du véhicule, d’inspection ou de rendez-vous.</p><p><Check className="size-4" /> Processus existant pour confirmer la prochaine action.</p><p><Check className="size-4" /> Possibilité de commencer avec un périmètre défini.</p><div className="automotive-exclude"><strong>Hors périmètre initial</strong><span>Listes achetées, scrapées ou issues d’un annuaire · bases sans source · demandes nécessitant d’abord un diagnostic, une décision tarifaire ou un avis de sécurité.</span></div></div></div></section>

        <section className={`${sectionClass} automotive-scope-section`}><div className="container"><div className="automotive-section-intro"><div className="eyebrow"><span className="eyebrow-count">05</span> Périmètre de départ</div><h2>Commencer avec un périmètre défini, puis apprendre à partir du vrai processus.</h2><p>Une première discussion permet de comprendre les sources de demandes, les informations disponibles, la prochaine action attendue et les situations qui doivent revenir immédiatement à l’équipe.</p></div><div className="automotive-responsibility-grid"><div><Wrench className="size-6 text-[#18c9ff]" /><h3>PEXEK prépare</h3><p>Le parcours, les règles approuvées, les scénarios de test et le relais documenté.</p></div><div><UsersRound className="size-6 text-[#f4b38d]" /><h3>L’entreprise confirme</h3><p>Les demandes éligibles, les questions, les règles de rappel ou de rendez-vous et la décision finale.</p></div></div><div className="automotive-faq" id="automotive-faq"><details><summary>Le parcours reprend-il une demande ancienne sans contexte ?<ChevronDown className="size-4" /></summary><p>Non. Le périmètre concerne les demandes récentes et éligibles dont la source et le contexte peuvent être établis.</p></details><details><summary>Le parcours peut-il donner un prix ou confirmer une intervention ?<ChevronDown className="size-4" /></summary><p>Non. Le prix, les remises, la faisabilité, les pièces, le diagnostic et les décisions de sécurité restent du ressort de l’équipe.</p></details><details><summary>Les règles sont-elles identiques pour chaque entreprise ?<ChevronDown className="size-4" /></summary><p>Non. Les sources, questions, règles de relais et prochaines actions sont définies selon le contexte de chaque entreprise.</p></details></div></div></section>

        <section className={`${sectionClass} automotive-form-section`} id="eligibilite"><div className="container automotive-form-layout"><div><div className="eyebrow"><span className="eyebrow-count">06</span> Évaluation du contexte</div><h2>Présentez-nous vos demandes actuelles et la prochaine action qui reste difficile à préparer.</h2><p>PEXEK examinera vos sources de demandes, votre processus de rappel ou de rendez-vous et les limites que votre équipe souhaite conserver. Cette première évaluation sert à comprendre le contexte avant de proposer une suite éventuelle.</p><div className="automotive-form-note"><strong>Avant de commencer</strong><span>Ne transmettez pas de base client, donnée sensible, pièce d’identité, dossier d’assurance ou détail d’accident.</span></div></div><form className="automotive-form" onSubmit={handleSubmit} aria-busy={status === "submitting"} aria-describedby="automotive-form-message"><input type="hidden" name="_subject" value="PEXEK Automotive After-sales Eligibility Assessment" /><input type="hidden" name="form_source" value="PEXEK Automotive After-sales Eligibility Assessment" /><input type="hidden" name="page_url" value="" /><input className="form-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" /><label>Nom<input required name="full_name" autoComplete="name" className="form-input" /></label><label>Nom de l’entreprise<input required name="company" autoComplete="organization" className="form-input" /></label><label>Ville<select required name="city" className="form-input"><option value="">Sélectionner</option><option>Casablanca</option><option>Rabat</option><option>Autre ville du Maroc</option></select></label><label>Type d’entreprise automobile<select required name="business_type" className="form-input"><option value="">Sélectionner</option><option>Centre de services automobiles</option><option>Detailing, céramique ou PPF</option><option>Pneus et géométrie</option><option>Autre activité d’après-vente</option></select></label><label>Principal service concerné<input required name="service_category" className="form-input" placeholder="Ex. entretien, pneus, inspection…" /></label><fieldset className="automotive-source-field" aria-describedby="automotive-source-error"><legend>Sources principales des demandes</legend><div className="automotive-source-options">{["Site web", "WhatsApp", "Téléphone", "Autre source identifiable"].map((source) => <label className="automotive-source-option" key={source}><input type="checkbox" name="enquiry_sources" value={source} onChange={() => setSourceError("")} /><span>{source}</span></label>)}</div><p id="automotive-source-error" className="automotive-source-error" role="alert">{sourceError}</p><small>Sélectionnez une ou plusieurs sources.</small></fieldset><label>Volume approximatif de demandes mensuelles<select required name="monthly_volume" className="form-input"><option value="">Sélectionner</option><option>Moins de 25</option><option>25 à 75</option><option>76 à 150</option><option>Plus de 150</option></select></label><label>Demandes récentes sans prochaine action claire<select required name="unclear_next_action" className="form-input"><option value="">Sélectionner</option><option>Aucune ou très peu</option><option>Quelques demandes</option><option>Régulièrement</option><option>Je ne sais pas encore</option></select></label><label className="automotive-contact-field">Contact professionnel — e-mail ou WhatsApp<input required name="professional_contact" autoComplete="email tel" className="form-input" placeholder="e-mail ou numéro WhatsApp" /></label><label className="automotive-consent"><input required type="checkbox" name="consent" value="yes" /> <span>J’autorise PEXEK à utiliser les informations soumises afin d’examiner ma demande et de me répondre, conformément à la <a href="/privacy">Privacy Notice</a>.</span></label><button type="submit" disabled={status === "submitting"} className="automotive-submit">{status === "submitting" ? "Envoi en cours…" : "Évaluer l’éligibilité de mon entreprise"} <ArrowRight className="size-4" /></button><div id="automotive-form-message" className={`automotive-form-message ${status}`} role={status === "error" ? "alert" : "status"}>{status === "success" && "Merci. Votre demande a été reçue et sera examinée manuellement."}{status === "error" && error}</div></form></div></section>
      </main>
      <footer className="automotive-footer"><div className="container automotive-footer-inner"><a className="brand-mark" href="/" aria-label="PEXEK homepage"><img src="/assets/NeonBlueGeometricPEmblem.webp" alt="" className="brand-symbol h-10 w-10 object-contain" /><span className="brand-wordmark"><strong className="font-display">PEXEK</strong><small>Workflow system</small></span></a><div className="automotive-footer-links"><a href="/solutions">Solutions</a><a href="/how-it-works">How it works</a><a href="/industries">Industries</a><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><p>© 2026 PEXEK. Workflow systems with human control.</p></div></footer>
    </div>
  );
}
