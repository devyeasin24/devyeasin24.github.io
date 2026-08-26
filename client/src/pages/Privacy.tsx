// Design note: Contemporary Digital Atelier — a transparent policy record presented with the same calm, editorial structure as the studio dossier.
import { ArrowLeft, Mail } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { usePageMetadata } from "@/lib/seo";

const sections = [
  {
    number: "01",
    title: "What this policy covers",
    body: "This policy explains how Dev Yeasin handles information submitted through this portfolio website and its enquiry form. It applies to visitors of devyeasin24.github.io and people who contact the studio through that form.",
  },
  {
    number: "02",
    title: "Information collected",
    body: "The enquiry form asks for your name, work email address, project area, and message. You may also choose to provide a company or brand name. The form includes a consent checkbox before it can be submitted.",
  },
  {
    number: "03",
    title: "How information is used",
    body: "Enquiry details are used to understand your request, reply to you, discuss a possible engagement, and keep a reasonable business record of the conversation. Dev Yeasin does not sell enquiry details or use them for unrelated marketing.",
  },
  {
    number: "04",
    title: "Where information is stored",
    body: "Submitted enquiries are stored in a private Supabase project with access controls intended to prevent public viewing. A server-side notification can send an alert to Dev Yeasin’s business email when a new enquiry arrives. GitHub Pages hosts the public website files. These service providers may process information under their own terms and privacy practices.",
  },
  {
    number: "05",
    title: "Retention and security",
    body: "Enquiry information is kept only for as long as reasonably necessary to respond, maintain relevant business records, resolve a question, or meet legal obligations. Reasonable technical safeguards are used, including limited database permissions and restricted dashboard access. No internet service can promise absolute security.",
  },
  {
    number: "06",
    title: "Your choices",
    body: "You may ask to access, correct, or delete the personal information you submitted, subject to any legitimate record-keeping or legal requirement. You can also choose not to submit the form and contact Dev Yeasin directly by email instead.",
  },
  {
    number: "07",
    title: "Changes and contact",
    body: "This policy may be updated when the website’s data practices change. The latest version will always be posted on this page with its update date. For a privacy request or question, email devyeasin.pro@gmail.com with the subject line “Privacy request.”",
  },
];

export default function Privacy() {
  usePageMetadata({
    title: "Privacy Policy — Dev Yeasin",
    description: "How Dev Yeasin handles information submitted through the independent studio portfolio and enquiry form.",
    path: "/privacy",
  });

  return (
    <div className="site-shell min-h-screen">
      <SiteHeader />
      <main>
        <section className="dossier-hero dossier-hero-full">
          <div className="site-container">
            <div className="dossier-rail"><span>Policy / 01</span><span>Plain-language record</span></div>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-9">
                <p className="kicker">Privacy policy</p>
                <h1 className="display-title mt-6 max-w-6xl">Clear about what an enquiry shares—and why.</h1>
              </div>
              <p className="text-lg leading-8 text-white/60 lg:col-span-3">This page explains the limited information collected through the portfolio contact form and how it is handled.</p>
            </div>
            <div className="dossier-stamp">
              <span>Last updated</span>
              <strong>27 AUGUST 2026</strong>
              <span>Independent digital studio</span>
            </div>
          </div>
        </section>

        <section className="site-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <p className="kicker text-[#f04e37]">A direct record</p>
              <h2 className="serif-heading mt-6 text-5xl md:text-6xl">No hidden data story.</h2>
              <p className="body-copy mt-7">The form is for project conversations. It is not a newsletter signup, public directory, or data-selling channel.</p>
              <a href="/#contact" className="secondary-link mt-9"><ArrowLeft className="h-4 w-4" />Back to the enquiry form</a>
            </aside>

            <div className="lg:col-span-8">
              <div className="platform-table">
                {sections.map((section) => (
                  <article className="platform-line privacy-line" key={section.number}>
                    <span>{section.number}</span>
                    <div className="min-w-0 py-1"><h3 className="font-display text-2xl leading-tight text-[var(--ink)]">{section.title}</h3><p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--ink-muted)]">{section.body}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ink-panel">
          <div className="site-container grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
            <div className="md:col-span-8">
              <p className="kicker">Privacy contact</p>
              <h2 className="serif-heading mt-5 text-4xl text-white md:text-5xl">Need a copy, correction, or deletion request?</h2>
            </div>
            <div className="md:col-span-4 md:justify-self-end"><a href="mailto:devyeasin.pro@gmail.com?subject=Privacy%20request" className="footer-contact">Email Dev Yeasin <Mail className="h-4 w-4" /></a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
