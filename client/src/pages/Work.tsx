// Design note: Contemporary Digital Atelier — a source-linked editorial dossier that presents delivery scope before any unsupported outcome claim.
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { workCaseStudies } from "@/content/siteContent";
import { usePageMetadata } from "@/lib/seo";

export default function Work() {
  usePageMetadata({
    title: "Work / Case Studies — Dev Yeasin",
    description:
      "Three source-linked public work records covering a Systeme.io funnel, Shopify storefront, and fitness funnel build by Dev Yeasin.",
    path: "/work",
  });

  return (
    <div className="site-shell min-h-screen">
      <SiteHeader />
      <main>
        <section className="dossier-hero">
          <div className="site-container">
            <div className="dossier-rail"><span>Work / 01</span><span>Public portfolio records</span></div>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-9">
                <p className="kicker">Case studies</p>
                <h1 className="display-title mt-6 max-w-6xl">Three builds. <em className="text-[#f04e37]">One visible record.</em></h1>
              </div>
              <p className="text-lg leading-8 text-white/60 lg:col-span-3">Source-linked work records that explain the delivery scope without inventing commercial outcomes.</p>
            </div>
            <div className="dossier-stamp">
              <span>Selected public preview</span>
              <strong>FACTS BEFORE CLAIMS</strong>
              <span>Independent digital studio</span>
            </div>
          </div>
        </section>

        <section className="work-page-intro">
          <div className="site-container grid gap-10 py-16 md:grid-cols-12 md:items-end md:py-20">
            <div className="md:col-span-7">
              <p className="kicker text-[#f04e37]">How to read this page</p>
              <h2 className="serif-heading mt-6 max-w-3xl text-5xl md:text-6xl">Context, role, delivery—then the original source.</h2>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <p>Each entry expands an authorised public Fiverr preview. The record describes visible delivery scope and points back to the original portfolio entry; it does not make revenue, conversion, lead, or client-result claims.</p>
              <a href="/#work" className="secondary-link mt-7"><ArrowLeft className="h-4 w-4" />View the homepage selection</a>
            </div>
          </div>
        </section>

        <section className="site-container py-16 md:py-24" aria-labelledby="case-records-title">
          <div className="flex flex-wrap items-end justify-between gap-5 border-b border-black/20 pb-6">
            <div><p className="kicker text-[#f04e37]">Public case record / 01–03</p><h2 id="case-records-title" className="serif-heading mt-5 text-4xl md:text-5xl">The build register.</h2></div>
            <p className="max-w-sm text-sm leading-7 text-[var(--ink-muted)]">Public preview imagery is retained as source-linked reference material only.</p>
          </div>

          <div className="case-records mt-10">
            {workCaseStudies.map((study) => (
              <article className="case-record" key={study.index}>
                <figure className="case-media">
                  <img src={study.image} alt={study.alt} width="736" height="552" loading="lazy" decoding="async" />
                  <figcaption><span>{study.index} / public preview</span><span>{study.category}</span></figcaption>
                </figure>
                <div className="case-copy">
                  <div className="case-topline"><span>Case record / {study.index}</span><strong>Source-linked</strong></div>
                  <h2 className="case-title">{study.title}</h2>
                  <p className="case-summary">{study.context}</p>
                  <div className="case-ledger">
                    <div><h3>Role &amp; scope</h3><p>{study.role}</p></div>
                    <div><h3>Visible deliverables</h3><div className="case-deliverables">{study.deliverables.map((item) => <span key={item}>{item}</span>)}</div></div>
                    <div><h3>Build record</h3><p>{study.buildDetail}</p></div>
                  </div>
                  <a href={study.sourceHref} className="case-source" target="_blank" rel="noreferrer">Open the public Fiverr record <ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ink-panel">
          <div className="site-container grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
            <div className="md:col-span-8">
              <p className="kicker">A useful next step</p>
              <h2 className="serif-heading mt-5 text-4xl text-white md:text-5xl">Have a build in mind? Start with the situation, not a sales promise.</h2>
            </div>
            <div className="md:col-span-4 md:justify-self-end"><a href="/#contact" className="footer-contact">Begin with the brief <ArrowRight className="h-4 w-4" /></a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
