// Design note: Contemporary Digital Atelier — a quiet editorial field note with precise type, a practical evidence-first structure, and restrained Signal Red emphasis.
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { usePageMetadata } from "@/lib/seo";

const decisions = [
  {
    number: "01",
    title: "Start with the reply path.",
    body: "Before choosing fields, decide what a useful enquiry should make possible: understand the situation, reply to the person, and decide whether a conversation is appropriate. This site asks for a name, work email, project area, and message; a company name is optional.",
  },
  {
    number: "02",
    title: "Ask for consent in the same moment.",
    body: "A form should say why information is being collected before the visitor sends it. Here, the consent checkbox is required and links directly to the privacy policy. The enquiry is for a reply and a possible project conversation, not unrelated marketing.",
  },
  {
    number: "03",
    title: "Guide the brief—do not interrogate it.",
    body: "The message prompt asks for context, the main goal, timing, and useful links or references. That gives a visitor a practical starting point without turning a first message into a long application form. A small minimum length helps prevent an accidental empty submission.",
  },
  {
    number: "04",
    title: "Make the acknowledgement useful.",
    body: "After a successful submission, the site confirms that the enquiry was received. A notification can then alert Dev Yeasin by email so the request is not dependent on a manual dashboard check. Replies can stay in the normal email conversation with the person who wrote in.",
  },
  {
    number: "05",
    title: "Describe security without pretending it is finished.",
    body: "The current form combines clear consent, basic browser checks, a quiet honeypot check, and limited access to submitted enquiries. It is a practical setup for ordinary enquiry traffic, not a promise of absolute security. Before heavier promotion, the next sensible improvement is server-side validation, rate limits, and bot protection.",
  },
];

export default function Insights() {
  usePageMetadata({
    title: "Insights / Notes — Dev Yeasin",
    description: "A practical field note from Dev Yeasin on making a small-business website enquiry form clear, private, and reply-ready.",
    path: "/insights",
  });

  return (
    <div className="site-shell min-h-screen">
      <SiteHeader />
      <main>
        <section className="dossier-hero dossier-hero-full">
          <div className="site-container">
            <div className="dossier-rail"><span>Insights / 01</span><span>Original field notes</span></div>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-9">
                <p className="kicker">Notes from the build</p>
                <h1 className="display-title mt-6 max-w-6xl">An enquiry form should be a <em className="text-[#f04e37]">conversation</em>, not a collection point.</h1>
              </div>
              <p className="text-lg leading-8 text-white/60 lg:col-span-3">A practical note on building a clear, consent-led way for a small business website to receive and reply to enquiries.</p>
            </div>
            <div className="dossier-stamp">
              <span>Note / 01</span>
              <strong>27 AUGUST 2026</strong>
              <span>Written from a live build</span>
            </div>
          </div>
        </section>

        <section className="site-container py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <aside className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="kicker text-[#f04e37]">A practical decision</p>
              <h2 className="serif-heading mt-6 text-5xl leading-[0.95] md:text-6xl">Useful enough to answer. Quiet enough to respect.</h2>
              <div className="mt-9 border-y border-black/15 py-6 text-sm leading-7 text-[var(--ink-muted)]">
                <p><strong className="font-medium text-[var(--ink)]">Published</strong><br />27 August 2026</p>
                <p className="mt-5"><strong className="font-medium text-[var(--ink)]">Format</strong><br />Original implementation note</p>
                <p className="mt-5"><strong className="font-medium text-[var(--ink)]">Scope</strong><br />Enquiry form and response flow</p>
              </div>
              <a href="/#contact" className="secondary-link mt-8">See the live form <ArrowRight className="h-4 w-4" /></a>
            </aside>

            <article className="lg:col-span-8 lg:pl-10">
              <div className="border-b border-black/20 pb-10">
                <p className="max-w-3xl font-display text-3xl leading-tight text-[var(--ink)] md:text-4xl">A small business contact form does not need to look complex to be thoughtful. It needs to help the right person explain their situation, make clear what will happen to their details, and give the owner a reliable way to respond.</p>
                <p className="body-copy mt-7 max-w-3xl">This note records the decisions behind the live enquiry form on this website. It is not a universal checklist or a security promise. It is a practical explanation of one independently run site: what is asked, why it is asked, and what still deserves improvement as traffic grows.</p>
              </div>

              <div className="mt-3">
                {decisions.map((decision) => (
                  <section key={decision.number} className="grid gap-5 border-b border-black/15 py-9 md:grid-cols-[88px_1fr] md:gap-8">
                    <div className="flex items-start gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f04e37]"><span>{decision.number}</span><span className="mt-1.5 h-px w-7 bg-[#f04e37]" /></div>
                    <div>
                      <h3 className="font-display text-3xl leading-[1.05] text-[var(--ink)]">{decision.title}</h3>
                      <p className="body-copy mt-4 max-w-3xl">{decision.body}</p>
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 grid gap-7 bg-[#f2efe7] p-7 md:grid-cols-[auto_1fr] md:p-9">
                <div className="flex h-11 w-11 items-center justify-center border border-black/20 text-[#f04e37]"><ShieldCheck className="h-5 w-5" /></div>
                <div>
                  <p className="kicker text-[#f04e37]">The honest boundary</p>
                  <h3 className="font-display mt-4 text-3xl leading-tight text-[var(--ink)]">No form can promise absolute security.</h3>
                  <p className="body-copy mt-4 max-w-2xl">The Privacy Policy explains the information this website collects, its intended use, storage, and visitor choices. The note stays aligned with that record and avoids publishing private configuration or secret values.</p>
                  <a href="/privacy" className="secondary-link mt-6">Read the privacy policy <ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="ink-panel">
          <div className="site-container grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
            <div className="md:col-span-8">
              <p className="kicker">A quiet publishing standard</p>
              <h2 className="serif-heading mt-5 text-4xl text-white md:text-5xl">One useful, dated note when there is something real to explain.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">This is not a volume blog. New notes will be added only when a real build, handover, or decision offers a clear lesson without revealing client-sensitive information.</p>
            </div>
            <div className="md:col-span-4 md:justify-self-end"><a href="/#contact" className="footer-contact">Begin with the brief <Check className="h-4 w-4" /></a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
