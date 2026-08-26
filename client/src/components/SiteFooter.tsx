// Design note: Contemporary Digital Atelier — an understated footer that reinforces independent-studio positioning without fictional agency claims.
import { studio } from "@/content/siteContent";
import { DyMark } from "@/components/DyMark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-container grid gap-8 py-10 md:grid-cols-[1.3fr_1fr_auto] md:items-end">
        <div>
          <DyMark className="footer-mark" />
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">{studio.positioning}</p>
        </div>
        <div className="footer-meta">
          <span>{studio.location}</span>
          <span>Designed for global conversations</span>
        </div>
        <a href="/#contact" className="footer-contact">Begin with the brief <span>↗</span></a>
      </div>
      <div className="footer-copyright"><div className="site-container"><span>© {year} Dev Yeasin. All rights reserved.</span><div className="flex flex-wrap items-center gap-x-4 gap-y-2"><a href="/working-together" className="transition-colors hover:text-white">Working together</a><a href="/privacy" className="transition-colors hover:text-white">Privacy policy</a><span>Independent digital studio</span></div></div></div>
    </footer>
  );
}
