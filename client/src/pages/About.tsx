// Design note: Contemporary Digital Atelier — a personal page that reads as a concise professional dossier, not a generic biography.
import { ArrowDownRight, ArrowUpRight, Github, Globe2, MapPin, Workflow } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { internationalAudienceNote, platformDestinations, portraitUrl, studio } from "@/content/siteContent";
import { usePageMetadata } from "@/lib/seo";

export default function About() {
  usePageMetadata({ title: "About Dev Yeasin — Independent Digital Studio", description: "Profile of Dev Yeasin, an independent web and systems specialist for storefronts, websites, and customer journeys.", path: "/about" });

  return (
    <div className="site-shell min-h-screen">
      <SiteHeader />
      <main>
        <section className="dossier-hero dossier-hero-full">
          <div className="site-container">
            <div className="dossier-rail"><span>Profile / 01</span><span>Independent practice</span></div>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-9">
                <p className="kicker">About Dev Yeasin</p>
                <h1 className="display-title mt-6 max-w-6xl">A clear digital point of view, with one accountable owner.</h1>
              </div>
              <p className="text-lg leading-8 text-white/60 lg:col-span-3">{studio.positioning} The focus is direct collaboration, clear scope, and work that gives the next person less to untangle.</p>
            </div>
            <div className="dossier-stamp">
              <span>Independent practice</span>
              <strong>WEBSITES · STOREFRONTS · CUSTOMER JOURNEYS</strong>
              <span>Profile / Verified detail only</span>
            </div>
          </div>
        </section>

        <section className="site-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="kicker text-[#f04e37]">Working identity</p>
              <h2 className="serif-heading mt-6 text-5xl md:text-6xl">Independent does not mean improvised.</h2>
            </div>
            <div className="lg:col-span-8 lg:grid lg:grid-cols-[.82fr_1fr_1fr] lg:gap-x-8">
              <figure className="about-portrait"><img src={portraitUrl} alt="Dev Yeasin, independent web and systems specialist" width="2000" height="2000" loading="lazy" decoding="async" /><figcaption>Dev Yeasin / Independent specialist</figcaption></figure>
              <div>
                <p className="body-copy">Dev Yeasin works across the visible and operational parts of a client’s digital presence: website surfaces, storefronts, lead journeys, and the systems that support a clear next step.</p>
                <p className="body-copy mt-6">The approach is intentionally small-studio: understand the brief, build visibly, and hand over work in a form a client can continue to use.</p>
              </div>
              <dl className="dossier-list mt-10 lg:mt-0">
                <div><dt><MapPin className="h-4 w-4" /> Based</dt><dd>{studio.location}</dd></div>
                <div><dt><Globe2 className="h-4 w-4" /> Collaboration</dt><dd>Remote and asynchronous where appropriate</dd></div>
                <div><dt><Workflow className="h-4 w-4" /> Availability</dt><dd>{studio.availability}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="ink-panel">
          <div className="site-container grid gap-12 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-5">
              <p className="kicker">Global audience / reporting note</p>
              <h2 className="serif-heading mt-6 text-5xl text-white md:text-6xl">International work deserves careful reporting.</h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg leading-8 text-white/65">{internationalAudienceNote.body}</p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#f04e37]"><span className="status-dot" />{internationalAudienceNote.status}</div>
            </div>
          </div>
        </section>

        <section className="site-container py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="kicker">Public professional surface</p>
              <h2 className="serif-heading mt-6 text-5xl md:text-6xl">One place for clients and hiring teams.</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="platform-table">
                {platformDestinations.map((platform, index) => (
                  <a key={platform.label} href={platform.href} target="_blank" rel="noreferrer" className="platform-line">
                    <span>{String(index + 1).padStart(2, "0")}</span><strong>{platform.label}</strong><small>{platform.note}</small><ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <a href="/#contact" className="secondary-link mt-9">Share a website or systems brief <ArrowDownRight className="h-4 w-4" /></a>
              <div className="sr-only"><Github /></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
