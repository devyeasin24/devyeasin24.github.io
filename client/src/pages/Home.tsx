// Design note: Contemporary Digital Atelier — an immersive dark-led agency composition with editorial structure, material-like CSS visuals, and verified-evidence boundaries.
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Layers3, Mail, MessageCircle, Sparkles } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiFiverr, SiGithub, SiUpwork, SiX } from "react-icons/si";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { EnquiryForm } from "@/components/EnquiryForm";
import { DyMark } from "@/components/DyMark";
import { contactDestinations, evidencePolicy, fiverrRecord, platformDestinations, portraitUrl, publicRecord, selectedWork, services, studio, workingPrinciples } from "@/content/siteContent";
import { usePageMetadata } from "@/lib/seo";

const platformIconByLabel = {
  Upwork: SiUpwork,
  Fiverr: SiFiverr,
  "Fiverr portfolio": SiFiverr,
  GitHub: SiGithub,
  LinkedIn: FaLinkedinIn,
  "X (Twitter)": SiX,
} as const;

export default function Home() {
  usePageMetadata({ title: "Dev Yeasin — Independent Digital Studio", description: "Independent digital studio for Shopify landing pages, WordPress websites, and practical customer journeys.", path: "/" });

  return (
    <div className="site-shell min-h-screen">
      <SiteHeader />
      <main id="top">
        <section className="hero-shell" aria-labelledby="hero-title">
          <div className="site-container hero-layout relative z-10 grid gap-12 py-12 lg:grid-cols-12 lg:items-end lg:py-16">
            <div className="hero-copy lg:col-span-8 lg:pb-8">
              <div className="hero-meta reveal"><span><DyMark className="hero-stamp" />Digital strategy / web execution</span><span>{studio.location}</span></div>
              <h1 id="hero-title" className="hero-title reveal delay-1 mt-10">Give your next digital move a <em>clearer edge.</em></h1>
              <p className="hero-deck reveal delay-2 mt-9">A one-person digital studio for businesses and teams that need a sharper website, storefront, or customer journey—without the noise of a made-up agency.</p>
              <div className="reveal delay-3 mt-10 flex flex-wrap gap-3">
                <a href="#contact" className="primary-link"><span>Discuss a project</span><ArrowRight className="h-4 w-4" /></a>
                <a href="#services" className="ghost-link"><span>Explore capabilities</span><ArrowDownRight className="h-4 w-4" /></a>
              </div>
            </div>
            <div className="hero-stage reveal delay-2 lg:col-span-4">
              <div className="portrait-notation"><span>Portrait / 01</span><span>Independent practice</span></div>
              <figure className="hero-portrait">
                <img src={portraitUrl} alt="Dev Yeasin, independent web and systems specialist" width="2000" height="2000" fetchPriority="high" decoding="async" />
                <figcaption className="portrait-caption"><span>Dev Yeasin / studio profile</span><span>Original portrait · independently operated</span></figcaption>
              </figure>
              <div className="hero-profile-meta"><span className="status-dot" />Open to scoped work <strong>01 / 03</strong></div>
            </div>
          </div>
          <div className="hero-scroller"><span>Scroll for the operating model</span><i /></div>
        </section>

        <section className="proof-strip">
          <div className="site-container grid gap-7 py-7 md:grid-cols-[1fr_auto] md:items-center">
            <p>Studio standard, personally accountable.</p>
            <div className="proof-terms"><span>Clear scope</span><i /> <span>Visible build</span><i /> <span>Clean handover</span></div>
          </div>
        </section>

        <section className="public-record-section" aria-labelledby="public-record-title">
          <div className="site-container py-14 md:py-18">
            <div className="public-record-heading">
              <div><p className="kicker text-[#f04e37]">Public record / source-labelled</p><h2 id="public-record-title" className="serif-heading mt-4 text-4xl md:text-6xl">Trust is clearer when the source stays visible.</h2></div>
              <p>Current public profile figures are shown separately from broader claims. They are linked to the original platform and dated for clarity.</p>
            </div>
            <a className="public-record-ledger" href={publicRecord.sourceHref} target="_blank" rel="noreferrer" aria-label="View the public Upwork profile used as the source for these figures">
              {publicRecord.metrics.map((metric, index) => <div className="public-record-item" key={metric.label}><span>0{index + 1}</span><strong>{metric.value}</strong><div><h3>{metric.label}</h3><p>{metric.detail}</p></div></div>)}
              <div className="public-record-source"><span>Source / {publicRecord.sourceLabel}</span><span>Checked {publicRecord.checkedOn} <ArrowUpRight className="h-3.5 w-3.5" /></span></div>
            </a>
            <a className="fiverr-record" href={fiverrRecord.sourceHref} target="_blank" rel="noreferrer" aria-label="View the public Fiverr profile used as the source for these figures">
              <div className="fiverr-record-meta"><span>Also visible / Fiverr public record</span><p>Platform status and review evidence are separated from the seller’s own public delivery statement.</p></div>
              <div className="fiverr-record-metrics">{fiverrRecord.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.detail}</p></div>)}</div>
              <div className="fiverr-record-source">Source / {fiverrRecord.sourceLabel} · Checked {fiverrRecord.checkedOn} <ArrowUpRight className="h-3.5 w-3.5" /></div>
            </a>
          </div>
        </section>

        <section id="services" className="site-container scroll-mt-6 py-20 md:py-30">
          <div className="section-intro grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="kicker text-[#f04e37]">Capabilities / selected</p><h2 className="serif-heading mt-6 text-5xl md:text-7xl">Built around the client’s first impression.</h2></div>
            <p className="body-copy max-w-xl self-end lg:col-span-5 lg:col-start-7">The highest-leverage work usually happens where a customer sees the business for the first time, chooses what to do next, or decides whether a follow-up feels worth their attention.</p>
          </div>
          <div className="service-ledger mt-14">
            {services.map((service) => (
              <article className="service-ledger-row" key={service.index}>
                <span className="service-index">{service.index}</span>
                <div><p className="service-eyebrow">{service.eyebrow}</p><h3>{service.title}</h3></div>
                <p>{service.description}</p>
                <span className="service-detail">{service.scope}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="selected-work-section scroll-mt-6" aria-labelledby="selected-work-title">
          <div className="site-container py-20 md:py-30">
            <div className="selected-work-heading">
              <div><p className="kicker text-[#f04e37]">Selected work / public portfolio</p><h2 id="selected-work-title" className="serif-heading mt-6 text-5xl md:text-7xl">Real build records, linked at the source.</h2></div>
              <p>Three public Fiverr portfolio entries, chosen to show storefront, funnel, and customer-journey work. Scope stays factual; original previews remain one click away.</p>
            </div>
            <div className="selected-work-grid mt-12">
              {selectedWork.map((work) => (
                <a className="work-card" key={work.index} href={work.sourceHref} target="_blank" rel="noreferrer" aria-label={`View the public Fiverr source for ${work.title}`}>
                  <figure className="work-preview"><img src={work.image} alt={work.alt} width="736" height="552" loading="lazy" decoding="async" /><figcaption><span>{work.index}</span><span>{work.category}</span></figcaption></figure>
                  <div className="work-card-body"><h3>{work.title}</h3><p>{work.scope}</p><div className="work-tags">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="work-source">Open public Fiverr record <ArrowUpRight className="h-4 w-4" /></span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="method-section scroll-mt-6">
          <div className="site-container grid gap-12 py-20 md:py-30 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="kicker">Operating method</p><h2 className="serif-heading mt-6 text-5xl text-white md:text-7xl">The work gets clearer as it gets closer to launch.</h2><p className="mt-7 max-w-md leading-7 text-white/60">A calm process matters: it reduces unnecessary rounds, makes feedback more useful, and prevents the final handover from becoming a mystery.</p></div>
            <div className="method-map lg:col-span-7">
              {workingPrinciples.map(([title, copy], index) => <div className="method-node" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="site-container py-20 md:py-30">
          <div className="evidence-section grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="kicker text-[#f04e37]">Portfolio protocol</p><h2 className="serif-heading mt-6 text-5xl md:text-7xl">{evidencePolicy.heading}</h2><p className="body-copy mt-7">{evidencePolicy.body}</p></div>
            <div className="evidence-matrix lg:col-span-7">
              <div className="evidence-caption"><span><DyMark className="evidence-stamp" />Evidence dossier / 01</span><strong>Public material status: <em>source linked</em></strong><small>Selected work uses authorised public Fiverr previews and retains its original source.</small></div>
              <div className="matrix-image"><div className="matrix-window"><span>Source register</span><strong>Public preview, factual scope, original link.</strong><p>Each selected entry identifies visible delivery context and links back to the public portfolio record.</p></div></div>
              <div className="source-register" aria-label="Evidence register status"><div><span>01 / public record</span><strong>Profile evidence live</strong><small>Platform figures retain their source and review date.</small></div><div><span>02 / selected work</span><strong>Public preview linked</strong><small>Only public portfolio imagery is used in this initial record.</small></div><div><span>03 / studio note</span><strong>Context before outcome</strong><small>Scope is described without unverified performance claims.</small></div></div>
              <div className="matrix-notes">
                {[
                  ["01", "Case context", "Brief, role, scope, and publication permission must be recorded before an item is public."],
                  ["02", "Source status", "Reviews and figures carry their original platform source and reporting period, or remain unpublished."],
                  ["03", "Technical record", "Public implementation detail is added only where client confidentiality permits it."],
                ].map(([n, label, copy]) => <div key={n}><span>{n}</span><h3>{label}</h3><p>{copy}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="remote-section">
          <div className="site-container grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7"><p className="kicker">For remote teams</p><h2 className="serif-heading mt-6 max-w-4xl text-5xl md:text-7xl">A client-facing portfolio that also makes sense to a hiring manager.</h2></div>
            <div className="lg:col-span-5"><p className="body-copy">The site is designed to show how Dev thinks, where he can contribute, and how to begin a professional conversation about contract, freelance, or remote work.</p><a href="/about" className="secondary-link mt-8">Read the profile <ArrowUpRight className="h-4 w-4" /></a></div>
          </div>
          <div className="site-container remote-rail">
            {[ [Code2, "Focused stack", "Shopify, PageFly, WordPress, Elementor, HighLevel, Systeme.io, HTML and CSS."], [Layers3, "Ways of working", "Scoped delivery, ongoing support where defined, and remote conversations."], [Check, "Professional standard", "Clarity on scope, evidence, and the next practical step."], ].map(([Icon, label, copy]) => { const IconComponent = Icon as typeof Code2; return <div key={label as string}><IconComponent className="h-5 w-5" /><h3>{label as string}</h3><p>{copy as string}</p></div>; })}
          </div>
        </section>

        <section id="contact" className="contact-section scroll-mt-6">
          <div className="site-container grid gap-12 py-20 md:py-30 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="kicker text-[#f04e37]">Contact desk</p><h2 className="serif-heading mt-6 text-5xl md:text-7xl">Bring the brief. Start with the part that matters.</h2><p className="body-copy mt-7">Choose the route that fits you, or send a focused project enquiry through the secure form.</p></div>
            <div className="lg:col-span-7">
              <div className="contact-dossier"><span><DyMark className="contact-stamp" />Enquiry dossier / 01</span><strong>Direct routes and project record</strong><small>Availability is confirmed case by case. A clear scope makes the first reply more useful.</small></div>
              <div className="contact-ledger">
                {contactDestinations.map((item, index) => {
                  const Icon = index === 0 ? Sparkles : index === 1 ? Mail : MessageCircle;
                  return <a key={item.label} href={item.href} target={item.href?.startsWith("mailto:") ? undefined : "_blank"} rel={item.href?.startsWith("mailto:") ? undefined : "noreferrer"} className="contact-ledger-row"><span>0{index + 1}</span><div><strong>{item.label}</strong><small>{item.note}</small></div><Icon className="h-5 w-5" /><ArrowUpRight className="h-4 w-4" /></a>;
                })}
              </div>
              <div className="platform-links">
                <p>Public professional record <span>Source links / current</span></p>
                <div>{platformDestinations.map((item) => {
                  const PlatformIcon = platformIconByLabel[item.label as keyof typeof platformIconByLabel];
                  return <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={`Open Dev Yeasin's ${item.label} profile in a new tab`}><PlatformIcon className="platform-link-icon" aria-hidden="true" focusable="false" />{item.label}</a>;
                })}</div>
              </div>
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
