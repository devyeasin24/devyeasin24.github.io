// Design note: Contemporary Digital Atelier — quiet navigation, crisp geometry, and a single Signal Red action.
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { studio } from "@/content/siteContent";
import { DyMark } from "@/components/DyMark";

const navItems = [
  ["Services", "/#services"],
  ["Method", "/#method"],
  ["About", "/about"],
  ["Contact", "/#contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container flex h-[76px] items-center justify-between gap-4">
        <a href="/" className="brand-lockup" aria-label="Dev Yeasin home">
          <DyMark />
          <span>
            <strong>{studio.name}</strong>
            <small>{studio.descriptor}</small>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}
        </nav>

        <a href="/#contact" className="primary-link hidden sm:inline-flex">
          Discuss a project <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <button onClick={() => setOpen(!open)} className="menu-button lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">
          <div className="site-container py-3">
            {navItems.map(([label, href], index) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="mobile-nav-link">
                <span>0{index + 1}</span>{label}<ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
