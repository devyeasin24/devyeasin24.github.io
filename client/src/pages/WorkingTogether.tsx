// Design note: Contemporary Digital Atelier — a concise client-guidance record with calm editorial hierarchy and no speculative promises.
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { usePageMetadata } from "@/lib/seo";

const answers = [
  {
    number: "01",
    question: "Who is this work for?",
    answer:
      "The studio is a fit for founders, small teams, independent professionals, and organisations that need a clearer website, storefront surface, funnel page, or practical automation foundation. The best fit depends on the brief, existing tools, and whether the requested work can be scoped responsibly.",
  },
  {
    number: "02",
    question: "What should I include in a first enquiry?",
    answer:
      "A useful first message includes your business or project, the main problem you want to solve, the page, site, or system involved, the tools you currently use, and any useful deadline or budget context. A short brief is enough to begin a focused conversation.",
  },
  {
    number: "03",
    question: "How is scope reviewed?",
    answer:
      "Dev Yeasin reviews the objective, required deliverables, dependencies, and reasonable next steps before confirming an engagement. Availability, scope, milestones, and any estimate are confirmed case by case after the brief is understood.",
  },
  {
    number: "04",
    question: "How are one-off and ongoing requests handled?",
    answer:
      "A clearly defined page, redesign, storefront refinement, or automation task can usually be considered as a fixed-scope project. Ongoing work is discussed separately, with priorities and an appropriate working rhythm agreed before work begins. No ongoing availability is assumed without that agreement.",
  },
  {
    number: "05",
    question: "What access or materials might be needed?",
    answer:
      "The required access depends on the project. It may include brand assets, copy, images, product details, existing page links, or limited access to the relevant platform. Access is requested only when it is necessary for the agreed work, and clients should avoid sharing credentials in the first enquiry.",
  },
  {
    number: "06",
    question: "How are feedback and revisions organised?",
    answer:
      "Feedback is most useful when it is consolidated, specific, and connected to the agreed objective. The revision approach is defined with the scope, so both sides understand what is included before work starts. New requirements may need a separate scope discussion.",
  },
  {
    number: "07",
    question: "What does handover include?",
    answer:
      "Handover is discussed for each project and may include completed page or system access, an organised summary of what was delivered, and practical next steps for the client’s team. The exact handover materials depend on the platform and agreed deliverables.",
  },
  {
    number: "08",
    question: "Which communication route should I use?",
    answer:
      "Use the portfolio enquiry form to start. It sends a private message to Dev Yeasin’s business email, allowing a direct reply to the address you provide. A meeting or platform-specific conversation can be arranged when it is appropriate to the project and its terms.",
  },
];

export default function WorkingTogether() {
  usePageMetadata({
    title: "Working Together — Dev Yeasin",
    description:
      "Practical answers about scope, access, feedback, handover, availability, and starting a project with Dev Yeasin.",
    path: "/working-together",
  });

  return (
    <div className="site-shell min-h-screen">
      <SiteHeader />
      <main>
        <section className="dossier-hero dossier-hero-full">
          <div className="site-container">
            <div className="dossier-rail"><span>Working together / 01</span><span>Practical client guidance</span></div>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-9">
                <p className="kicker">Working together</p>
                <h1 className="display-title mt-6 max-w-6xl">A clear start makes a better build.</h1>
              </div>
              <p className="text-lg leading-8 text-white/60 lg:col-span-3">Eight direct answers about starting, scoping, building, and handing over a project with an independent digital studio.</p>
            </div>
            <div className="dossier-stamp">
              <span>Client guidance</span>
              <strong>CASE BY CASE</strong>
              <span>Independent digital studio</span>
            </div>
          </div>
        </section>

        <section className="site-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <p className="kicker text-[#f04e37]">Before the brief</p>
              <h2 className="serif-heading mt-6 text-5xl md:text-6xl">The useful details, without a sales script.</h2>
              <p className="body-copy mt-7">This page answers the practical questions that can delay a first conversation. It does not replace a project scope; each engagement is reviewed on its own facts.</p>
              <a href="/#contact" className="secondary-link mt-9"><ArrowLeft className="h-4 w-4" />Start with the enquiry form</a>
            </aside>

            <div className="lg:col-span-8">
              <div className="platform-table">
                {answers.map((item) => (
                  <article className="platform-line privacy-line" key={item.number}>
                    <span>{item.number}</span>
                    <div className="min-w-0 py-1">
                      <h2 className="font-display text-2xl leading-tight text-[var(--ink)]">{item.question}</h2>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--ink-muted)]">{item.answer}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ink-panel">
          <div className="site-container grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
            <div className="md:col-span-8">
              <p className="kicker">A considered first message</p>
              <h2 className="serif-heading mt-5 text-4xl text-white md:text-5xl">Share the situation. We can work out the next useful step.</h2>
            </div>
            <div className="md:col-span-4 md:justify-self-end"><a href="/#contact" className="footer-contact">Begin with the brief <ArrowRight className="h-4 w-4" /></a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
